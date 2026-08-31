import Image from 'next/image'
import Link from 'next/link'

import { ServiceCard } from '@/components/shared/service-card'
import {
  getRelatedServiceLandings,
  getServiceLanding,
} from '@/lib/service-landing-content'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, SITE_NAME, SITE_URL } from '@/lib/site'

const whyIcons = [
  <path key="building" d="M3 21h18M5 21V7l7-4 7 4v14" />,
  <path
    key="shield"
    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  />,
  <path key="bolt" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  <>
    <path d="M3 18v-6a9 9 0 0118 0v6" />
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
  </>,
]

const processIcons = [
  <path key="search" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />,
  <path key="pen" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
  <path key="code" d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 4l-4 16" />,
  <path key="rocket" d="M5 13l4 4L19 7" />,
]

function offeringDelayClass(index: number) {
  if (index === 1) return 'reveal-delay'
  if (index === 2) return 'reveal-delay-2'
  if (index === 3) return 'reveal-delay-3'
  return ''
}

export default function ServiceLandingPageContent({ slug }: { slug: string }) {
  const page = getServiceLanding(slug)
  const related = getRelatedServiceLandings(slug)
  const pageUrl = `${SITE_URL}${page.path}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: page.title,
        description: page.description,
        url: pageUrl,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: page.areaServed || 'India',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services/` },
          { '@type': 'ListItem', position: 3, name: page.title, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="services-hero" id="services-hero">
        <div className="services-hero-banner-bg" aria-hidden="true">
          <Image
            src={page.bannerImage || '/assets/services.png'}
            alt=""
            width={1920}
            height={1080}
            priority
            decoding="async"
          />
        </div>
        <div className="container services-hero-shell">
          <div className="services-hero-grid">
            <div className="services-hero-content reveal">
              <nav className="landing-breadcrumb" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/services/">Services</Link>
                  </li>
                  <li aria-current="page">{page.navLabel}</li>
                </ol>
              </nav>
              <p className="eyebrow">{page.eyebrow}</p>
              <h1>
                {page.h1} <span className="gradient-text">{page.h1Highlight}</span>
              </h1>
              <p className="services-hero-lead">{page.lead}</p>
              <div className="services-hero-actions">
                <a href="#offerings" className="btn btn-primary">
                  Explore offerings →
                </a>
                <Link href="/contact/" className="btn btn-ghost">
                  Talk to an expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="overview">
        <div className="container landing-overview">
          <div className="section-header reveal">
            <span className="section-tag">{page.overviewTag}</span>
            <h2>{page.overviewTitle}</h2>
            <p>{page.overviewText}</p>
          </div>
        </div>
      </section>

      <section className="section section-services-dark" id="offerings">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{page.offeringsTag}</span>
            <h2>{page.offeringsTitle}</h2>
            <p>{page.offeringsIntro}</p>
          </div>
          <div className="services-grid services-grid--4">
            {page.offerings.map((offering, index) => (
              <ServiceCard
                key={offering.title}
                icon={offering.icon}
                title={offering.title}
                description={offering.description}
                features={offering.features}
                delayClass={offeringDelayClass(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="process">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">How We Work</span>
            <h2>{page.processTitle}</h2>
            <p>{page.processIntro}</p>
          </div>
          <div className="landing-process-grid">
            {page.process.map((step, index) => (
              <article
                key={step.title}
                className={`landing-process-card reveal${index ? ` reveal-delay${index > 1 ? `-${index}` : ''}` : ''}`}
              >
                <div className="landing-process-icon" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {processIcons[index]}
                  </svg>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="why-partner">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Why Partner With Shribi</span>
            <h2>{page.whyTitle}</h2>
          </div>
          <div className="why-partner-grid">
            {page.why.map((item, index) => (
              <article
                key={item.title}
                className={`why-partner-item reveal${index ? ` reveal-delay${index > 1 ? `-${index}` : ''}` : ''}`}
              >
                <div className="why-partner-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {whyIcons[index]}
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">FAQs</span>
            <h2>Questions teams ask before they start</h2>
          </div>
          <div className="landing-faq-list">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="landing-faq-item reveal">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="landing-related reveal">
            <p>Related services</p>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={item.path}>{item.navLabel}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark services-cta-section">
        <div className="container">
          <div className="services-cta-banner reveal">
            <div className="services-cta-text">
              <span className="section-tag">Have a Project in Mind?</span>
              <h2>{page.ctaTitle}</h2>
              <p>{page.ctaText}</p>
            </div>
            <div className="services-cta-contact">
              <a href={`mailto:${CONTACT_EMAIL}`} className="services-cta-link">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  width="18"
                  height="18"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {CONTACT_EMAIL}
              </a>
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="services-cta-link">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  width="18"
                  height="18"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT_PHONE}
              </a>
            </div>
            <Link href="/contact/" className="btn btn-primary">
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
