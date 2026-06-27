import Image from 'next/image'
import type { ReactNode } from 'react'

import ContactForm from '@/components/forms/contact-form'
import { offices } from '@/lib/content'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, WHATSAPP_PHONE, WHATSAPP_URL } from '@/lib/site'

function ContactDetail({
  href,
  icon,
  children,
}: {
  href?: string
  icon: ReactNode
  children: ReactNode
}) {
  const className = 'contact-page__detail'

  if (href) {
    return (
      <a href={href} className={className}>
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

function OfficeMap({ center }: { center: string }) {
  const src = `https://staticmap.openstreetmap.de/staticmap.php?center=${center}&zoom=13&size=640x280&markers=${center},lightblue`

  return (
    <div className="office-card__map">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" loading="lazy" />
      <span className="office-card__pin" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
        </svg>
      </span>
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
                {CONTACT_PHONE}
              </ContactDetail>
              <ContactDetail
                href={WHATSAPP_URL}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                }
              >
                WhatsApp — {WHATSAPP_PHONE}
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

      <section className="section contact-page__offices">
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
                <OfficeMap center={office.mapCenter} />
                <div className="office-card__body">
                  <h3>{office.name}</h3>
                  <p className="office-card__address">{office.address}</p>
                  <div className="office-card__links">
                    <a href={`mailto:${office.email}`} className="office-card__link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {office.email}
                    </a>
                    <a href={`tel:${office.tel}`} className="office-card__link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {office.phone}
                    </a>
                  </div>
                </div>
              </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
