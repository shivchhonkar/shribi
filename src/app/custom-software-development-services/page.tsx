import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('custom-software-development-services')

export default function CustomSoftwareDevelopmentServicesPage() {
  return <ServiceLandingRoute slug="custom-software-development-services" />
}
