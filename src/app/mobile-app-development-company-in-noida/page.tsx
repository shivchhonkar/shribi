import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('mobile-app-development-company-in-noida')

export default function MobileAppDevelopmentCompanyInNoidaPage() {
  return <ServiceLandingRoute slug="mobile-app-development-company-in-noida" />
}
