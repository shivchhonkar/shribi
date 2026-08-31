import type { Metadata } from 'next'

import ServiceLandingRoute from '@/components/pages/service-landing-route'
import { serviceLandingMetadata } from '@/lib/service-landing-content'

export const metadata: Metadata = serviceLandingMetadata('ai-automation-and-integration')

export default function AiAutomationAndIntegrationPage() {
  return <ServiceLandingRoute slug="ai-automation-and-integration" />
}
