import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import ContactPageContent from '@/components/pages/contact-page'
import { pageMetadata } from '@/lib/site'

import '@/styles/contact.css'

export const metadata: Metadata = pageMetadata({
  title: 'Contact — Shribi Technologies',
  description:
    'Contact Shribi Technologies — offices in Noida, Mathura, and Jaipur. Email, phone, and business hours. We respond within one business day.',
  path: '/contact/',
})

export default function ContactPage() {
  return (
    <SiteShell activePage="contact" bodyClass="page-contact">
      <ContactPageContent />
    </SiteShell>
  )
}
