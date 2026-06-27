import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/styles.css'
import '@/styles/header.css'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
