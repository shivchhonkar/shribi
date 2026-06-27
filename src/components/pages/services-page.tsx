import Image from 'next/image'
import Link from 'next/link'

import { ServiceCard } from '@/components/shared/service-card'
import { coreServices, serviceIndustries } from '@/lib/content'
import { IndustryIcon } from '@/lib/industry-icons'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '@/lib/site'

const whyPartnerItems = [
  {
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14" />,
    title: 'Business-focused solutions',
    text: 'We build solutions that solve real business challenges.',
    delay: '',
  },
  {
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: 'Scalable & secure platforms',
    text: 'Future-ready architecture with security at the core.',
    delay: 'reveal-delay',
  },
  {
    icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: 'Agile development approach',
    text: 'Flexible processes for faster delivery and adaptation.',
    delay: 'reveal-delay-2',
  },
  {
    icon: (
      <>
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
      </>
    ),
    title: 'Reliable support & maintenance',
    text: "We're with you at every step of your digital journey.",
    delay: 'reveal-delay-3',
  },
]

function serviceDelayClass(index: number) {
  if (index === 1) return 'reveal-delay'
  if (index === 2) return 'reveal-delay-2'
  if (index === 3) return 'reveal-delay-3'
  return ''
}

export default function ServicesPageContent() {
  return (
    <>
      <section className="services-hero" id="services-hero">
        <div className="services-hero-banner-bg" aria-hidden="true">
          <Image
            src="/assets/services.png"
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
              <p className="eyebrow">Our Services</p>
              <h1>
                Software solutions built for <span className="gradient-text">your business</span>
              </h1>
              <p className="services-hero-lead">
                We design, develop and deliver smart, secure and scalable software solutions that streamline
                operations, improve performance and accelerate growth.
              </p>
              <div className="services-hero-actions">
                <a href="#core-services" className="btn btn-primary">Explore Services →</a>
                <Link href="/contact/" className="btn btn-ghost">Talk to an Expert</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-services-dark" id="core-services">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What We Do</span>
            <h2>Our Core Services</h2>
            <p>End-to-end solutions tailored to your business needs.</p>
          </div>
          <div className="services-grid">
            {coreServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delayClass={serviceDelayClass(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="industries">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Industries We Serve</span>
            <h2>Industries We Serve with Our Technical Expertise</h2>
          </div>
          <div className="industries-grid">
            {serviceIndustries.map((name) => (
              <article key={name} className="industry-tile reveal">
                <div className="industry-tile__icon">
                  <IndustryIcon name={name} />
                </div>
                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="why-partner">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Why Partner With Shribi</span>
            <h2>Driving value for your business</h2>
          </div>
          <div className="why-partner-grid">
            {whyPartnerItems.map((item) => (
              <article key={item.title} className={`why-partner-item reveal ${item.delay}`.trim()}>
                <div className="why-partner-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {item.icon}
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark services-cta-section">
        <div className="container">
          <div className="services-cta-banner reveal">
            <div className="services-cta-text">
              <span className="section-tag">Have a Project in Mind?</span>
              <h2>Let&apos;s build something amazing together</h2>
              <p>Share your idea and our team will get back to you to turn it into reality.</p>
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
            <Link href="/contact/" className="btn btn-primary">Get in Touch →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
