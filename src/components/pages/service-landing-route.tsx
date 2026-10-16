import SiteShell from '@/components/layout/site-shell'
import ServiceLandingPageContent from '@/components/pages/service-landing-page'
import { lightHeroTone } from '@/lib/service-landing-content'

import '@/styles/services.css'

export default function ServiceLandingRoute({ slug }: { slug: string }) {
  const lightHero = lightHeroTone(slug)
  const bodyClass = lightHero ? `page-services ${lightHero}` : 'page-services'

  return (
    <SiteShell activePage="services" bodyClass={bodyClass}>
      <ServiceLandingPageContent slug={slug} />
    </SiteShell>
  )
}
