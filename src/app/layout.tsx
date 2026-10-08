import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import '@/styles/styles.css'
import '@/styles/header.css'
import '@/styles/whatsapp-float.css'
import FloatActions from '@/components/layout/float-actions'
import { SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
    default: 'Custom Software Development Company | Shribi',
    template: `%s | Shribi`,
  },
  description:
    'Shribi builds custom software, websites, and mobile apps for growing businesses, including billing, school ERP, and property platforms.',
  icons: { icon: '/assets/shribi-logo.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-QD6NWZ0LZ5"
      strategy="lazyOnload"
    />
    <Script id="ga-init" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QD6NWZ0LZ5');
      `}
    </Script>

      <body className={inter.className}>
        {children}
        <FloatActions />
      </body>
    </html>
  )
}
