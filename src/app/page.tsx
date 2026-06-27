import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import HomePageContent from '@/components/pages/home-page'
import { pageMetadata } from '@/lib/site'

import '@/styles/home.css'

export const metadata: Metadata = pageMetadata({
  title: 'Shribi — Technology Solutions',
  description:
    'Shribi delivers modern software, cloud infrastructure, and business technology tailored for growth — precise, reliable, and beautifully engineered.',
  path: '/',
})

export default function HomePage() {
  return (
    <SiteShell activePage="home" bodyClass="page-home">
      <HomePageContent />
    </SiteShell>
  )
}
