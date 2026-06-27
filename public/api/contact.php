<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$configPath = dirname(__DIR__) . '/config/mail.config.php';
$mailerPath = dirname(__DIR__) . '/lib/SmtpMailer.php';

if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Mail is not configured. Copy config/mail.config.example.php to config/mail.config.php.',
    ]);
    exit;
}

require $mailerPath;

$config = require $configPath;

$raw = file_get_contents('php://input');
$input = [];

if (is_string($raw) && $raw !== '') {
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) {
        $input = $decoded;
    }
}

if ($input === []) {
    $input = $_POST;
}

if (!empty($input['website'])) {
    echo json_encode([
        'success' => true,
        'message' => "Thank you! Your message has been received. We'll get back to you soon.",
    ]);
    exit;
}

$name = trim((string) ($input['name'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please fill in all fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

if (mb_strlen($name) > 120 || mb_strlen($email) > 254 || mb_strlen($message) > 5000) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'One or more fields are too long.']);
    exit;
}

$toEmail = (string) ($config['to_email'] ?? $config['from_email'] ?? $config['smtp_user']);
$subject = 'New contact form message from ' . $name;
$body = implode("\n", [
    'You received a new message from the Shribi website contact form.',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    '',
    'Message:',
    $message,
    '',
    '---',
    'Sent: ' . gmdate('Y-m-d H:i:s') . ' UTC',
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
]);

$mailer = new SmtpMailer($config);
$sent = $mailer->send($toEmail, $subject, $body, $email, $name);

if ($sent) {
    echo json_encode([
        'success' => true,
        'message' => "Thank you! Your message has been received. We'll get back to you soon.",
    ]);
    exit;
}

error_log('Shribi contact form error: ' . $mailer->getLastError());

http_response_code(500);
echo json_encode([
    'success' => false,
    'message' => 'Sorry, we could not send your message right now. Please email info@shribi.com directly.',
]);
