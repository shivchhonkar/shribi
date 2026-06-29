import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import SchoolErpPageContent from '@/components/pages/school-erp-page'
import { pageMetadata } from '@/lib/site'

import '@/styles/school-erp.css'

export const metadata: Metadata = pageMetadata({
  title: 'School ERP — Shribi Edufy',
  description:
    'Shribi Edufy is an advanced School ERP for admissions, academics, fees, HR, transport, exams, and parent communication — built for modern Indian schools.',
  path: '/school-erp/',
})

export default function SchoolErpPage() {
  return (
    <SiteShell activePage="school-erp" bodyClass="page-school-erp">
      <SchoolErpPageContent />
    </SiteShell>
  )
}
