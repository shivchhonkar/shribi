import type { ServiceIconType } from '@/components/shared/service-card'
import { pageMetadata } from '@/lib/site'

export type ServiceOffering = {
  icon: ServiceIconType
  title: string
  description: string
  features: string[]
}

export type ServiceLandingContent = {
  slug: string
  path: string
  navLabel: string
  title: string
  description: string
  keywords: string[]
  eyebrow: string
  h1: string
  h1Highlight: string
  lead: string
  overviewTag: string
  overviewTitle: string
  overviewText: string
  offeringsTag: string
  offeringsTitle: string
  offeringsIntro: string
  offerings: ServiceOffering[]
  processTitle: string
  processIntro: string
  process: { title: string; text: string }[]
  whyTitle: string
  why: { title: string; text: string }[]
  faqs: { question: string; answer: string }[]
  ctaTitle: string
  ctaText: string
  areaServed?: string
}

export const serviceLandingPages: ServiceLandingContent[] = [
  {
    slug: 'website-development-services',
    path: '/website-development-services/',
    navLabel: 'Website Development',
    title: 'Website Development Services',
    description:
      'Shribi delivers website development services for businesses across India — custom websites, e-commerce, CMS, and high-performance web apps built to convert.',
    keywords: [
      'website development services',
      'custom website development',
      'e-commerce website development',
      'web design company India',
    ],
    eyebrow: 'Website Development Services',
    h1: 'Website development services built for',
    h1Highlight: 'your business',
    lead: 'From marketing sites to conversion-focused web platforms, we design, build, and maintain websites that look sharp, load fast, and help you win more customers.',
    overviewTag: 'What You Get',
    overviewTitle: 'Modern websites that work as hard as you do',
    overviewText:
      'Dummy content: our website development services cover strategy, UI design, frontend and backend engineering, CMS setup, and ongoing support. Every build is mobile-first, SEO-ready, and aligned with your brand so visitors can find you, trust you, and take action.',
    offeringsTag: 'Our Capabilities',
    offeringsTitle: 'Website solutions we deliver',
    offeringsIntro: 'Dummy packages for startups, SMEs, and growing brands that need a reliable digital presence.',
    offerings: [
      {
        icon: 'web',
        title: 'Business websites',
        description: 'Clean, responsive company websites that explain your offer and generate enquiries.',
        features: ['Custom design', 'SEO-ready pages', 'Lead forms', 'Analytics setup'],
      },
      {
        icon: 'estate',
        title: 'E-commerce stores',
        description: 'Online stores with catalogues, checkout, payments, and order workflows.',
        features: ['Product catalogue', 'Secure checkout', 'Offers & coupons', 'Order tracking'],
      },
      {
        icon: 'erp',
        title: 'CMS websites',
        description: 'Editable websites so your team can update blogs, pages, and campaigns without a developer.',
        features: ['Easy content editing', 'Blog & news', 'Role-based access', 'Training included'],
      },
      {
        icon: 'ai',
        title: 'Web applications',
        description: 'Custom web apps for bookings, portals, dashboards, and customer self-service.',
        features: ['User accounts', 'Admin dashboards', 'API integrations', 'Cloud hosting'],
      },
    ],
    processTitle: 'How we build your website',
    processIntro: 'A simple, transparent process from first call to launch.',
    process: [
      { title: 'Discover', text: 'We map your goals, audience, pages, and success metrics.' },
      { title: 'Design', text: 'Wireframes and UI mockups so you can see the site before we code.' },
      { title: 'Develop', text: 'Responsive, fast pages with forms, CMS, and integrations.' },
      { title: 'Launch', text: 'QA, SEO basics, go-live, and a handover with support.' },
    ],
    whyTitle: 'Why choose Shribi for web development',
    why: [
      { title: 'Business-first design', text: 'Layouts and copy structure built to convert, not just decorate.' },
      { title: 'Performance & SEO', text: 'Core Web Vitals, clean markup, and crawlable content from day one.' },
      { title: 'Secure delivery', text: 'HTTPS, hardened forms, backups, and maintainable code.' },
      { title: 'Long-term support', text: 'Updates, fixes, and improvements after launch.' },
    ],
    faqs: [
      {
        question: 'How long does a typical website take?',
        answer:
          'Dummy answer: a standard business website is often ready in 3–6 weeks, depending on pages, content, and reviews. E-commerce and custom portals take longer.',
      },
      {
        question: 'Will my website work on mobile?',
        answer:
          'Yes. Every website we ship is mobile-first and tested on common phone and tablet sizes.',
      },
      {
        question: 'Can you redesign an existing website?',
        answer:
          'Dummy answer: yes. We can refresh design, rebuild on a modern stack, or migrate content from your current CMS.',
      },
      {
        question: 'Do you provide hosting and maintenance?',
        answer:
          'Dummy answer: we can host, monitor, and maintain your site, or deploy to the cloud account you already use.',
      },
    ],
    ctaTitle: 'Ready to launch a website that converts?',
    ctaText: 'Share your idea and we will recommend a dummy project plan, timeline, and next steps.',
  },
  {
    slug: 'mobile-app-development-services',
    path: '/mobile-app-development-services/',
    navLabel: 'Mobile App Development',
    title: 'Mobile App Development Services',
    description:
      'Shribi offers mobile app development services for Android, iOS, and cross-platform apps — from MVP to scalable consumer and enterprise products.',
    keywords: [
      'mobile app development services',
      'Android app development',
      'iOS app development',
      'Flutter app development India',
    ],
    eyebrow: 'Mobile App Development Services',
    h1: 'Mobile app development services that users',
    h1Highlight: 'actually use',
    lead: 'We design and build Android, iOS, and cross-platform apps with clean UX, reliable backends, and the analytics you need to iterate after launch.',
    overviewTag: 'App Studio',
    overviewTitle: 'From idea to App Store and Play Store',
    overviewText:
      'Dummy content: our mobile app development services include product discovery, UI/UX, native and cross-platform engineering, API development, QA, store submission, and post-release updates. We help you ship an MVP first, then grow features with real user data.',
    offeringsTag: 'What We Build',
    offeringsTitle: 'Mobile apps for every stage',
    offeringsIntro: 'Dummy offerings for startups validating an idea and companies digitising field or customer workflows.',
    offerings: [
      {
        icon: 'ai',
        title: 'Android & iOS apps',
        description: 'Store-ready apps with native feel, push notifications, and device features.',
        features: ['Play Store & App Store', 'Push notifications', 'Offline support', 'In-app updates'],
      },
      {
        icon: 'web',
        title: 'Cross-platform apps',
        description: 'One codebase for iOS and Android to ship faster without dropping quality.',
        features: ['Flutter / React Native', 'Shared UI kit', 'Faster releases', 'Lower TCO'],
      },
      {
        icon: 'erp',
        title: 'MVP development',
        description: 'A focused first version so you can test demand before a full build.',
        features: ['Core user journeys', 'Simple admin panel', 'Crash reporting', '2–3 month sprints'],
      },
      {
        icon: 'billing',
        title: 'App backends & APIs',
        description: 'Secure APIs, dashboards, payments, and integrations your app depends on.',
        features: ['REST / GraphQL APIs', 'Auth & roles', 'Payments', 'Cloud infrastructure'],
      },
    ],
    processTitle: 'How we ship mobile apps',
    processIntro: 'Short cycles, visible progress, and a store-ready build at the end.',
    process: [
      { title: 'Product map', text: 'We define users, screens, and the smallest useful first release.' },
      { title: 'UX & UI', text: 'Clickable prototypes so you can walk through the app before coding.' },
      { title: 'Build & test', text: 'Sprints with device testing, QA, and weekly demos.' },
      { title: 'Release', text: 'Store listings, rollout, crash monitoring, and a support plan.' },
    ],
    whyTitle: 'Why teams pick Shribi for apps',
    why: [
      { title: 'UX that retains', text: 'Clear flows and fast screens so people keep coming back.' },
      { title: 'Stable architecture', text: 'APIs and apps structured for the next 20 features, not just the first five.' },
      { title: 'Store compliance', text: 'Dummy: we handle listing assets, privacy text, and review guidelines.' },
      { title: 'After-launch care', text: 'Bug fixes, OS updates, and feature iterations after you go live.' },
    ],
    faqs: [
      {
        question: 'Do you build both Android and iOS?',
        answer:
          'Dummy answer: yes. We deliver native or cross-platform apps depending on budget, timeline, and UX needs.',
      },
      {
        question: 'Can you start with an MVP?',
        answer:
          'Yes. Most clients start with a focused MVP, then we add payments, chat, or admin tools in later sprints.',
      },
      {
        question: 'Will you publish the app to the stores?',
        answer:
          'Dummy answer: we can prepare listings, screenshots, and submit builds to Google Play and the Apple App Store.',
      },
      {
        question: 'Do you maintain the app after launch?',
        answer:
          'Dummy answer: maintenance retainers cover OS updates, crash fixes, and small feature requests.',
      },
    ],
    ctaTitle: 'Have an app idea to validate?',
    ctaText: 'Tell us the problem you want to solve. We will share a dummy scope, stack, and timeline.',
  },
  {
    slug: 'custom-software-development-services',
    path: '/custom-software-development-services/',
    navLabel: 'Custom Software',
    title: 'Custom Software Development Services',
    description:
      'Custom software development services from Shribi — tailored web platforms, internal tools, integrations, and automation for businesses that have outgrown off-the-shelf products.',
    keywords: [
      'custom software development services',
      'bespoke software development',
      'enterprise software development India',
      'custom web application development',
    ],
    eyebrow: 'Custom Software Development Services',
    h1: 'Custom software development services for',
    h1Highlight: 'real operations',
    lead: 'When spreadsheets and generic tools fall short, we build software around your process — secure, scalable, and owned by your team.',
    overviewTag: 'Built Around You',
    overviewTitle: 'Software shaped to your workflow, not the other way around',
    overviewText:
      'Dummy content: Shribi custom software development services include discovery, architecture, product engineering, integrations, data migration, and training. We replace messy manual work with portals, CRMs, ERPs, and internal tools that your staff will actually use.',
    offeringsTag: 'Solutions',
    offeringsTitle: 'Custom systems we engineer',
    offeringsIntro: 'Dummy modules you can mix depending on whether you need a customer portal, ops tool, or full platform.',
    offerings: [
      {
        icon: 'erp',
        title: 'Business platforms',
        description: 'End-to-end systems for orders, inventory, staff, and reporting.',
        features: ['Role-based access', 'Workflows', 'Audit logs', 'Custom reports'],
      },
      {
        icon: 'estate',
        title: 'Internal tools',
        description: 'Dashboards and admin apps that replace email chains and Excel trackers.',
        features: ['Ops dashboards', 'Approvals', 'Document tracking', 'Alerts'],
      },
      {
        icon: 'ai',
        title: 'Integrations',
        description: 'Connect payment gateways, CRMs, GST tools, WhatsApp, and third-party APIs.',
        features: ['REST APIs', 'Webhooks', 'Data sync', 'Single sign-on'],
      },
      {
        icon: 'billing',
        title: 'Automation',
        description: 'Scheduled jobs, notifications, and rules that cut repetitive work.',
        features: ['Task queues', 'Email/SMS alerts', 'Rule engines', 'Error monitoring'],
      },
    ],
    processTitle: 'How custom software gets delivered',
    processIntro: 'We reduce risk with prototypes, milestones, and working software every sprint.',
    process: [
      { title: 'Workshops', text: 'We document users, pain points, and must-have vs later features.' },
      { title: 'Architecture', text: 'A stack and data model that can grow without a rewrite.' },
      { title: 'Sprints', text: 'Shippable increments you can click, not slide decks.' },
      { title: 'Handover', text: 'UAT, training, documentation, and a support window.' },
    ],
    whyTitle: 'Why build custom with Shribi',
    why: [
      { title: 'Fits your process', text: 'We model the software on how your team already works.' },
      { title: 'You own the IP', text: 'Dummy: source code and credentials stay with you.' },
      { title: 'Secure by default', text: 'Auth, backups, and least-privilege access baked in.' },
      { title: 'Room to scale', text: 'Start with one department, then roll out to the rest.' },
    ],
    faqs: [
      {
        question: 'When do we need custom software instead of SaaS?',
        answer:
          'Dummy answer: when off-the-shelf tools cannot match your workflow, reporting, or integrations without painful workarounds.',
      },
      {
        question: 'Can you integrate with our current tools?',
        answer:
          'Yes. Dummy integrations include payment gateways, accounting, CRM, SMS, and WhatsApp APIs.',
      },
      {
        question: 'How do you estimate cost and time?',
        answer:
          'Dummy answer: after a discovery workshop we share a phased estimate — MVP first, then optional modules.',
      },
      {
        question: 'Who maintains the software later?',
        answer:
          'Your team can take over, or Shribi can run a monthly support and enhancement retainer.',
      },
    ],
    ctaTitle: 'Need software that matches your process?',
    ctaText: 'Describe the bottleneck. We will reply with a dummy approach, modules, and a starter timeline.',
  },
  {
    slug: 'real-estate-website-development',
    path: '/real-estate-website-development/',
    navLabel: 'Real Estate Websites',
    title: 'Real Estate Website Development',
    description:
      'Real estate website development for builders, brokers, and property brands — listing sites, lead capture, CRM hooks, and project microsites by Shribi.',
    keywords: [
      'real estate website development',
      'property listing website',
      'real estate web design',
      'builder website development',
    ],
    eyebrow: 'Real Estate Website Development',
    h1: 'Real estate website development for',
    h1Highlight: 'builders & brokers',
    lead: 'Showcase projects, capture site-visit leads, and keep inventory in sync with a property website built for how real estate actually sells.',
    overviewTag: 'Property Digital',
    overviewTitle: 'Websites that turn listings into site visits',
    overviewText:
      'Dummy content: our real estate website development work covers project landing pages, searchable property catalogues, enquiry forms, WhatsApp click-to-chat, map views, and optional CRM integration. Pair it with Estate CRM or Zamiwala when you need the full sales stack.',
    offeringsTag: 'Property Features',
    offeringsTitle: 'What your real estate site can include',
    offeringsIntro: 'Dummy modules for developers, channel partners, and independent brokers.',
    offerings: [
      {
        icon: 'estate',
        title: 'Project & listing sites',
        description: 'High-impact pages for townships, floors, plots, and resale inventory.',
        features: ['Project galleries', 'Floor plans', 'Amenity sections', 'Brochures'],
      },
      {
        icon: 'web',
        title: 'Search & filters',
        description: 'Let buyers filter by location, BHK, budget, and possession status.',
        features: ['Map view', 'Saved searches', 'Featured properties', 'SEO listing pages'],
      },
      {
        icon: 'billing',
        title: 'Lead capture',
        description: 'Enquiry forms, call tracking, and WhatsApp so no lead is left in the inbox.',
        features: ['Site-visit forms', 'WhatsApp CTAs', 'Thank-you flows', 'CRM sync'],
      },
      {
        icon: 'ai',
        title: 'Agent tools',
        description: 'Dummy extras such as inventory updates, microsites, and campaign landing pages.',
        features: ['Agent login', 'Inventory status', 'Campaign pages', 'Analytics'],
      },
    ],
    processTitle: 'How a property website comes together',
    processIntro: 'We start with your inventory and sales process, then design around the buyer journey.',
    process: [
      { title: 'Inventory map', text: 'We list projects, unit types, and the data you must show.' },
      { title: 'Buyer journey', text: 'Search, detail page, enquiry, and follow-up — designed as one flow.' },
      { title: 'Build', text: 'Listings, forms, maps, and CRM or spreadsheet export.' },
      { title: 'Go live', text: 'SEO titles, speed checks, and training for your sales team.' },
    ],
    whyTitle: 'Why real estate brands work with Shribi',
    why: [
      { title: 'Industry context', text: 'We already ship Estate CRM and property products like Zamiwala.' },
      { title: 'Lead-first UX', text: 'Every page has a clear next step for the buyer.' },
      { title: 'Sales-ready data', text: 'Dummy: enquiries can flow into CRM instead of a shared mailbox.' },
      { title: 'Campaign-ready', text: 'Landing pages you can point Meta and Google ads to.' },
    ],
    faqs: [
      {
        question: 'Can you migrate our current property listings?',
        answer:
          'Dummy answer: yes. We can import projects, images, and unit data from spreadsheets or an existing site.',
      },
      {
        question: 'Will the site work for multiple projects?',
        answer:
          'Yes. Builders often need a group site plus individual project microsites — we plan both.',
      },
      {
        question: 'Can agents update inventory themselves?',
        answer:
          'Dummy answer: with a CMS or admin panel, your team can mark units sold, add offers, and upload photos.',
      },
      {
        question: 'Do you integrate WhatsApp and CRM?',
        answer:
          'Dummy answer: click-to-WhatsApp, email alerts, and CRM hooks are standard options on real estate builds.',
      },
    ],
    ctaTitle: 'Planning a launch or inventory refresh?',
    ctaText: 'Send a project list or brochure. We will outline a dummy sitemap and lead-capture plan.',
  },
  {
    slug: 'website-development-company-in-mathura',
    path: '/website-development-company-in-mathura/',
    navLabel: 'Mathura Web Company',
    title: 'Website Development Company in Mathura',
    description:
      'Shribi is a website development company in Mathura offering custom websites, apps, and software for local businesses, schools, and growing brands near GLA University and across Uttar Pradesh.',
    keywords: [
      'website development company in Mathura',
      'web design company Mathura',
      'website developers near GLA University',
      'website company in Uttar Pradesh',
    ],
    eyebrow: 'Website Development Company in Mathura',
    h1: 'Website development company in',
    h1Highlight: 'Mathura',
    lead: 'Local team, national delivery. From NH-19 near GLA University we build websites, apps, and custom software for Mathura, Vrindavan, Agra, and businesses across India.',
    overviewTag: 'Local Partner',
    overviewTitle: 'A Mathura web company that shows up in person',
    overviewText:
      'Dummy content: Shribi Technologies operates from Mathura with an additional office in Noida. If you want a website development company in Mathura that can sit with you, understand your customers, and still ship modern, SEO-friendly sites — we are built for that mix of local access and product-grade engineering.',
    offeringsTag: 'For Mathura Businesses',
    offeringsTitle: 'Digital work we do from Mathura',
    offeringsIntro: 'Dummy services for shops, schools, clinics, manufacturers, real estate, and campus startups.',
    offerings: [
      {
        icon: 'web',
        title: 'Local business websites',
        description: 'Google-friendly sites for Mathura brands that need calls, maps, and WhatsApp enquiries.',
        features: ['NAP & map embed', 'Hindi/English pages', 'WhatsApp button', 'On-page SEO'],
      },
      {
        icon: 'erp',
        title: 'School & institute sites',
        description: 'Admission pages, galleries, and portals for schools and coaching near Mathura.',
        features: ['Admission forms', 'Notices', 'Gallery', 'Fee enquiry'],
      },
      {
        icon: 'estate',
        title: 'Property & tourism sites',
        description: 'Project and hospitality websites for the Mathura–Vrindavan corridor.',
        features: ['Listings', 'Packages', 'Lead forms', 'Campaign pages'],
      },
      {
        icon: 'ai',
        title: 'Apps & custom software',
        description: 'When a brochure site is not enough, we build the tools behind the business.',
        features: ['Mobile apps', 'Internal tools', 'Billing & ERP', 'Integrations'],
      },
    ],
    processTitle: 'Working with a Mathura development team',
    processIntro: 'Meet nearby, review on a call, or visit our office beside GLA University.',
    process: [
      { title: 'Meet', text: 'A short brief in Mathura, Noida, or on a video call.' },
      { title: 'Plan', text: 'Sitemap, quote range, and a dummy timeline you can share with partners.' },
      { title: 'Build', text: 'Weekly previews so you are never waiting until the last day.' },
      { title: 'Support', text: 'Local follow-up plus remote maintenance after go-live.' },
    ],
    whyTitle: 'Why Mathura businesses choose Shribi',
    why: [
      { title: 'Here when you need us', text: 'Office near GLA University, NH-19 — easy to visit.' },
      { title: 'Not just a brochure shop', text: 'We also ship ERP, CRM, and products used beyond Mathura.' },
      { title: 'Hindi + English delivery', text: 'Dummy: content and training in the language your team prefers.' },
      { title: 'Fair, clear pricing', text: 'Phased work so you are not buying a giant project on day one.' },
    ],
    faqs: [
      {
        question: 'Where is your Mathura office?',
        answer:
          'NH-19, 43 KA Bhag Near GLA University, Mathura, Uttar Pradesh 281406. We also have a Noida office.',
      },
      {
        question: 'Do you only work with Mathura clients?',
        answer:
          'No. Mathura is home base. We deliver websites and software for clients across India while staying easy to meet locally.',
      },
      {
        question: 'Can you build a site in Hindi?',
        answer:
          'Dummy answer: yes. Many Mathura businesses need bilingual pages; we plan content and fonts for both languages.',
      },
      {
        question: 'What should I bring to the first meeting?',
        answer:
          'Dummy answer: logo, a few competitor sites, and the 3–5 pages you know you need. We will fill in the rest.',
      },
    ],
    ctaTitle: 'Looking for a website development company in Mathura?',
    ctaText: 'Visit us near GLA University or send a message. We will reply with a dummy plan and available start dates.',
    areaServed: 'Mathura, Uttar Pradesh, India',
  },
]

export function getServiceLanding(slug: string) {
  const page = serviceLandingPages.find((item) => item.slug === slug)
  if (!page) {
    throw new Error(`Unknown service landing page: ${slug}`)
  }
  return page
}

export function getRelatedServiceLandings(slug: string) {
  return serviceLandingPages.filter((item) => item.slug !== slug)
}

export function serviceLandingMetadata(slug: string) {
  const page = getServiceLanding(slug)
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
  })
}
