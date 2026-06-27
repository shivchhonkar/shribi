export function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'linkedin':
      return (
        <svg className="social-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-13h4v2" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    case 'x':
      return (
        <svg className="social-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 4l16 16M20 4L4 20" />
        </svg>
      )
    case 'facebook':
      return (
        <svg className="social-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg className="social-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    case 'youtube':
      return (
        <svg className="social-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 00-1.95 2 2.87 2.87 0 00-.42 1.58 29 29 0 00.42 4.58 2.78 2.78 0 001.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 001.95-2 2.87 2.87 0 00.42-1.58 29 29 0 00-.42-4.58z" />
          <polygon points="9.75 15.02 15.5 11.98 9.75 8.94 9.75 15.02" />
        </svg>
      )
    default:
      return null
  }
}
