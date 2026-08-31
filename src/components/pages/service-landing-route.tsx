import SiteShell from '@/components/layout/site-shell'
import ServiceLandingPageContent from '@/components/pages/service-landing-page'

import '@/styles/services.css'

export default function ServiceLandingRoute({ slug }: { slug: string }) {
  return (
    <SiteShell activePage="services" bodyClass="page-services">
      <ServiceLandingPageContent slug={slug} />
    </SiteShell>
  )
}
