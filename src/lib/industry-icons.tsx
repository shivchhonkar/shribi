import type { ReactNode } from 'react'

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
  EdTech: (
    <>
      <path d="M12 3L2 8l10 5 10-5-10-5z" />
      <path d="M6 11v4c0 2.5 2.7 4.5 6 5 3.3-.5 6-2.5 6-5v-4" />
    </>
  ),
  Healthcare: (
    <>
      <path d="M12 5v14M5 12h14" />
      <circle cx="12" cy="12" r="9" />
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
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  eCommerce: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" />
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
      <path d="M3 17h13l3-8H6l-3 8z" />
      <circle cx="7" cy="19" r="1.5" />
      <circle cx="16" cy="19" r="1.5" />
    </>
  ),
  Telecom: (
    <>
      <path d="M4 18l2-10h12l2 10" />
      <path d="M6 14h12" />
      <circle cx="12" cy="6" r="2" />
    </>
  ),
  Sports: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4c2 2.5 2 5.5 0 8M12 4c-2 2.5-2 5.5 0 8M4 12h16" />
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
