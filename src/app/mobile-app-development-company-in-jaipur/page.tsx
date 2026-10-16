import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('mobile-app-development-company-in-jaipur')

export default function MobileAppDevelopmentCompanyInJaipurPage() {
  return <ServiceLandingRoute slug="mobile-app-development-company-in-jaipur" />
}
