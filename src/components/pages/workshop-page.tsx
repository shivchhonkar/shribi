import type { CSSProperties } from 'react'
import Link from 'next/link'

import { serviceLandingPages } from '@/lib/service-landing-content'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, SITE_NAME, SITE_URL } from '@/lib/site'
import {
  WORKSHOP_PATH,
  workshopAudience,
  workshopFaqs,
  workshopHeroActions,
  workshopPage,
  workshopProcess,
  workshopWhy,
} from '@/lib/workshop-content'
import WorkshopTracks from '@/components/pages/workshop-tracks'

const whyIcons = [
  <path key="code" d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 4l-4 16" />,
  <path key="folder" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />,
  <path key="map" d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10zM12 11a2 2 0 110-4 2 2 0 010 4z" />,
  <path key="users" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
]

const processIcons = [
  <path key="brief" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  <path key="pen" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
  <path key="campus" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />,
  <path key="check" d="M5 13l4 4L19 7" />,
]

const relatedServices = [
  { href: '/shribi-talent/', label: 'Hire Shribi Talent' },
  ...serviceLandingPages
    .filter((page) => page.slug !== 'website-development-company-in-mathura')
    .map((page) => ({ href: page.path, label: page.navLabel })),
]

export default function WorkshopPageContent() {
  const pageUrl = `${SITE_URL}${WORKSHOP_PATH}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: workshopPage.title,
        description: workshopPage.description,
        url: pageUrl,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: 'India',
        serviceType: 'College coding workshops',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services/` },
          { '@type': 'ListItem', position: 3, name: workshopPage.navLabel, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: workshopFaqs.map((faq) => ({
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

      <section
        className="services-hero services-hero--talent services-hero--workshop"
        id="services-hero"
        style={
          {
            '--services-hero-banner': 'url("/assets/shribi-college-traning.png")',
          } as CSSProperties
        }
      >
        <div className="services-hero-banner-bg" aria-hidden="true" />
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
                  <li aria-current="page">{workshopPage.navLabel}</li>
                </ol>
              </nav>
              <h1>
                {workshopPage.h1} <span className="gradient-text">{workshopPage.h1Highlight}</span>
              </h1>
              <p className="services-hero-lead">{workshopPage.lead}</p>
              <p className="services-hero-lead services-hero-lead--secondary">
                {workshopPage.leadSecondary}
              </p>
              <div className="services-hero-actions">
                {workshopHeroActions.map((action) =>
                  action.href.startsWith('/') ? (
                    <Link
                      key={action.label}
                      href={action.href}
                      className={`btn ${action.variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
                    >
                      {action.label}
                    </Link>
                  ) : (
                    <a
                      key={action.label}
                      href={action.href}
                      className={`btn ${action.variant === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
                    >
                      {action.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-services-dark" id="tracks">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Workshop Tracks</span>
            <h2>Courses based on subjects</h2>
            <p>
              Learn and grow as a developer with project-based workshops led by practising
              engineers.
            </p>
          </div>
          <WorkshopTracks />
        </div>
      </section>

      <section className="section section-muted" id="audience">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Who It Is For</span>
            <h2>Colleges, placement cells, and student communities</h2>
            <p>We design the batch around your calendar, labs, and learning outcomes.</p>
          </div>
          <div className="talent-skills-grid">
            {workshopAudience.map((item, index) => (
              <article
                key={item.name}
                className={`talent-skill-card reveal${index ? ` reveal-delay${index > 1 ? `-${index}` : ''}` : ''}`}
              >
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="why-partner">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Why Shribi</span>
            <h2>Campus workshops led by a working product team</h2>
          </div>
          <div className="why-partner-grid">
            {workshopWhy.map((item, index) => (
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

      <section className="section section-muted" id="process">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">How It Works</span>
            <h2>From a campus brief to a closing demo</h2>
            <p>A short path that fits a semester timetable.</p>
          </div>
          <div className="landing-process-grid">
            {workshopProcess.map((step, index) => (
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

      <section className="section section-light" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">FAQs</span>
            <h2>Questions colleges ask before they book</h2>
          </div>
          <div className="landing-faq-list">
            {workshopFaqs.map((faq) => (
              <article key={faq.question} className="landing-faq-item reveal">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="landing-related reveal">
            <p>Related</p>
            <ul>
              {relatedServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
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
              <span className="section-tag">Host Shribi on campus</span>
              <h2>Tell us your dates. We will propose a workshop track.</h2>
              <p>
                Share batch size, student year, and whether you want React, Node.js, or a full-stack
                sprint. We will reply with an outline and available slots.
              </p>
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
            <Link href="/contact/?subject=Book a college workshop" className="btn btn-primary">
              Book a Campus Workshop →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
