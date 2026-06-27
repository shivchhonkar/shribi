import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import AboutPageContent from '@/components/pages/about-page'
import { pageMetadata } from '@/lib/site'

import '@/styles/about.css'

export const metadata: Metadata = pageMetadata({
  title: 'About Us — Shribi Technologies',
  description:
    'Learn about Shribi Technologies — our vision, mission, founder, and commitment to building scalable digital solutions for businesses across India.',
  path: '/about-us/',
})

export default function AboutPage() {
  return (
    <SiteShell activePage="about" bodyClass="page-about">
      <AboutPageContent />
    </SiteShell>
  )
}
