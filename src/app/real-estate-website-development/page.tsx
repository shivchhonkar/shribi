import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('real-estate-website-development')

export default function RealEstateWebsiteDevelopmentPage() {
  return <ServiceLandingRoute slug="real-estate-website-development" />
}
