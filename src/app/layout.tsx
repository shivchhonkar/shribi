import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import '@/styles/styles.css'
import '@/styles/header.css'
import '@/styles/whatsapp-float.css'
import WhatsAppFloat from '@/components/layout/whatsapp-float'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Technology Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Shribi delivers modern software, cloud infrastructure, and business technology tailored for growth.',
  icons: { icon: '/assets/shribi-logo.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QD6NWZ0LZ5" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-8T0ELQ8YZW');`}
        </Script>

      <body className={inter.className}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
