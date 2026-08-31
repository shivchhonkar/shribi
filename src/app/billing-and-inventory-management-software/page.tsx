import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import BillintPageContent from '@/components/pages/billint-page'
import { pageMetadata } from '@/lib/site'

import '@/styles/school-erp.css'

export const metadata: Metadata = pageMetadata({
  title: 'Billing and Inventory Management Software — Billint',
  description:
    'Billint is free GST billing and inventory software for small businesses. Create GST invoices, track stock, manage payments, and stay compliant. Start free — no credit card required.',
  path: '/billing-and-inventory-management-software/',
  keywords: [
    'billing and inventory management software',
    'GST billing software',
    'free GST invoice software',
    'inventory management software India',
    'Billint',
  ],
})

export default function BillintPage() {
  return (
    <SiteShell activePage="billint" bodyClass="page-school-erp">
      <BillintPageContent />
    </SiteShell>
  )
}
