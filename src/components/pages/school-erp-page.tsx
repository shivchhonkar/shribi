import Image from 'next/image'
import Link from 'next/link'

import SchoolErpIcon from '@/components/pages/school-erp-icon'
import SchoolErpModules from '@/components/pages/school-erp-modules'
import {
  BENEFITS,
  CTA_HIGHLIGHTS,
  EDUFY_URL,
  WHY_CHOOSE_US,
} from '@/lib/school-erp-content'

export default function SchoolErpPageContent() {
  return (
    <>
      <section className="erp-hero" id="overview">
        <div className="container erp-hero-grid">
          <div className="erp-hero-content reveal">
            <p className="eyebrow">Shribi Edufy · School ERP</p>
            <h1>
              Complete School Management,{' '}
              <span className="gradient-text">One Platform</span>
            </h1>
            <p className="erp-hero-lead">
              Shribi Edufy is an advanced, user-friendly School ERP for admissions, academics,
              fees, HR, transport, exams, and parent communication — built for modern Indian
              schools.
            </p>
            <div className="hero-actions">
              <a
                href={`${EDUFY_URL}/register-school`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Free →
              </a>
              <a href="#modules" className="btn btn-ghost">
                Explore Modules
              </a>
            </div>
          </div>

          <div className="erp-hero-visual reveal reveal-delay">
            <div className="erp-hero-frame">
              <Image
                src="/assets/thumbnails/Shribi_Edufy_school_ERP.png"
                alt="Shribi Edufy school dashboard preview"
                width={1280}
                height={720}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light erp-why" id="why-choose-us">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Why Choose Us</span>
            <h2>Built for Schools That Expect More</h2>
            <p>
              Shribi Edufy combines cloud convenience, transparent operations, and dependable
              support — so your team can focus on education, not paperwork.
            </p>
          </div>

          <div className="erp-why-grid">
            {WHY_CHOOSE_US.map((item, index) => (
              <article
                key={item.title}
                className={`erp-why-card reveal${
                  index % 3 === 1 ? ' reveal-delay' : index % 3 === 2 ? ' reveal-delay-2' : ''
                }`}
              >
                <div className="erp-card-icon">
                  <SchoolErpIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted erp-about" id="features">
        <div className="container erp-about-grid">
          <div className="erp-about-copy reveal">
            <span className="section-tag">About Shribi Edufy</span>
            <h2>India&apos;s Most Advanced School ERP System</h2>
            <p>
              Shribi Edufy has developed one of the most advanced and user-friendly School ERP
              Software for managing various school operations — from enquiry to enrollment, daily
              attendance to annual report cards.
            </p>
            <p>
              Generate circulars and SMS instantly, manage fee concessions with approval
              workflows, and publish CBSE-style marksheets with QR verification. Teachers get
              calendars with lesson plans, while administrators oversee HR, payroll, and transport
              from a single dashboard.
            </p>
            <p>
              Built as a multi-tenant cloud platform, each school runs on its own secure database
              with subdomain access — scalable, reliable, and ready for growth.
            </p>
          </div>

          <div className="erp-benefits-grid">
            {BENEFITS.map((benefit, index) => (
              <article
                key={benefit.title}
                className={`erp-benefit-card reveal${
                  index % 2 === 1 ? ' reveal-delay' : index === 2 ? ' reveal-delay-2' : ''
                }`}
              >
                <div className="erp-benefit-icon">
                  <SchoolErpIcon name={benefit.icon} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SchoolErpModules />

      <section className="section erp-cta" id="contact">
        <div className="container erp-cta-grid">
          <div className="erp-cta-copy reveal">
            <span className="section-tag">Get Started</span>
            <h2>Ready to Transform Your School?</h2>
            <p>
              Join schools using Shribi Edufy to streamline operations, improve parent
              communication, and focus on what matters — education.
            </p>
            <ul className="erp-cta-list">
              {CTA_HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="erp-cta-panel reveal reveal-delay">
            <h3>Book a Free Demo</h3>
            <p>Register your school and our team will help you get started within 24 hours.</p>
            <div className="erp-cta-actions">
              <a
                href={`${EDUFY_URL}/register-school`}
                className="btn btn-primary btn-cta-solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register School →
              </a>
              <a
                href={`${EDUFY_URL}/login`}
                className="btn btn-ghost btn-cta-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin Login
              </a>
            </div>
            <p className="erp-cta-note">
              Or{' '}
              <Link href="/contact/" className="erp-cta-link">
                contact our team
              </Link>{' '}
              for a personalized walkthrough.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
