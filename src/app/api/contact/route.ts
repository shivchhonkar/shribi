import { NextResponse } from 'next/server'

import { SmtpMailer, type SmtpConfig } from '@/lib/smtp-mailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SUCCESS_MESSAGE = "Thank you! Your message has been received. We'll get back to you soon."
const FAIL_MESSAGE =
  'Sorry, we could not send your message right now. Please email info@shribi.com directly.'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactPayload = {
  name?: unknown
  email?: unknown
  message?: unknown
  website?: unknown
  hp_field?: unknown
}

function json(status: number, body: { success: boolean; message: string }) {
  return NextResponse.json(body, { status })
}

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function getMailConfig(): SmtpConfig & { toEmail: string } {
  const username = process.env.SMTP_USER || ''
  const password = process.env.SMTP_PASS || ''
  const secure: SmtpConfig['secure'] =
    (process.env.SMTP_SECURE || 'ssl').toLowerCase() === 'tls' ? 'tls' : 'ssl'

  return {
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure,
    username,
    password,
    fromEmail: process.env.SMTP_FROM_EMAIL || username,
    fromName: process.env.SMTP_FROM_NAME || 'Shribi Website',
    toEmail: process.env.SMTP_TO_EMAIL || process.env.SMTP_FROM_EMAIL || username,
  }
}

export function GET() {
  return json(405, { success: false, message: 'Method not allowed.' })
}

export async function POST(request: Request) {
  let input: ContactPayload = {}

  try {
    input = (await request.json()) as ContactPayload
  } catch {
    input = {}
  }

  if (asTrimmedString(input.website) || asTrimmedString(input.hp_field)) {
    return json(200, { success: true, message: SUCCESS_MESSAGE })
  }

  const name = asTrimmedString(input.name)
  const email = asTrimmedString(input.email)
  const message = asTrimmedString(input.message)

  if (!name || !email || !message) {
    return json(422, { success: false, message: 'Please fill in all fields.' })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return json(422, { success: false, message: 'Please enter a valid email address.' })
  }

  if (name.length > 120 || email.length > 254 || message.length > 5000) {
    return json(422, { success: false, message: 'One or more fields are too long.' })
  }

  const config = getMailConfig()

  if (!config.username || !config.password || !config.toEmail) {
    console.error('Shribi contact form error: SMTP credentials are not configured.')
    return json(500, { success: false, message: FAIL_MESSAGE })
  }

  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
  const subject = `New contact form message from ${name}`
  const body = [
    'You received a new message from the Shribi website contact form.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
    '',
    '---',
    `Sent: ${new Date().toISOString().slice(0, 19).replace('T', ' ')} UTC`,
    `IP: ${ip}`,
  ].join('\n')

  const mailer = new SmtpMailer(config)
  const sent = await mailer.send(config.toEmail, subject, body, email, name)

  if (sent) {
    return json(200, { success: true, message: SUCCESS_MESSAGE })
  }

  console.error('Shribi contact form error:', mailer.getLastError())
  return json(500, { success: false, message: FAIL_MESSAGE })
}
