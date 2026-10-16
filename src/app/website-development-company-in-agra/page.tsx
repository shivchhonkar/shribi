import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('website-development-company-in-agra')

export default function WebsiteDevelopmentCompanyInAgraPage() {
  return <ServiceLandingRoute slug="website-development-company-in-agra" />
}
