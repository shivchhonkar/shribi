# Shribi Website

A responsive, professional landing page for **Shribi**, styled to match the brand logo (royal blue, cyan accents, dark theme, geometric hex patterns).

## Quick start

### Static preview (forms won't send mail)

Open `index.html` in a browser, or run a local server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

### Contact form (PHP + Hostinger SMTP)

1. Copy mail config and add your Hostinger email credentials:

```bash
copy config\mail.config.example.php config\mail.config.php
```

Edit `config/mail.config.php`:

- `smtp_host`: `smtp.hostinger.com`
- `smtp_port`: `465` (SSL) or `587` (TLS — set `smtp_secure` to `tls`)
- `smtp_user` / `smtp_pass`: your Hostinger mailbox (e.g. `info@shribi.com`)
- `to_email`: where contact submissions are delivered

2. Run with PHP's built-in server (so `api/contact.php` works):

```bash
php -S localhost:8080
```

Deploy the full project (including `config/mail.config.php`) to Hostinger hosting.

## Structure

```
shribi/
├── index.html
├── contact.html
├── api/contact.php       # Contact form handler (SMTP)
├── lib/SmtpMailer.php    # Hostinger SMTP client
├── config/mail.config.php
├── css/styles.css
├── js/main.js
└── assets/
```

## Customize

- Update contact email/phone in `index.html` and `contact.html`.
- Edit copy, stats, and services to match your business.
- Contact forms on `index.html` and `contact.html` POST to `api/contact.php`.
