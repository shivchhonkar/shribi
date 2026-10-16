import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('mobile-app-development-company-in-hyderabad')

export default function MobileAppDevelopmentCompanyInHyderabadPage() {
  return <ServiceLandingRoute slug="mobile-app-development-company-in-hyderabad" />
}
