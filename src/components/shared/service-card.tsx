import type { ReactNode } from 'react'

const icons = {
  billing: (
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  ),
  erp: (
    <>
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </>
  ),
  estate: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />,
  web: (
    <>
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 4l-4 16" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" />
    </>
  ),
}

export function ServiceIcon({
  type,
  className = 'service-icon',
}: {
  type: keyof typeof icons
  className?: string
}) {
  return (
    <div className={`${className} service-icon--${type}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        {icons[type]}
      </svg>
    </div>
  )
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  delayClass = '',
}: {
  icon: keyof typeof icons
  title: string
  description: string
  features: string[]
  delayClass?: string
}) {
  return (
    <article className={`service-card reveal ${delayClass}`.trim()}>
      <ServiceIcon type={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  )
}

export function ContactLinks(): ReactNode {
  return (
    <>
      <a href="mailto:info@shribi.com" className="contact-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        info@shribi.com
      </a>
      <a href="tel:+919650593896" className="contact-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        +91 9650-593-896
      </a>
    </>
  )
}
