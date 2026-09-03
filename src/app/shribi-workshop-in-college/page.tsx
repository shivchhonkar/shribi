import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import WorkshopPageContent from '@/components/pages/workshop-page'
import { pageMetadata } from '@/lib/site'
import { WORKSHOP_PATH, workshopPage } from '@/lib/workshop-content'

import '@/styles/services.css'

export const metadata: Metadata = pageMetadata({
  title: workshopPage.title,
  description: workshopPage.description,
  path: WORKSHOP_PATH,
  keywords: workshopPage.keywords,
})

export default function ShribiWorkshopInCollegePage() {
  return (
    <SiteShell activePage="services" bodyClass="page-services">
      <WorkshopPageContent />
    </SiteShell>
  )
}
