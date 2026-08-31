'use client'

import { FormEvent, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { CONTACT_API } from '@/lib/site'

const SUCCESS_TOAST = {
  title: 'Message sent',
  body: "Thanks for reaching out. We'll get back to you soon.",
}

type ContactFormProps = {
  showPhone?: boolean
  showSubject?: boolean
  submitLabel?: string
  stacked?: boolean
  phonePlaceholder?: string
}

export default function ContactForm({
  showPhone = true,
  showSubject = true,
  submitLabel = 'Send Message →',
  stacked = false,
  phonePlaceholder = 'Your phone number',
}: ContactFormProps) {
  const [note, setNote] = useState('')
  const [isError, setIsError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastPaused, setToastPaused] = useState(false)

  useEffect(() => {
    if (!showToast || toastPaused) return

    const timer = window.setTimeout(() => setShowToast(false), 6000)
    return () => window.clearTimeout(timer)
  }, [showToast, toastPaused])

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsError(false)

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const subject = String(data.get('subject') || '').trim()
    const messageBody = String(data.get('message') || '').trim()
    const honeypot = String(data.get('hp_field') || '').trim()

    const messageParts: string[] = []
    if (subject) messageParts.push(`Subject: ${subject}`)
    if (phone) messageParts.push(`Phone: ${phone}`)
    messageParts.push(messageBody)
    const message = messageParts.join('\n\n')

    if (!name || !email || !messageBody) {
      setNote('Please fill in all fields.')
      setIsError(true)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNote('Please enter a valid email address.')
      setIsError(true)
      return
    }

    setIsSubmitting(true)
    setNote('')

    try {
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message, hp_field: honeypot }),
      })

      const payload = await response.json().catch(() => ({}))

      if (!response.ok || !payload.success) {
        throw new Error(payload.message || 'Unable to send your message.')
      }

      setNote('')
      setShowToast(true)
      form.reset()
    } catch (err) {
      setNote(
        err instanceof Error
          ? err.message
          : 'Sorry, something went wrong. Please try again or email info@shribi.com.',
      )
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form reveal reveal-delay" onSubmit={onSubmit} noValidate>
      <div className="form-row form-row--honeypot" aria-hidden="true">
        <label htmlFor="hp_field">Company website</label>
        <input
          type="text"
          id="hp_field"
          name="hp_field"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {stacked ? (
        <>
          <div className="form-row">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@company.com"
              autoComplete="email"
            />
          </div>
          {showPhone ? (
            <div className="form-row">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={phonePlaceholder}
                autoComplete="tel"
              />
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="form-row form-row--half">
            <div className="form-row">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
          </div>
          {showPhone || showSubject ? (
            <div className="form-row form-row--half">
              {showPhone ? (
                <div className="form-row">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={phonePlaceholder}
                    autoComplete="tel"
                  />
                </div>
              ) : null}
              {showSubject ? (
                <div className="form-row">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Project inquiry" />
                </div>
              ) : null}
            </div>
          ) : null}
        </>
      )}
      <div className="form-row">
        <label htmlFor="message">Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project…"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : submitLabel}
      </button>
      {note ? (
        <p className={`form-note${isError ? ' error' : ''}`} role="status" aria-live="polite">
          {note}
        </p>
      ) : null}
      {showToast
        ? createPortal(
            <div className="form-toast-region">
              <div
                className="form-toast"
                role="status"
                aria-live="polite"
                aria-atomic="true"
                onMouseEnter={() => setToastPaused(true)}
                onMouseLeave={() => setToastPaused(false)}
              >
                <span className="form-toast__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 12.5l2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="form-toast__body">
                  <strong>{SUCCESS_TOAST.title}</strong>
                  <p>{SUCCESS_TOAST.body}</p>
                </div>
                <button
                  type="button"
                  className="form-toast__close"
                  aria-label="Dismiss notification"
                  onClick={() => setShowToast(false)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </form>
  )
}
