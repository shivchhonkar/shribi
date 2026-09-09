'use client'

import { FormEvent, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { CONTACT_API } from '@/lib/site'

const SUCCESS_TOAST = {
  title: 'Message sent',
  body: "Thanks for reaching out. We'll get back to you soon.",
}

const NEED_OPTIONS = [
  'Website',
  'E-commerce Website',
  'Mobile App',
  'Custom Software',
  'SaaS Product',
  'ERP / Business Management System',
  'AI & Automation',
  'Existing Website/Application Improvement',
  'Not sure yet',
  'Other',
] as const

const BUDGET_OPTIONS = [
  'Not decided yet',
  'Under ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1 Lakh',
  '₹1 Lakh – ₹3 Lakh',
  '₹3 Lakh+',
  'Prefer to discuss',
] as const

type ContactFormProps = {
  showPhone?: boolean
  showSubject?: boolean
  submitLabel?: string
  stacked?: boolean
  phonePlaceholder?: string
  defaultSubject?: string
  defaultMessage?: string
}

function RequiredMark() {
  return (
    <span className="form-required" aria-hidden="true">
      *
    </span>
  )
}

export default function ContactForm({
  submitLabel = 'Send Request →',
  stacked = false,
  phonePlaceholder = '+91 98765 43210',
  defaultSubject = '',
  defaultMessage = '',
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
    const company = String(data.get('company') || '').trim()
    const need = String(data.get('need') || '').trim()
    const budget = String(data.get('budget') || '').trim()
    const subject = String(data.get('subject') || '').trim()
    const messageBody = String(data.get('message') || '').trim()
    const honeypot = String(data.get('hp_field') || '').trim()

    if (!name || !email || !need || !messageBody) {
      setNote('Please fill in all required fields.')
      setIsError(true)
      return
    }

    if (!(NEED_OPTIONS as readonly string[]).includes(need)) {
      setNote('Please select what you need.')
      setIsError(true)
      return
    }

    if (budget && !(BUDGET_OPTIONS as readonly string[]).includes(budget)) {
      setNote('Please choose a valid budget range.')
      setIsError(true)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNote('Please enter a valid work email address.')
      setIsError(true)
      return
    }

    setIsSubmitting(true)
    setNote('')

    try {
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          need,
          budget,
          subject,
          message: messageBody,
          hp_field: honeypot,
        }),
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

  const nameField = (
    <div className="form-row">
      <label htmlFor="name">
        Your Name <RequiredMark />
      </label>
      <input type="text" id="name" name="name" required placeholder="Your name" autoComplete="name" />
    </div>
  )

  const emailField = (
    <div className="form-row">
      <label htmlFor="email">
        Work Email <RequiredMark />
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="you@company.com"
        autoComplete="email"
      />
    </div>
  )

  const phoneField = (
    <div className="form-row">
      <label htmlFor="phone">Phone / WhatsApp</label>
      <input type="tel" id="phone" name="phone" placeholder={phonePlaceholder} autoComplete="tel" />
    </div>
  )

  const companyField = (
    <div className="form-row">
      <label htmlFor="company">Company Name</label>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Your company"
        autoComplete="organization"
      />
    </div>
  )

  const needField = (
    <div className="form-row">
      <label htmlFor="need">
        What do you need? <RequiredMark />
      </label>
      <select id="need" name="need" required defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {NEED_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )

  const budgetField = (
    <div className="form-row">
      <label htmlFor="budget">Estimated Budget</label>
      <select id="budget" name="budget" defaultValue="">
        <option value="">Select a range (optional)</option>
        {BUDGET_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )

  return (
    <form className="contact-form reveal reveal-delay" onSubmit={onSubmit} noValidate>
      <div className="form-row form-row--honeypot" aria-hidden="true">
        <label htmlFor="hp_field">Company website</label>
        <input type="text" id="hp_field" name="hp_field" tabIndex={-1} autoComplete="off" />
      </div>
      {defaultSubject ? <input type="hidden" name="subject" value={defaultSubject} /> : null}

      {stacked ? (
        <>
          {nameField}
          {emailField}
          {phoneField}
          {companyField}
          {needField}
          {budgetField}
        </>
      ) : (
        <>
          <div className="form-row form-row--half">
            {nameField}
            {emailField}
          </div>
          <div className="form-row form-row--half">
            {phoneField}
            {companyField}
          </div>
          <div className="form-row form-row--half">
            {needField}
            {budgetField}
          </div>
        </>
      )}

      <div className="form-row">
        <label htmlFor="message">
          Tell us about your project <RequiredMark />
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Goals, timeline, or anything we should know…"
          defaultValue={defaultMessage}
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
