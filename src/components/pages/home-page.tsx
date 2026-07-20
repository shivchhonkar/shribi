import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '@/components/forms/contact-form'
import { ContactLinks, ServiceCard } from '@/components/shared/service-card'
import { coreServices, industries } from '@/lib/content'
import { IndustryIcon } from '@/lib/industry-icons'

const trustCards = [
  {
    title: 'End-to-end delivery',
    text: 'Strategy, design, development, and deployment under one roof — no handoffs, no gaps.',
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
    delay: '',
  },
  {
    title: 'Secure by design',
    text: 'Security and compliance woven into every layer — from architecture to operations.',
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    delay: 'reveal-delay',
  },
  {
    title: 'Built for performance',
    text: 'Fast, responsive experiences on web and mobile — optimized for real-world scale.',
    icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
    delay: 'reveal-delay-2',
  },
  {
    title: 'Reliable support',
    text: 'Responsive help when you need it — onboarding, training, and SLA-backed maintenance.',
    icon: (
      <>
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
      </>
    ),
    delay: 'reveal-delay-3',
  },
]

const products = [
  {
    href: 'https://www.billint.com',
    label: 'Visit Billint',
    image: '/assets/thumbnails/billint-thumbnail.png',
    alt: 'Billint dashboard',
    name: 'Billint',
    description:
      'Complete billing and invoice management for Indian businesses — GST invoices, inventory, parties, payments, and multi-business support.',
    features: ['GST billing & e-invoice', 'Inventory & batch pricing', 'Web + Android / iOS app'],
    link: 'View Billint →',
    delay: '',
  },
  {
    href: 'https://www.zamiwala.com',
    label: 'Visit Zamiwala',
    image: '/assets/thumbnails/zamiwala-thumbnail.png',
    alt: 'Zamiwala platform',
    name: 'Zamiwala',
    description:
      'Property discovery and estate management — listings, projects, locations, admin tools, and mobile apps for buyers and agents.',
    features: ['Property & project listings', 'Admin & CRM dashboards', 'Web + Android application'],
    link: 'View Zamiwala →',
    delay: 'reveal-delay',
  },
  {
    href: 'https://edufy.shribi.com/',
    label: 'Visit Shribi Edufy',
    image: '/assets/thumbnails/edufy-shribi.png',
    alt: 'Shribi Edufy school ERP',
    name: 'Shribi Edufy',
    description:
      'Advanced School ERP for admissions, academics, fees, HR, transport, exams, and parent communication — built for modern Indian schools.',
    features: ['Student Information System', 'Attendance Management', 'Homework & Assignments'],
    link: 'View Edufy →',
    delay: 'reveal-delay-2',
  },
]

export default function HomePageContent() {
  return (
    <>
      <section className="hero hero--globe hero--banner" id="home">
        <div className="hero-banner-bg" aria-hidden="true">
          <Image src="/assets/hero-banner.png" alt="" width={1920} height={1080} priority />
        </div>
        <div className="container hero-shell">
          <div className="hero-grid">
            <div className="hero-content reveal">
              <p className="eyebrow">Technology · Innovation · Trust</p>
              <h1>
                Building digital solutions that <span className="gradient-text">scale with you</span>
              </h1>
              <p className="hero-lead">
                Shribi delivers modern software, cloud infrastructure, and business technology
                tailored for growth — precise, reliable, and beautifully engineered.
              </p>
              <div className="hero-actions">
                <Link href="#companies" className="btn btn-primary">
                  Explore Solutions →
                </Link>
                <Link href="#contact" className="btn btn-ghost">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-stats-bar reveal">
            <div className="hero-stat-item">
              <strong>4+</strong>
              <span>Years of Excellence</span>
            </div>
            <div className="hero-stat-item">
              <strong>50+</strong>
              <span>Satisfied Clients</span>
            </div>
            <div className="hero-stat-item">
              <strong>99%</strong>
              <span>Client Satisfaction</span>
            </div>
            <div className="hero-stat-item">
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted about" id="about">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Why Clients Trust Us</span>
            <h2>The company behind trusted Indian SaaS brands</h2>
            <p>
              Shribi owns and operates <strong>Billint.com</strong>, <strong>Zamiwala.com</strong>, and{' '}
              <strong>edufy.shribi.com</strong> — delivering billing, real estate, and school ERP
              technology to businesses across India.
            </p>
          </div>
          <div className="trust-grid">
            {trustCards.map((card) => (
              <article key={card.title} className={`trust-card reveal ${card.delay}`.trim()}>
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {card.icon}
                  </svg>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light companies" id="companies">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Our Products</span>
            <h2>Products by Shribi</h2>
            <p>
              Three focused products by Shribi — one company committed to quality, support, and
              continuous innovation.
            </p>
          </div>
          <div className="companies-grid">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className={`company-card reveal ${product.delay}`.trim()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={product.label}
              >
                <figure className="company-screenshot">
                  <Image src={product.image} alt={product.alt} width={880} height={720} />
                </figure>
                <div className="company-card-body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <ul className="company-features">
                    {product.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <span className="company-link">{product.link}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services services" id="services">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What We Do Best</span>
            <h2>Our Core Services</h2>
          </div>
          <div className="services-grid">
            {coreServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delayClass={
                  i === 1
                    ? 'reveal-delay'
                    : i === 2
                      ? 'reveal-delay-2'
                      : i === 3
                        ? 'reveal-delay-3'
                        : ''
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted industries" id="industries">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Industries We Serve</span>
            <h2>Industries We Serve with Our Technical Expertise</h2>
          </div>
          <div className="industry-strip">
            {industries.map((name) => (
              <article key={name} className="industry-strip-item reveal">
                <div className="industry-tile__icon">
                  <IndustryIcon name={name} />
                </div>
                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light why" id="why">
        <div className="container why-grid">
          <div className="why-content reveal">
            <span className="section-tag">Why Partner With Us</span>
            <h2>A partner who understands your business</h2>
            <p>
              As the parent of Billint, Zamiwala, and Shribi Edufy, we combine product vision with
              hands-on engineering — shipping reliable software that businesses depend on every day
              across India.
            </p>
            <ul className="why-list">
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{' '}
                Transparent communication and realistic timelines
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{' '}
                Agile delivery with measurable milestones
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{' '}
                Long-term support after launch
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{' '}
                Dedicated teams for enterprise-grade delivery
              </li>
            </ul>
          </div>
          <div className="metrics-panel reveal reveal-delay">
            {[
              ['Projects Delivered', '150+', '92%'],
              ['Client Retention Rate', '95%', '95%'],
              ['On-time Delivery', '98%', '98%'],
              ['Support Availability', '24/7', '100%'],
            ].map(([label, value, width]) => (
              <div key={label as string} className="metric-row">
                <div className="metric-row-header">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
                <div className="metric-bar">
                  <div className="metric-bar-fill" style={{ width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contact contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <span className="section-tag">Let&apos;s Connect</span>
            <h2>Let&apos;s build something great together</h2>
            <p>Tell us about your project. We&apos;ll respond within one business day.</p>
            <div className="contact-details">
              <ContactLinks />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
