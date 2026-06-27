export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shribi.com'

export const SITE_NAME = 'Shribi Technologies'

export const CONTACT_EMAIL = 'info@shribi.com'

export const CONTACT_PHONE = '+91 9650-593-896'

export const CONTACT_PHONE_TEL = '+919650593896'

export const WHATSAPP_NUMBER = '919528466566'

export const WHATSAPP_PHONE = '+91 95284-66566'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Shribi, I would like to connect with you.')}`

export const WHATSAPP_LABEL = 'Chat on WhatsApp'

export const CONTACT_API =
  process.env.NEXT_PUBLIC_CONTACT_API || '/api/contact.php'

export type PageKey = 'home' | 'about' | 'services' | 'contact'

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/company/shribi',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  { href: 'https://x.com/shribi', label: 'X', icon: 'x' },
  {
    href: 'https://www.facebook.com/shribitechnologies',
    label: 'Facebook',
    icon: 'facebook',
  },
  { href: 'https://www.instagram.com/shribi', label: 'Instagram', icon: 'instagram' },
  { href: 'https://www.youtube.com/@shribi', label: 'YouTube', icon: 'youtube' },
] as const

export function pageMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}) {
  const url = `${SITE_URL}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
  }
}
