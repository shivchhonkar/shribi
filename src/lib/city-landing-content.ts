import type { ServiceLandingContent } from '@/lib/service-landing-content'

type CityProfile = {
  slug: string
  name: string
  state: string
  region: string
  audience: string
  context: string
  meet: string
  officeAnswer: string
}

type ServiceKind = 'website' | 'software' | 'mobile'

const cities: CityProfile[] = [
  {
    slug: 'mathura',
    name: 'Mathura',
    state: 'Uttar Pradesh',
    region: 'Mathura, Vrindavan, and the Agra corridor',
    audience: 'schools, clinics, shops, manufacturers, and hospitality businesses',
    context:
      'Shribi Technologies is based in Mathura, on NH-19 near GLA University. Local teams can sit with us in person and still get the same engineering we use for products shipped across India.',
    meet: 'Visit the Mathura office near GLA University, or start with a video call.',
    officeAnswer:
      'Yes. The office is at NH-19, 43 KA Bhag Near GLA University, Mathura, Uttar Pradesh 281406.',
  },
  {
    slug: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    region: 'Agra, Firozabad, and the Yamuna belt',
    audience: 'hotels, travel desks, handicraft exporters, and trading firms',
    context:
      'Agra businesses sell to visitors and to buyers across India. Shribi is based a short trip away in Mathura, so reviews can happen in Agra or at our office, with the build continuing between meetings.',
    meet: 'Meet in Agra or at the Mathura office, or start on a video call.',
    officeAnswer:
      'Shribi’s office is in Mathura, a short trip from Agra. We meet Agra clients there, in Agra, or on a video call. We do not list a separate Agra street address.',
  },
  {
    slug: 'noida',
    name: 'Noida',
    state: 'Uttar Pradesh',
    region: 'Noida and the wider NCR',
    audience: 'product companies, IT services firms, and operations teams',
    context:
      'Noida teams usually need a working product, not a long pitch cycle. Shribi builds from Mathura and meets Noida clients when a workshop, demo, or rollout needs to be in the room.',
    meet: 'Start on a call, then meet in Noida when the project needs it.',
    officeAnswer:
      'Shribi’s office is in Mathura. We work with Noida companies remotely and meet in Noida when a project needs an on-site workshop or review.',
  },
  {
    slug: 'gurugram',
    name: 'Gurugram',
    state: 'Haryana',
    region: 'Gurugram and the NCR',
    audience: 'corporate teams, services firms, and growing product brands',
    context:
      'Gurugram companies often already have a brand and a process. They need software, a site, or an app that fits how the team actually works. Shribi delivers from Mathura, with planned visits to Gurugram.',
    meet: 'Work remotely week to week, and meet in Gurugram for kickoff or rollout.',
    officeAnswer:
      'Shribi’s office is in Mathura. Gurugram work is remote-first, with visits scheduled for discovery, demos, and go-live.',
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    region: 'Lucknow and central Uttar Pradesh',
    audience: 'education groups, clinics, retailers, and family businesses',
    context:
      'Lucknow businesses are modernising admissions, billing, and customer follow-up. Shribi is a Uttar Pradesh team based in Mathura, and we deliver for Lucknow clients with shared previews and visits when they help.',
    meet: 'Review on a video call, or plan a Lucknow visit around a milestone.',
    officeAnswer:
      'Shribi’s office is in Mathura, Uttar Pradesh. Lucknow clients work with us remotely, and we travel for workshops when the project calls for it.',
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    region: 'Jaipur and nearby Rajasthan markets',
    audience: 'hospitality brands, exporters, jewellers, and retail businesses',
    context:
      'Jaipur companies sell through showrooms, marketplaces, and repeat buyers. Shribi builds the website, system, or app behind that work from Mathura, with remote reviews and visits to Jaipur when useful.',
    meet: 'Share references on a call, then meet in Jaipur if a workshop will save time.',
    officeAnswer:
      'Shribi’s office is in Mathura. We do not run a Jaipur office. Jaipur projects are delivered remotely, with visits arranged for discovery or training.',
  },
  {
    slug: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    region: 'Bengaluru',
    audience: 'product startups and established technology and services companies',
    context:
      'Bengaluru teams are used to shipping in short cycles. Shribi works as a delivery partner from Mathura: clear scope, weekly builds, and the same stack we use on our own billing, school, and property products.',
    meet: 'Run the project on calls and shared builds, and meet in Bengaluru when a workshop is worth the trip.',
    officeAnswer:
      'Shribi’s office is in Mathura. Bengaluru engagements are remote, with on-site workshops when they are the faster way to align a team.',
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    region: 'Hyderabad',
    audience: 'IT services firms, startups, and growing operations teams',
    context:
      'Hyderabad companies often need a site, an internal system, or a mobile app that matches an existing process. Shribi designs and builds that work from Mathura and reviews it with your team on a weekly cadence.',
    meet: 'Kick off on a video call and schedule a Hyderabad visit only when it moves the project forward.',
    officeAnswer:
      'Shribi’s office is in Mathura. Hyderabad clients collaborate remotely. We travel for a workshop or training session when the project needs it.',
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    region: 'Mumbai',
    audience: 'trading houses, services firms, and consumer brands',
    context:
      'Mumbai teams need vendors who can start from a real workflow and show progress every week. Shribi builds websites, business systems, and mobile apps from Mathura and stays on a shared review rhythm with Mumbai clients.',
    meet: 'Start with a working session on a call. Mumbai visits are planned around discovery or launch.',
    officeAnswer:
      'Shribi’s office is in Mathura. Mumbai projects run remotely, with visits arranged when a room full of stakeholders will shorten the work.',
  },
]

const serviceOrder: ServiceKind[] = ['website', 'software', 'mobile']

function offerings(kind: ServiceKind, city: CityProfile): ServiceLandingContent['offerings'] {
  if (kind === 'website') {
    return [
      {
        icon: 'web',
        title: 'Business websites',
        description: `Company sites for ${city.name} brands that need a clear offer, calls, and WhatsApp enquiries.`,
        features: ['Mobile-first pages', 'Contact and WhatsApp', 'On-page SEO', 'Analytics setup'],
      },
      {
        icon: 'estate',
        title: 'E-commerce stores',
        description: `Online catalogues and checkout for ${city.audience} that sell beyond the showroom.`,
        features: ['Product catalogue', 'Secure checkout', 'Offers and coupons', 'Order updates'],
      },
      {
        icon: 'erp',
        title: 'CMS websites',
        description: 'Sites your team can update — pages, blogs, offers, and galleries — without waiting on a developer.',
        features: ['Editable pages', 'Blog or news', 'Role-based access', 'Handover training'],
      },
      {
        icon: 'ai',
        title: 'Campaign and booking pages',
        description: `Landing pages and enquiry flows for launches, admissions, and seasonal demand in ${city.region}.`,
        features: ['Lead forms', 'Offer pages', 'Booking enquiries', 'Ad landing pages'],
      },
    ]
  }

  if (kind === 'software') {
    return [
      {
        icon: 'erp',
        title: 'Custom business software',
        description: `Tools shaped around how ${city.name} teams actually take orders, assign work, and report.`,
        features: ['Role-based access', 'Workflow screens', 'Reports', 'Audit history'],
      },
      {
        icon: 'billing',
        title: 'ERP and operations systems',
        description: 'Inventory, billing, branches, and approvals in one system instead of scattered spreadsheets.',
        features: ['Billing and stock', 'Branch workflows', 'Approvals', 'Exports'],
      },
      {
        icon: 'web',
        title: 'CRM',
        description: 'A shared view of leads, follow-ups, and customers so sales does not live in personal inboxes.',
        features: ['Lead pipeline', 'Follow-up reminders', 'Customer history', 'Team assignments'],
      },
      {
        icon: 'ai',
        title: 'Integrations and dashboards',
        description: 'Connect payments, WhatsApp, accounting, or existing tools, and show the numbers leadership asks for.',
        features: ['API integrations', 'Dashboards', 'Alerts', 'Data import'],
      },
    ]
  }

  return [
    {
      icon: 'mobile',
      title: 'Android apps',
      description: `Android apps for customers or staff in ${city.name}, published and maintained after the first release.`,
      features: ['Phone and tablet layouts', 'Offline-friendly flows', 'Push notifications', 'Play Store release'],
    },
    {
      icon: 'web',
      title: 'iOS apps',
      description: 'iPhone and iPad apps with the same business rules as Android, tested before App Store submission.',
      features: ['iPhone layouts', 'iPad support', 'TestFlight builds', 'App Store release'],
    },
    {
      icon: 'ai',
      title: 'Cross-platform apps',
      description: 'Flutter or React Native when one codebase should cover both stores without splitting the roadmap.',
      features: ['Shared codebase', 'Android and iOS', 'Faster updates', 'Design system'],
    },
    {
      icon: 'erp',
      title: 'Business mobile apps',
      description: `Field, sales, and operations apps for ${city.audience}, tied to the system your office already uses.`,
      features: ['Staff logins', 'Orders and tasks', 'Photo capture', 'Office sync'],
    },
  ]
}

function buildPage(city: CityProfile, kind: ServiceKind): ServiceLandingContent {
  const place = `${city.name}, ${city.state}, India`

  if (kind === 'website') {
    return {
      slug: `website-development-company-in-${city.slug}`,
      path: `/website-development-company-in-${city.slug}/`,
      navLabel: `Website development in ${city.name}`,
      title: `Website Development Company in ${city.name}`,
      description: `Shribi is a website development company in ${city.name}. We design business websites and e-commerce stores for ${city.audience}.`,
      keywords: [
        `website development company in ${city.name}`,
        `web design company ${city.name}`,
        `e-commerce website development ${city.name}`,
        `website developers in ${city.state}`,
      ],
      eyebrow: `Website Development Company in ${city.name}`,
      h1: 'Website development company in',
      h1Highlight: city.name,
      lead: `Websites and e-commerce for ${city.region}. We design, build, and launch sites that explain your offer and take orders or enquiries.`,
      overviewTag: city.name,
      overviewTitle: `Websites and online stores for ${city.name} businesses`,
      overviewText: `${city.context} This page covers business websites and e-commerce: marketing sites, catalogues, checkout, and pages your team can edit after launch.`,
      offeringsTag: 'Websites and e-commerce',
      offeringsTitle: `What we build for ${city.name}`,
      offeringsIntro: `For ${city.audience} that need a site people can find, trust, and buy from.`,
      offerings: offerings(kind, city),
      processTitle: `How a ${city.name} website project runs`,
      processIntro: city.meet,
      process: [
        { title: 'Discover', text: `Pages, audience, and what a good enquiry or order looks like for your ${city.name} business.` },
        { title: 'Design', text: 'Sitemap and UI you can review before development starts.' },
        { title: 'Develop', text: 'Responsive pages, catalogue or CMS, forms, and payment setup when you sell online.' },
        { title: 'Launch', text: 'Checks, basic SEO, go-live, and a handover so your team can update the site.' },
      ],
      whyTitle: `Why ${city.name} teams work with Shribi`,
      why: [
        { title: 'Websites and stores', text: 'Company sites and e-commerce, scoped so you are not buying a portal you do not need.' },
        { title: 'Built to be found', text: 'Clean pages, fast loads, and content search engines and customers can both read.' },
        { title: `Made for ${city.name}`, text: city.context },
        { title: 'Support after launch', text: 'Fixes, new pages, and catalogue changes once the site is live.' },
      ],
      faqs: [
        {
          question: `Do you have an office in ${city.name}?`,
          answer: city.officeAnswer,
        },
        {
          question: 'Do you build e-commerce sites?',
          answer: `Yes. E-commerce is part of this service: catalogues, checkout, offers, and order updates for businesses in ${city.name}.`,
        },
        {
          question: 'How long does a website take?',
          answer:
            'A focused business website is often ready in 3–6 weeks. Stores with large catalogues, custom checkout, or many content pages take longer.',
        },
        {
          question: 'Can our team edit the site later?',
          answer:
            'Yes. CMS builds include training so your team can change pages, offers, and posts without a developer for every edit.',
        },
      ],
      ctaTitle: `Need a website or online store in ${city.name}?`,
      ctaText: `Tell us the pages and products you need. We will reply with a sample sitemap and a realistic start date. ${city.meet}`,
      areaServed: place,
      bannerImage: '/assets/Website%20Development.png',
    }
  }

  if (kind === 'software') {
    return {
      slug: `software-development-company-in-${city.slug}`,
      path: `/software-development-company-in-${city.slug}/`,
      navLabel: `Software development in ${city.name}`,
      title: `Software Development Company in ${city.name}`,
      description: `Shribi is a software development company in ${city.name}. We build custom software, ERP, CRM, and business systems for ${city.audience}.`,
      keywords: [
        `software development company in ${city.name}`,
        `custom software development ${city.name}`,
        `ERP development ${city.name}`,
        `CRM development ${city.name}`,
      ],
      eyebrow: `Software Development Company in ${city.name}`,
      h1: 'Software development company in',
      h1Highlight: city.name,
      lead: `Custom software, ERP, CRM, and business systems for companies in ${city.region}.`,
      overviewTag: city.name,
      overviewTitle: `Business systems for teams in ${city.name}`,
      overviewText: `${city.context} This page covers custom software, ERP, CRM, and the operational systems that replace spreadsheets and disconnected tools.`,
      offeringsTag: 'Software and business systems',
      offeringsTitle: `Systems we build for ${city.name}`,
      offeringsIntro: `For ${city.audience} that have outgrown sheets, inboxes, and one-size software.`,
      offerings: offerings(kind, city),
      processTitle: `How a ${city.name} software project runs`,
      processIntro: city.meet,
      process: [
        { title: 'Map the work', text: 'The roles, screens, and reports your team needs in the first release.' },
        { title: 'Prototype', text: 'Clickable flows so stakeholders can correct the process before we build it.' },
        { title: 'Build', text: 'Custom software, ERP, or CRM modules, integrated with the tools you already pay for.' },
        { title: 'Roll out', text: 'Data import, staff training, and a support window after go-live.' },
      ],
      whyTitle: `Why ${city.name} companies choose Shribi`,
      why: [
        { title: 'Systems, not slideware', text: 'Custom software, ERP, and CRM scoped to the workflow you described.' },
        { title: 'Phased releases', text: 'A first version people can use, then the modules that can wait.' },
        { title: `Delivery for ${city.name}`, text: city.context },
        { title: 'Handover your team can run', text: 'Training and admin access so the system does not depend on one vendor call.' },
      ],
      faqs: [
        {
          question: `Do you have an office in ${city.name}?`,
          answer: city.officeAnswer,
        },
        {
          question: 'What kinds of software do you build?',
          answer: `Custom software, ERP, CRM, and related business systems for companies in ${city.name}. Billing, inventory, leads, and internal workflows are typical starting points.`,
        },
        {
          question: 'Can you work with software we already use?',
          answer:
            'Yes. We integrate with existing accounting, payment, and messaging tools when they should stay, and replace the parts that are slowing the team down.',
        },
        {
          question: 'How do you price a custom system?',
          answer:
            'After a short workflow review we quote a first release with a clear module list. Later phases are priced when you choose to build them.',
        },
      ],
      ctaTitle: `Planning custom software, ERP, or CRM in ${city.name}?`,
      ctaText: `Describe the workflow that is stuck in sheets or calls. We will outline a first release. ${city.meet}`,
      areaServed: place,
      bannerImage: '/assets/software-development-banner.png',
    }
  }

  return {
    slug: `mobile-app-development-company-in-${city.slug}`,
    path: `/mobile-app-development-company-in-${city.slug}/`,
    navLabel: `Mobile app development in ${city.name}`,
    title: `Mobile App Development Company in ${city.name}`,
    description: `Shribi is a mobile app development company in ${city.name}. We build Android, iOS, and business mobile apps for ${city.audience}.`,
    keywords: [
      `mobile app development company in ${city.name}`,
      `Android app development ${city.name}`,
      `iOS app development ${city.name}`,
      `business mobile apps ${city.name}`,
    ],
    eyebrow: `Mobile App Development Company in ${city.name}`,
    h1: 'Mobile app development company in',
    h1Highlight: city.name,
    lead: `Android, iOS, and business mobile apps for teams in ${city.region}.`,
    overviewTag: city.name,
    overviewTitle: `Mobile apps for ${city.name} businesses`,
    overviewText: `${city.context} This page covers Android, iOS, and business mobile apps — customer apps and the staff apps that sit on top of your existing system.`,
    offeringsTag: 'Android, iOS, and business apps',
    offeringsTitle: `Apps we build for ${city.name}`,
    offeringsIntro: `For ${city.audience} that need a phone app their customers or field teams will actually open.`,
    offerings: offerings(kind, city),
    processTitle: `How a ${city.name} app project runs`,
    processIntro: city.meet,
    process: [
      { title: 'Scope', text: 'Who uses the app, on which phones, and what the first store release must do.' },
      { title: 'Design', text: 'Screens and flows reviewed on a phone before engineering starts.' },
      { title: 'Build', text: 'Android, iOS, or a shared Flutter or React Native codebase, tied to your APIs.' },
      { title: 'Release', text: 'Device testing, store submission, and a plan for the next version.' },
    ],
    whyTitle: `Why ${city.name} teams build apps with Shribi`,
    why: [
      { title: 'Both stores', text: 'Android and iOS, or a cross-platform app when one codebase is the better plan.' },
      { title: 'Business apps included', text: 'Staff, sales, and field apps, not only consumer storefronts.' },
      { title: `For ${city.name}`, text: city.context },
      { title: 'After the launch', text: 'Crash fixes, OS updates, and the features the first release left for later.' },
    ],
    faqs: [
      {
        question: `Do you have an office in ${city.name}?`,
        answer: city.officeAnswer,
      },
      {
        question: 'Do you build both Android and iOS?',
        answer: `Yes. Android, iOS, and business mobile apps are the scope of this service for ${city.name} clients. We use native or cross-platform builds depending on the product.`,
      },
      {
        question: 'Can the app connect to our current software?',
        answer:
          'Yes. Business apps are planned against the system your office already uses, with logins, roles, and the data staff need in the field.',
      },
      {
        question: 'Do you publish to the app stores?',
        answer:
          'Yes. We prepare the store listings with you and submit Android and iOS builds. Store review time sits with Google and Apple after submission.',
      },
    ],
    ctaTitle: `Need an Android, iOS, or business app in ${city.name}?`,
    ctaText: `Tell us who the app is for and what the first version must do. We will reply with a practical scope. ${city.meet}`,
    areaServed: place,
    bannerImage: '/assets/mobile-app-development.png',
  }
}

export const cityLandingPages: ServiceLandingContent[] = cities.flatMap((city) =>
  serviceOrder
    .filter((kind) => !(city.slug === 'mathura' && kind === 'website'))
    .map((kind) => buildPage(city, kind)),
)

export const locationCityOrder = cities.map((city) => ({
  slug: city.slug,
  name: city.name,
}))

export function citySlugFromLanding(slug: string) {
  const marker = '-company-in-'
  const index = slug.indexOf(marker)
  if (index === -1) return null
  return slug.slice(index + marker.length)
}

export function nationalServiceSlug(slug: string) {
  if (slug.startsWith('website-development-company-in-')) return 'website-development-services'
  if (slug.startsWith('software-development-company-in-')) return 'custom-software-development-services'
  if (slug.startsWith('mobile-app-development-company-in-')) return 'mobile-app-development-services'
  return null
}
