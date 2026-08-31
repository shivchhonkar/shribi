import net from 'node:net'
import tls from 'node:tls'

export type SmtpConfig = {
  host: string
  port: number
  secure: 'ssl' | 'tls'
  username: string
  password: string
  fromEmail: string
  fromName: string
}

type SocketLike = net.Socket | tls.TLSSocket

export class SmtpMailer {
  private lastError = ''

  constructor(private readonly config: SmtpConfig) {}

  getLastError() {
    return this.lastError
  }

  async send(
    toEmail: string,
    subject: string,
    body: string,
    replyToEmail?: string | null,
    replyToName?: string | null,
  ): Promise<boolean> {
    this.lastError = ''

    if (!this.config.username || !this.config.password) {
      this.lastError = 'SMTP credentials are not configured.'
      return false
    }

    const session = new SmtpSession()

    try {
      await session.connect(this.config)

      await session.expect('220')
      await session.command(`EHLO ${this.config.host}`)
      const ehlo = await session.readMultiline()

      if (this.config.secure === 'tls') {
        if (!ehlo.toLowerCase().includes('starttls')) {
          throw new Error('STARTTLS is not supported by the server.')
        }
        await session.command('STARTTLS', '220')
        await session.upgradeToTls(this.config.host)
        await session.command(`EHLO ${this.config.host}`)
        await session.readMultiline()
      }

      await session.command('AUTH LOGIN', '334')
      await session.command(Buffer.from(this.config.username).toString('base64'), '334')
      await session.command(Buffer.from(this.config.password).toString('base64'), '235')

      const fromHeader = formatAddress(this.config.fromEmail, this.config.fromName)
      const toHeader = formatAddress(toEmail)

      await session.command(`MAIL FROM:<${this.config.fromEmail}>`, '250')
      await session.command(`RCPT TO:<${toEmail}>`, '250')
      await session.command('DATA', '354')

      const headers = [
        `Date: ${new Date().toUTCString().replace(/GMT$/, '+0000')}`,
        `From: ${fromHeader}`,
        `To: ${toHeader}`,
        `Subject: ${encodeHeader(subject)}`,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
      ]

      if (replyToEmail) {
        headers.push(`Reply-To: ${formatAddress(replyToEmail, replyToName ?? '')}`)
      }

      let message = `${headers.join('\r\n')}\r\n\r\n${normalizeBody(body)}`
      message = message.replace(/^\./gm, '..')

      await session.write(`${message}\r\n.\r\n`)
      await session.expect('250')
      await session.command('QUIT', '221')

      return true
    } catch (error) {
      this.lastError = error instanceof Error ? error.message : 'Failed to send email.'
      return false
    } finally {
      session.close()
    }
  }
}

class SmtpSession {
  private socket: SocketLike | null = null
  private leftover = ''

  async connect(config: SmtpConfig) {
    this.socket =
      config.secure === 'ssl'
        ? await connectTls(config.host, config.port)
        : await connectTcp(config.host, config.port)
  }

  async upgradeToTls(host: string) {
    if (!this.socket) {
      throw new Error('SMTP socket is not connected.')
    }

    this.socket = await new Promise<tls.TLSSocket>((resolve, reject) => {
      const secureSocket = tls.connect({ socket: this.socket as net.Socket, servername: host }, () => {
        resolve(secureSocket)
      })
      secureSocket.setTimeout(20_000)
      secureSocket.once('error', reject)
    })
  }

  async command(command: string, expectCode?: string) {
    await this.write(`${command}\r\n`)
    if (expectCode) {
      await this.expect(expectCode)
    }
  }

  async expect(code: string) {
    const response = await this.readMultiline()
    if (!response.startsWith(code)) {
      throw new Error(`Unexpected SMTP response: ${response}`)
    }
  }

  async write(data: string) {
    const socket = this.requireSocket()
    await new Promise<void>((resolve, reject) => {
      socket.write(data, (error) => {
        if (error) reject(error)
        else resolve()
      })
    })
  }

  async readMultiline() {
    let data = ''

    while (true) {
      const line = await this.readLine()
      data += line
      if (/^\d{3} /.test(line)) {
        break
      }
    }

    return data.trim()
  }

  close() {
    this.socket?.destroy()
    this.socket = null
  }

  private requireSocket() {
    if (!this.socket) {
      throw new Error('SMTP socket is not connected.')
    }
    return this.socket
  }

  private readLine() {
    return new Promise<string>((resolve, reject) => {
      const socket = this.requireSocket()

      const onError = (error: Error) => {
        cleanup()
        reject(error)
      }

      const onClose = () => {
        cleanup()
        reject(new Error('SMTP connection closed.'))
      }

      const tryRead = () => {
        const newline = this.leftover.indexOf('\n')
        if (newline === -1) {
          return false
        }

        const line = this.leftover.slice(0, newline + 1)
        this.leftover = this.leftover.slice(newline + 1)
        cleanup()
        resolve(line)
        return true
      }

      const onData = (chunk: Buffer) => {
        this.leftover += chunk.toString('utf8')
        tryRead()
      }

      const cleanup = () => {
        socket.off('data', onData)
        socket.off('error', onError)
        socket.off('close', onClose)
      }

      socket.on('data', onData)
      socket.once('error', onError)
      socket.once('close', onClose)

      if (tryRead()) {
        return
      }
    })
  }
}

function connectTls(host: string, port: number) {
  return new Promise<tls.TLSSocket>((resolve, reject) => {
    const socket = tls.connect({ host, port, servername: host }, () => resolve(socket))
    socket.setTimeout(20_000)
    socket.once('timeout', () => socket.destroy(new Error('SMTP connection timed out.')))
    socket.once('error', reject)
  })
}

function connectTcp(host: string, port: number) {
  return new Promise<net.Socket>((resolve, reject) => {
    const socket = net.connect({ host, port }, () => resolve(socket))
    socket.setTimeout(20_000)
    socket.once('timeout', () => socket.destroy(new Error('SMTP connection timed out.')))
    socket.once('error', reject)
  })
}

function formatAddress(email: string, name = '') {
  if (!name) {
    return email
  }

  return `${encodeHeader(name)} <${email}>`
}

function encodeHeader(value: string) {
  if (/[^\x20-\x7E]/.test(value)) {
    return `=?UTF-8?B?${Buffer.from(value).toString('base64')}?=`
  }

  return value
}

function normalizeBody(body: string) {
  return body.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n/g, '\r\n')
}
