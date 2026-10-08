import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import HomePageContent from '@/components/pages/home-page'
import { pageMetadata } from '@/lib/site'

import '@/styles/home.css'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Custom Software Development Company | Shribi',
    description:
      'Shribi builds custom software, websites, and mobile apps for growing businesses, including billing, school ERP, and property platforms.',
    path: '/',
  }),
  title: {
    absolute: 'Custom Software Development Company | Shribi',
  },
}

export default function HomePage() {
  return (
    <SiteShell activePage="home" bodyClass="page-home">
      <HomePageContent />
    </SiteShell>
  )
}
