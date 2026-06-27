<?php

declare(strict_types=1);

final class SmtpMailer
{
    private string $host;
    private int $port;
    private string $secure;
    private string $username;
    private string $password;
    private string $fromEmail;
    private string $fromName;
    private ?resource $socket = null;
    private string $lastError = '';

    public function __construct(array $config)
    {
        $this->host = (string) ($config['smtp_host'] ?? 'smtp.hostinger.com');
        $this->port = (int) ($config['smtp_port'] ?? 465);
        $this->secure = strtolower((string) ($config['smtp_secure'] ?? 'ssl'));
        $this->username = (string) ($config['smtp_user'] ?? '');
        $this->password = (string) ($config['smtp_pass'] ?? '');
        $this->fromEmail = (string) ($config['from_email'] ?? $this->username);
        $this->fromName = (string) ($config['from_name'] ?? 'Website');
    }

    public function getLastError(): string
    {
        return $this->lastError;
    }

    public function send(string $toEmail, string $subject, string $body, ?string $replyToEmail = null, ?string $replyToName = null): bool
    {
        $this->lastError = '';

        if ($this->username === '' || $this->password === '') {
            $this->lastError = 'SMTP credentials are not configured.';
            return false;
        }

        $remote = $this->secure === 'ssl'
            ? 'ssl://' . $this->host . ':' . $this->port
            : $this->host . ':' . $this->port;

        $this->socket = @stream_socket_client(
            $remote,
            $errno,
            $errstr,
            20,
            STREAM_CLIENT_CONNECT,
            stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true]])
        );

        if (!$this->socket) {
            $this->lastError = "Could not connect to SMTP server: $errstr ($errno)";
            return false;
        }

        stream_set_timeout($this->socket, 20);

        try {
            $this->expect('220');

            $this->command('EHLO ' . $this->host);
            $ehlo = $this->readMultiline();

            if ($this->secure === 'tls') {
                if (stripos($ehlo, 'STARTTLS') === false) {
                    throw new RuntimeException('STARTTLS is not supported by the server.');
                }
                $this->command('STARTTLS', '220');
                if (!stream_socket_enable_crypto($this->socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                    throw new RuntimeException('Could not enable TLS.');
                }
                $this->command('EHLO ' . $this->host);
                $this->readMultiline();
            }

            $this->command('AUTH LOGIN', '334');
            $this->command(base64_encode($this->username), '334');
            $this->command(base64_encode($this->password), '235');

            $fromHeader = $this->formatAddress($this->fromEmail, $this->fromName);
            $toHeader = $this->formatAddress($toEmail);

            $this->command('MAIL FROM:<' . $this->fromEmail . '>', '250');
            $this->command('RCPT TO:<' . $toEmail . '>', '250');
            $this->command('DATA', '354');

            $headers = [
                'Date: ' . gmdate('D, d M Y H:i:s') . ' +0000',
                'From: ' . $fromHeader,
                'To: ' . $toHeader,
                'Subject: ' . $this->encodeHeader($subject),
                'MIME-Version: 1.0',
                'Content-Type: text/plain; charset=UTF-8',
                'Content-Transfer-Encoding: 8bit',
            ];

            if ($replyToEmail) {
                $headers[] = 'Reply-To: ' . $this->formatAddress($replyToEmail, $replyToName ?? '');
            }

            $message = implode("\r\n", $headers) . "\r\n\r\n" . $this->normalizeBody($body);
            $message = preg_replace('/^\./m', '..', $message) ?? $message;

            fwrite($this->socket, $message . "\r\n.\r\n");
            $this->expect('250');
            $this->command('QUIT', '221');

            return true;
        } catch (Throwable $e) {
            $this->lastError = $e->getMessage();
            return false;
        } finally {
            if (is_resource($this->socket)) {
                fclose($this->socket);
            }
            $this->socket = null;
        }
    }

    private function command(string $command, ?string $expectCode = null): void
    {
        fwrite($this->socket, $command . "\r\n");
        if ($expectCode !== null) {
            $this->expect($expectCode);
        }
    }

    private function expect(string $code): void
    {
        $response = $this->readMultiline();
        if (strpos($response, $code) !== 0) {
            throw new RuntimeException('Unexpected SMTP response: ' . $response);
        }
    }

    private function readMultiline(): string
    {
        $data = '';

        while (!feof($this->socket)) {
            $line = fgets($this->socket);
            if ($line === false) {
                break;
            }
            $data .= $line;
            if (preg_match('/^\d{3} /', $line)) {
                break;
            }
        }

        return trim($data);
    }

    private function formatAddress(string $email, string $name = ''): string
    {
        if ($name === '') {
            return $email;
        }

        return $this->encodeHeader($name) . ' <' . $email . '>';
    }

    private function encodeHeader(string $value): string
    {
        if (preg_match('/[^\x20-\x7E]/', $value)) {
            return '=?UTF-8?B?' . base64_encode($value) . '?=';
        }

        return $value;
    }

    private function normalizeBody(string $body): string
    {
        $body = str_replace(["\r\n", "\r"], "\n", $body);
        return str_replace("\n", "\r\n", $body);
    }
}
