import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('website-development-company-in-mathura')

export default function WebsiteDevelopmentCompanyInMathuraPage() {
  return <ServiceLandingRoute slug="website-development-company-in-mathura" />
}
