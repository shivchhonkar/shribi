import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import TalentPageContent from '@/components/pages/talent-page'
import { pageMetadata } from '@/lib/site'
import { TALENT_PATH, talentPage } from '@/lib/talent-content'

import '@/styles/services.css'

export const metadata: Metadata = pageMetadata({
  title: talentPage.title,
  description: talentPage.description,
  path: TALENT_PATH,
  keywords: talentPage.keywords,
})

export default function ShribiTalentPage() {
  return (
    <SiteShell activePage="services" bodyClass="page-services">
      <TalentPageContent />
    </SiteShell>
  )
}
