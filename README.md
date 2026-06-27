# Shribi Website

SEO-friendly marketing site for **Shribi Technologies**, built with **Next.js** (App Router) and exported as static HTML for deployment on Hostinger or any static host.

## Quick start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build (static export)

```bash
npm run build
```

Static files are generated in `out/`:

- `out/index.html` — Home
- `out/about-us/index.html` — About
- `out/services/index.html` — Services
- `out/contact/index.html` — Contact
- `out/sitemap.xml`, `out/robots.txt` — SEO
- `out/api/contact.php` — Contact form handler (PHP)

Deploy the entire `out/` folder to your web host.

### Contact form (PHP + Hostinger SMTP)

1. Copy mail config on the server:

```bash
copy public\config\mail.config.example.php public\config\mail.config.php
```

Edit `public/config/mail.config.php`:

- `smtp_host`: `smtp.hostinger.com`
- `smtp_port`: `465` (SSL) or `587` (TLS — set `smtp_secure` to `tls`)
- `smtp_user` / `smtp_pass`: your Hostinger mailbox (e.g. `info@shribi.com`)
- `to_email`: where contact submissions are delivered

2. After deploy, forms POST to `/api/contact.php`.

Optional env vars (create `.env.local` for dev):

```bash
NEXT_PUBLIC_SITE_URL=https://www.shribi.com
NEXT_PUBLIC_CONTACT_API=/api/contact.php
```

## Project structure

```
shribi/
├── src/
│   ├── app/              # Routes (/, /about-us/, /services/, /contact/)
│   ├── components/       # Header, footer, pages, forms
│   ├── lib/              # Site config, shared content
│   └── styles/           # CSS (ported from legacy site)
├── public/
│   ├── assets/           # Images, logos
│   ├── api/contact.php   # SMTP contact handler
│   └── config/           # Mail config (not committed)
├── out/                  # Static export (after build)
└── next.config.mjs       # output: 'export'
```

## Legacy static files

The original `index.html`, `about-us.html`, `services.html`, and `contact.html` remain in the repo for reference. The Next.js app is the primary site.

## Customize

- Page copy and services: `src/lib/content.ts` and page components in `src/components/pages/`
- Contact details: `src/lib/site.ts`
- Per-page SEO: `metadata` exports in each `src/app/*/page.tsx`
