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
  label,
  href,
  icon,
  children,
  external = false,
}: {
  label: string
  href?: string
  icon: ReactNode
  children: ReactNode
  external?: boolean
}) {
  const className = 'contact-page__detail'
  const body = (
    <>
      <span className="contact-page__detail-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-page__detail-copy">
        <span className="contact-page__detail-label">{label}</span>
        <span className="contact-page__detail-value">{children}</span>
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {body}
      </a>
    )
  }

  return <div className={className}>{body}</div>
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

export default function ContactPageContent({
  defaultSubject,
  defaultMessage,
}: {
  defaultSubject?: string
  defaultMessage?: string
}) {
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
          <div className="hero-content">
            <p className="eyebrow">Contact us</p>
            <h1>
              Tell us what you want to <span className="gradient-text">build</span>
            </h1>
            <p className="hero-lead">
              Share a few details and we reply within one business day. Prefer a call or WhatsApp?
              Use the contacts beside the form.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-page__touch">
        <div className="container contact-page__grid">
          <div className="contact-page__info">
            <h2 className="text-normal-weight">Reach the team directly</h2>
            <p>
              Email, phone, and WhatsApp all come to the same team. Office hours are Monday to
              Saturday, 9:00 AM – 7:00 PM IST.
            </p>
            <div className="contact-page__details">
              <ContactDetail
                label="Email"
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
                label="Phone"
                href={`tel:${CONTACT_PHONE_TEL}`}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              >
                {CONTACT_PHONE}
              </ContactDetail>
              <ContactDetail
                label="WhatsApp"
                href={WHATSAPP_URL}
                external
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                }
              >
                {WHATSAPP_PHONE}
              </ContactDetail>
              <ContactDetail
                label="Google"
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
                label="Hours"
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

          <div className="contact-form-panel">
            <div className="contact-form-panel__head">
              <h2>Send a message</h2>
              <p>Required fields are marked. We reply within one business day.</p>
            </div>
            <ContactForm
              showPhone
              showSubject={false}
              submitLabel="Send message"
              phonePlaceholder="Your phone number"
              defaultSubject={defaultSubject}
              defaultMessage={defaultMessage}
            />
          </div>
        </div>
      </section>

      <section className="section contact-page__reviews" id="offices">
        <div className="container">
          <div className="contact-page__offices-header">
            <h2>Offices</h2>
            <p>Visit Noida or Mathura, or get directions from Google Maps.</p>
          </div>
          <div className="google-reviews-grid">
            <div className="contact-office-list">
              {offices.map((office) => (
                <article key={office.name} className="contact-office">
                  <h3>{office.name}</h3>
                  <p>{office.address}</p>
                  <a
                    href={googleMapsDirections(office.mapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get directions
                  </a>
                </article>
              ))}
            </div>
            <div className="google-reviews-map">
              <iframe
                title="Shribi Technologies on Google Maps"
                src={googleMapsEmbed(offices[0].mapsQuery)}
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
