import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('mobile-app-development-services')

export default function MobileAppDevelopmentServicesPage() {
  return <ServiceLandingRoute slug="mobile-app-development-services" />
}
