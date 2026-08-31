import Image from 'next/image'
import Link from 'next/link'

import BillintModules from '@/components/pages/billint-modules'
import SchoolErpIcon from '@/components/pages/school-erp-icon'
import {
  BENEFITS,
  BILLINT_URL,
  CTA_HIGHLIGHTS,
  FAQS,
  TESTIMONIALS,
  WHY_CHOOSE_US,
} from '@/lib/billint-content'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export default function BillintPageContent() {
  const pageUrl = `${SITE_URL}/billing-and-inventory-management-software/`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Billint',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android, iOS',
        url: BILLINT_URL,
        description:
          'Free GST billing and inventory software for small businesses. Create GST invoices, track stock, manage payments, and stay compliant.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        provider: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Billint', item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
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

      <section className="erp-hero" id="overview">
        <div className="container erp-hero-grid">
          <div className="erp-hero-content reveal">
            <p className="eyebrow">Billint · Billing &amp; Inventory</p>
            <h1>
              Free GST billing &amp; inventory software for{' '}
              <span className="gradient-text">small businesses</span>
            </h1>
            <p className="erp-hero-lead">
              Create GST invoices, track stock, manage payments, and stay compliant. Start free — no
              credit card required.
            </p>
            <div className="hero-actions">
              <a
                href={BILLINT_URL}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start free billing →
              </a>
              <a href="#modules" className="btn btn-ghost">
                Explore features
              </a>
            </div>
          </div>

          <div className="erp-hero-visual reveal reveal-delay">
            <div className="erp-hero-frame erp-hero-frame--banner">
              <Image
                src="/assets/thumbnails/billint-thumbnail.png"
                alt="Billint GST billing and inventory dashboard"
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
            <span className="section-tag">Why Choose Billint</span>
            <h2>Built for everyday business operations</h2>
            <p>
              Simple tools to create, send, manage, and track business documents in a few clicks —
              with GST, inventory, and reports in one place.
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
            <span className="section-tag">About Billint</span>
            <h2>Billing, inventory, clients, and reports — all in one place</h2>
            <p>
              Billint is GST billing and inventory software for small businesses. Create professional
              GST and non-GST invoices, track stock in real time, and manage payments without
              juggling spreadsheets.
            </p>
            <p>
              Run quotations, purchase orders, delivery challans, and proforma invoices from the
              same workspace. Customize invoice and report templates, then share documents with
              clients in seconds.
            </p>
            <p>
              Role-based access lets your team work securely across multiple businesses, with 24/7
              customer support when you need help.
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

      <BillintModules />

      <section className="section section-light" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Testimonials</span>
            <h2>See what our customers have to say about Billint</h2>
          </div>
          <div className="erp-why-grid">
            {TESTIMONIALS.map((item, index) => (
              <article
                key={item.name}
                className={`erp-why-card reveal${
                  index === 1 ? ' reveal-delay' : index === 2 ? ' reveal-delay-2' : ''
                }`}
              >
                <p>&ldquo;{item.quote}&rdquo;</p>
                <h3>{item.name}</h3>
                <p>{item.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">FAQs</span>
            <h2>Quick answers before you start</h2>
          </div>
          <div className="erp-why-grid">
            {FAQS.map((faq, index) => (
              <article
                key={faq.question}
                className={`erp-why-card reveal${
                  index % 3 === 1 ? ' reveal-delay' : index % 3 === 2 ? ' reveal-delay-2' : ''
                }`}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section erp-cta" id="contact">
        <div className="container erp-cta-grid">
          <div className="erp-cta-copy reveal">
            <span className="section-tag">Get Started</span>
            <h2>Ready to simplify your business?</h2>
            <p>Join thousands of businesses already using Billint to grow their business.</p>
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
            <h3>Start free billing</h3>
            <p>Create GST invoices, track stock, and manage payments. No credit card required.</p>
            <div className="erp-cta-actions">
              <a
                href={BILLINT_URL}
                className="btn btn-primary btn-cta-solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start free now →
              </a>
              <a
                href={BILLINT_URL}
                className="btn btn-ghost btn-cta-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a demo
              </a>
            </div>
            <p className="erp-cta-note">
              Or{' '}
              <Link href="/contact/" className="erp-cta-link">
                contact our team
              </Link>{' '}
              for a walkthrough.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
