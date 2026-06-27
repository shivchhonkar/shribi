import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import ServicesPageContent from '@/components/pages/services-page'
import { pageMetadata } from '@/lib/site'

import '@/styles/services.css'

export const metadata: Metadata = pageMetadata({
  title: 'Services — Shribi Technologies',
  description:
    'Explore Shribi core services: billing & inventory, school ERP, estate CRM, web development, and AI integration for industries across India.',
  path: '/services/',
})

export default function ServicesPage() {
  return (
    <SiteShell activePage="services" bodyClass="page-services">
      <ServicesPageContent />
    </SiteShell>
  )
}
