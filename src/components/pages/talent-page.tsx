import type { CSSProperties } from 'react'
import Link from 'next/link'

import {
  TALENT_PATH,
  talentDevelopers,
  talentFaqs,
  talentHeroActions,
  talentModels,
  talentPage,
  talentProcess,
  talentProfileRequestHref,
  talentSkills,
  talentWhy,
} from '@/lib/talent-content'
import { serviceLandingPages } from '@/lib/service-landing-content'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, SITE_NAME, SITE_URL } from '@/lib/site'

const whyIcons = [
  <path key="users" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
  <path
    key="shield"
    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  />,
  <path key="globe" d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" />,
  <path key="bolt" d="M13 10V3L4 14h7v7l9-11h-7z" />,
]

const processIcons = [
  <path key="brief" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  <path key="search" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />,
  <path key="chat" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l.8-3.2A7.5 7.5 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
  <path key="rocket" d="M5 13l4 4L19 7" />,
]

const relatedServices = serviceLandingPages.filter(
  (page) => page.slug !== 'website-development-company-in-mathura',
)

export default function TalentPageContent() {
  const pageUrl = `${SITE_URL}${TALENT_PATH}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: talentPage.title,
        description: talentPage.description,
        url: pageUrl,
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: 'India',
        serviceType: 'Dedicated development teams and remote staffing',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services/` },
          { '@type': 'ListItem', position: 3, name: talentPage.navLabel, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: talentFaqs.map((faq) => ({
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
                  <li aria-current="page">{talentPage.navLabel}</li>
                </ol>
              </nav>
              <h1>
                {talentPage.h1}{' '}
                <span className="gradient-text">{talentPage.h1Highlight}</span> {talentPage.h1Suffix}
              </h1>
              <p className="services-hero-lead">{talentPage.lead}</p>
              <p className="services-hero-lead services-hero-lead--secondary">{talentPage.leadSecondary}</p>
              <div className="services-hero-actions">
                {talentHeroActions.map((action) =>
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

      <section className="section section-muted" id="available-developers">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Available Talent</span>
            <h2>Available Developers</h2>
            <p>
              A curated snapshot of roles we can staff now — not a public directory of students.
              Request a profile to receive the full CV, interview availability, and a private
              introduction.
            </p>
          </div>
          <div className="talent-profile-grid">
            {talentDevelopers.map((developer, index) => (
              <article
                key={developer.id}
                className={`talent-profile-card reveal${index ? ` reveal-delay${index > 1 ? `-${Math.min(index, 3)}` : ''}` : ''}`}
              >
                <div className="talent-profile-card__top">
                  <h3>{developer.role}</h3>
                  <span className={`talent-availability talent-availability--${developer.availabilityTone}`}>
                    {developer.availability}
                  </span>
                </div>
                <dl className="talent-profile-meta">
                  <div>
                    <dt>Experience</dt>
                    <dd>{developer.experience}</dd>
                  </div>
                  <div>
                    <dt>Engagement</dt>
                    <dd>{developer.engagement}</dd>
                  </div>
                </dl>
                <div className="talent-profile-skills">
                  <p>Skills</p>
                  <ul>
                    {developer.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={talentProfileRequestHref(developer.role, developer.experience)}
                  className="btn btn-primary talent-profile-card__cta"
                >
                  Request Profile
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services-dark" id="models">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">How You Engage</span>
            <h2>Dedicated teams, staffing, or a project squad</h2>
            <p>Choose the model that matches how you already build software.</p>
          </div>
          <div className="services-grid talent-models-grid">
            {talentModels.map((model, index) => (
              <article
                key={model.title}
                className={`service-card reveal${index ? ` reveal-delay${index > 1 ? `-${index}` : ''}` : ''}`}
              >
                <h3>{model.title}</h3>
                <p>{model.text}</p>
                <ul>
                  {model.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="skills">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Core Skills</span>
            <h2>React, Next.js, Node.js, and software engineering</h2>
            <p>Carefully selected talent for the stacks most product teams ship on today.</p>
          </div>
          <div className="talent-skills-grid">
            {talentSkills.map((skill, index) => (
              <article
                key={skill.name}
                className={`talent-skill-card reveal${index ? ` reveal-delay${index > 1 ? `-${index}` : ''}` : ''}`}
              >
                <h3>{skill.name}</h3>
                <p>{skill.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="why-partner">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Why Shribi Talent</span>
            <h2>Trained developers, led by practising engineers</h2>
          </div>
          <div className="why-partner-grid">
            {talentWhy.map((item, index) => (
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
            <h2>From brief to a team that is shipping</h2>
            <p>A short, practical path — you stay in control of who joins your product.</p>
          </div>
          <div className="landing-process-grid">
            {talentProcess.map((step, index) => (
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
            <h2>Questions companies ask before they hire</h2>
          </div>
          <div className="landing-faq-list">
            {talentFaqs.map((faq) => (
              <article key={faq.question} className="landing-faq-item reveal">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="landing-related reveal">
            <p>Related services</p>
            <ul>
              <li>
                <Link href="/shribi-workshop-in-college/">College Workshops</Link>
              </li>
              {relatedServices.map((item) => (
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
              <span className="section-tag">Ready to hire?</span>
              <h2>Tell us the roles you need. We will send profiles.</h2>
              <p>
                Share your stack, seniority, and start date. Our talent team will come back with
                curated developer profiles and a proposed engagement model.
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
            <Link href="/contact/?subject=Request developer profiles" className="btn btn-primary">
              Request Developer Profiles →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
