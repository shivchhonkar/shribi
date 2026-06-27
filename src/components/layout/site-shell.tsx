import BodyClass from '@/components/layout/body-class'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import PageEffects from '@/components/layout/page-effects'
import type { PageKey } from '@/lib/site'

export default function SiteShell({
  activePage,
  bodyClass,
  children,
}: {
  activePage: PageKey
  bodyClass: string
  children: React.ReactNode
}) {
  return (
    <>
      <BodyClass className={bodyClass} />
      <div className="page-bg" aria-hidden="true">
        <div className="hex-grid" />
        <div className="glow glow-1" />
        <div className="glow glow-2" />
      </div>
      <Header activePage={activePage} />
      <main>{children}</main>
      <Footer />
      <PageEffects theme={activePage} />
    </>
  )
}
