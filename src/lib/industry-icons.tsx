import type { ReactNode } from 'react'

const graduationCap = (
  <>
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.6 2.7 3.2 6 3.5 3.3-.3 6-1.9 6-3.5v-5" />
    <path d="M22 10v6" />
  </>
)

export const industryIcons: Record<string, ReactNode> = {
  'Banks & Financial Services': (
    <>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" />
    </>
  ),
  'Media & Entertainment': (
    <>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" />
    </>
  ),
  'Public Sector & Government': <path d="M3 21h18M5 21V7l7-4 7 4v14" />,
  EdTech: graduationCap,
  Education: graduationCap,
  Healthcare: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  'IT/ITeS': (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
    </>
  ),
  'Advertising & Marketing': (
    <>
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 11-5.8-1.6" />
    </>
  ),
  eCommerce: (
    <>
      <path d="M6 8h12l-1 13H7L6 8z" />
      <path d="M9 8V7a3 3 0 016 0v1" />
    </>
  ),
  FinTech: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M9 10h4a2 2 0 010 4H9" />
    </>
  ),
  'Transportation & Logistics': (
    <>
      <path d="M3 7h11v11H3z" />
      <path d="M14 11h3.5L21 14.5V18h-7V11z" />
      <circle cx="7" cy="19.5" r="1.5" />
      <circle cx="17" cy="19.5" r="1.5" />
    </>
  ),
  Telecom: (
    <>
      <path d="M5 12.55a11 11 0 0114.08 0" />
      <path d="M8.53 16.11a6 6 0 016.95 0" />
      <path d="M2 8.82a16 16 0 0120 0" />
      <circle cx="12" cy="20" r="1.2" />
    </>
  ),
  Sports: (
    <>
      <path d="M8 4h8v5a4 4 0 01-8 0V4z" />
      <path d="M16 6h2.5a2.5 2.5 0 010 5H16" />
      <path d="M8 6H5.5a2.5 2.5 0 000 5H8" />
      <path d="M12 13v3" />
      <path d="M8 21h8" />
      <path d="M10 21v-5h4v5" />
    </>
  ),
  'Hotel & Restaurant': (
    <>
      <path d="M3 3v7a2 2 0 002 2h4a2 2 0 002-2V3" />
      <path d="M7 3v18" />
      <path d="M19 3v18" />
      <path d="M19 3c3 2 4 6 4 9h-4" />
    </>
  ),
  Estate: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
}

export function IndustryIcon({ name }: { name: string }) {
  const icon = industryIcons[name]

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
      {icon ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  )
}
