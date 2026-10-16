import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('software-development-company-in-mumbai')

export default function SoftwareDevelopmentCompanyInMumbaiPage() {
  return <ServiceLandingRoute slug="software-development-company-in-mumbai" />
}
