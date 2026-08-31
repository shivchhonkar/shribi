import { serviceLandingPages } from '@/lib/service-landing-content'

export const solutionsLinks = [
  { href: 'https://www.billint.com', label: 'CRM & Billing Software - Billint' },
  { href: 'https://edufy.shribi.com/', label: 'School ERP - Shribi Edufy' },
  { href: 'https://www.zamiwala.com', label: 'Property Discovery & Estate Management - Zamiwala' },
] as const

export const servicesLinks = [
  { href: '/services/', label: 'All Services' },
  ...serviceLandingPages
    .filter((page) => page.slug !== 'website-development-company-in-mathura')
    .map((page) => ({ href: page.path, label: page.navLabel })),
]

export const resourcesLinks = [
  { href: '/about-us/', label: 'About Shribi' },
  { href: '/#companies', label: 'Our Products' },
  { href: '/contact/', label: 'Contact' },
] as const
