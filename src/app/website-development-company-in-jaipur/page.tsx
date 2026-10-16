import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('website-development-company-in-jaipur')

export default function WebsiteDevelopmentCompanyInJaipurPage() {
  return <ServiceLandingRoute slug="website-development-company-in-jaipur" />
}
