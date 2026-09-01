import Image from 'next/image'
import type { ReactNode } from 'react'

import ContactForm from '@/components/forms/contact-form'
import { offices } from '@/lib/content'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  GOOGLE_BUSINESS_LABEL,
  GOOGLE_BUSINESS_URL,
  WHATSAPP_PHONE,
  WHATSAPP_URL,
} from '@/lib/site'

function ContactDetail({
  href,
  icon,
  children,
  external = false,
}: {
  href?: string
  icon: ReactNode
  children: ReactNode
  external?: boolean
}) {
  const className = 'contact-page__detail'

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span className="contact-page__detail-icon" aria-hidden="true">
          {icon}
        </span>
        {children}
      </a>
    )
  }

  return (
    <div className={className}>
      <span className="contact-page__detail-icon" aria-hidden="true">
        {icon}
      </span>
      {children}
    </div>
  )
}

function googleMapsEmbed(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`
}

function googleMapsDirections(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`
}

function OfficeMap({ name, query }: { name: string; query: string }) {
  return (
    <div className="office-card__map">
      <iframe
        title={`${name} on Google Maps`}
        src={googleMapsEmbed(query)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}

export default function ContactPageContent() {
  return (
    <>
      <section
        className="hero hero--globe hero--banner hero--inner hero--inner-banner hero--contact contact-hero"
        id="contact-hero"
      >
        <div className="hero-banner-bg" aria-hidden="true">
          <Image src="/assets/contactus.png" alt="" width={1920} height={1080} priority />
        </div>
        <div className="hero-ambient" aria-hidden="true">
          <div className="hero-ambient-glow hero-ambient-glow--1" />
          <div className="hero-ambient-glow hero-ambient-glow--2" />
        </div>
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <p className="eyebrow">Contact us</p>
            <h1>
              Let&apos;s build something <span className="gradient-text">great</span>
            </h1>
            <p className="hero-lead">
              We&apos;re here to help you simplify operations, solve complex challenges, and grow
              with technology.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-page__touch">
        <div className="container contact-page__grid">
          <div className="contact-page__info reveal">
            <span className="section-tag">Get in touch</span>
            <h2 className="text-normal-weight">Shribi Technologies</h2>
            <p>
              Have a project in mind or need expert guidance? Reach out to us and our team will get
              back to you within one business day.
            </p>
            <div className="contact-page__details">
              <ContactDetail
                href={`mailto:${CONTACT_EMAIL}`}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              >
                {CONTACT_EMAIL}
              </ContactDetail>
              <ContactDetail
                href={`tel:${CONTACT_PHONE_TEL}`}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              >
                Call {CONTACT_PHONE}
              </ContactDetail>
              <ContactDetail
                href={WHATSAPP_URL}
                external
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                }
              >
                WhatsApp — {WHATSAPP_PHONE}
              </ContactDetail>
              <ContactDetail
                href={GOOGLE_BUSINESS_URL}
                external
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                }
              >
                {GOOGLE_BUSINESS_LABEL}
              </ContactDetail>
              <ContactDetail
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                }
              >
                Mon – Sat: 9:00 AM – 7:00 PM IST
              </ContactDetail>
            </div>
          </div>

          <ContactForm
            stacked
            showPhone
            showSubject={false}
            submitLabel="Send Message"
            phonePlaceholder="Your phone number"
          />
        </div>
      </section>

      <section className="section contact-page__reviews" id="google-reviews">
        <div className="container">
          <div className="contact-page__offices-header reveal">
            <span className="section-tag">Google reviews</span>
            <h2>
              Find us on <span className="accent-text">Google</span>
            </h2>
          </div>
          <div className="google-reviews-grid">
            <article className="google-reviews-panel reveal">
              <div className="google-reviews-brand" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.56c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Google Business Profile</span>
              </div>
              <h3>Shribi Technologies</h3>
              <p>
                Read reviews, get directions, and see our offices on Google. Your feedback helps
                other businesses find a technology partner they can trust.
              </p>
              <div className="google-reviews-actions">
                <a
                  href={GOOGLE_BUSINESS_URL}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Google reviews
                </a>
                {/* <a
                  href={GOOGLE_BUSINESS_URL}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Write a review
                </a> */}
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="btn btn-ghost">
                  Call now
                </a>
              </div>
            </article>
            <div className="google-reviews-map reveal reveal-delay">
              <iframe
                title="Shribi Technologies on Google Maps"
                src={googleMapsEmbed(offices[1].mapsQuery)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section contact-page__offices">
        <div className="container">
          <div className="contact-page__offices-header reveal">
            <span className="section-tag">Our offices</span>
            <h2>
              We are <span className="accent-text">closer</span> than you think
            </h2>
          </div>
          <div className="contact-page__offices-grid">
            {offices.map((office, index) => {
              const delayClass =
                index === 1 ? ' reveal-delay' : index === 2 ? ' reveal-delay-2' : ''

              return (
              <article
                key={office.name}
                className={`office-card reveal${delayClass}`}
              >
                <OfficeMap name={office.name} query={office.mapsQuery} />
                <div className="office-card__body">
                  <h3>{office.name}</h3>
                  <p className="office-card__address">{office.address}</p>
                  <div className="office-card__links">
                    <a
                      href={googleMapsDirections(office.mapsQuery)}
                      className="office-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get directions
                    </a>
                    <a
                      href={GOOGLE_BUSINESS_URL}
                      className="office-card__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Business Profile
                    </a>
                  </div>
                </div>
              </article>
              )
            })}
          </div>
        </div>
      </section> */}
    </>
  )
}
