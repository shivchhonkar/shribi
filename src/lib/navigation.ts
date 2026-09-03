import { serviceLandingPages } from '@/lib/service-landing-content'

export const solutionsLinks = [
  { href: '/school-erp/', label: 'School ERP', external: false },
  {
    href: '/billing-and-inventory-management-software/',
    label: 'Billing & Inventory app',
    external: false,
  },
  { href: 'https://www.billint.com', label: 'CRM & Billing Software - Billint', external: true },
  { href: 'https://edufy.shribi.com/', label: 'School ERP - Shribi Edufy', external: true },
  {
    href: 'https://www.zamiwala.com',
    label: 'Property Discovery & Estate Management - Zamiwala',
    external: true,
  },
] as const

export const servicesLinks = [
  { href: '/services/', label: 'All Services' },
  { href: '/shribi-talent/', label: 'Hire Developers' },
  { href: '/shribi-workshop-in-college/', label: 'College Workshops' },
  ...serviceLandingPages
    .filter((page) => page.slug !== 'website-development-company-in-mathura')
    .map((page) => ({ href: page.path, label: page.navLabel })),
]

export const resourcesLinks = [
  { href: '/about-us/', label: 'About Shribi' },
  { href: '/#companies', label: 'Our Products' },
  { href: '/contact/', label: 'Contact' },
] as const
