import type { Metadata } from 'next'

import SiteShell from '@/components/layout/site-shell'
import HomePageContent from '@/components/pages/home-page'
import { coreServices, offices } from '@/lib/content'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
  pageMetadata,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from '@/lib/site'

import '@/styles/home.css'

const homeTitle = 'Custom Software Development Company in India | Shribi'
const homeDescription =
  'Looking for custom software, website or mobile app development? Shribi builds business applications, school ERP, billing software and AI solutions for growing businesses in India. Shribi builds custom software, websites, and mobile apps for growing businesses, including billing, school ERP, and property platforms.'

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitle,
    description: homeDescription,
    path: '/',
  }),
  title: {
    absolute: homeTitle,
  },
  verification: {
    google: '1pEs8v-7ALRXMIlq_DHeWM-jkY2r_AkEevuugj-c8E4',
  },
}

const office = offices[0]

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/assets/shribi-logo.png`,
  logo: `${SITE_URL}/assets/shribi-logo.png`,
  description: homeDescription,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE_TEL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: office.address,
    addressLocality: 'Mathura',
    addressRegion: 'Uttar Pradesh',
    postalCode: '281406',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  sameAs: SOCIAL_LINKS.map((link) => link.href),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software services',
    itemListElement: coreServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `${SITE_URL}${service.href}`,
      },
    })),
  },
}

export default function HomePage() {
  return (
    <SiteShell activePage="home" bodyClass="page-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomePageContent />
    </SiteShell>
  )
}
