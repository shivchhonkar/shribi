import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '@/components/forms/contact-form'
import HeroBannerSlider from '@/components/home/hero-banner-slider'
import TestimonialsSlider from '@/components/home/testimonials-slider'
import { ContactLinks, ServiceCard } from '@/components/shared/service-card'
import { coreServices, industries } from '@/lib/content'
import { IndustryIcon } from '@/lib/industry-icons'

const trustCards = [
  {
    title: 'From idea to launch',
    text: 'We handle strategy, design, development and deployment under one team, so you don\'t have to coordinate multiple vendors.',
    icon: (
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    ),
    delay: '',
  },
  {
    title: 'Secure by design',
    text: 'We consider security, access control and data protection while designing and developing your application, not as an afterthought.',
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    delay: 'reveal-delay',
  },
  {
    title: 'Fast and reliable',
    text: 'We build responsive websites and applications that load quickly and work reliably across devices.',
    icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
    delay: 'reveal-delay-2',
  },
  {
    title: 'Ongoing support',
    text: 'To ensure high satisfaction, we provide responsive help when you need it, including onboarding, training and SLA-backed maintenance.',
    icon: (
      <>
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
      </>
    ),
    delay: 'reveal-delay-3',
  },
]

const testimonials = [
  {
    quote:
      'Edufy replaced three spreadsheets and a dozen WhatsApp groups. Parents see homework the same evening, and our office finally closes on time.',
    name: 'Meera Iyer',
    title: 'Principal, Greenwood Public School',
    product: 'Shribi Edufy',
    initials: 'MI',
  },
  {
    quote:
      'GST invoices, stock, and party ledgers used to live in different tools. Billint pulled it together — our team was live in a week, not a quarter.',
    name: 'Rajesh Malhotra',
    title: 'Director, Malhotra Traders',
    product: 'Billint',
    initials: 'RM',
  },
  {
    quote:
      'Zamiwala gave our agents a single place for listings and follow-ups. Site visits are booked from the app, and nothing slips through the cracks.',
    name: 'Ananya Kapoor',
    title: 'Founder, Skyline Estates',
    product: 'Zamiwala',
    initials: 'AK',
  },
  {
    quote:
      'We needed GST-ready billing across two warehouses. Shribi understood the workflow before writing a line of code — that is rare.',
    name: 'Vikram Shah',
    title: 'CFO, Shah Pharmaceuticals',
    product: 'Billint',
    initials: 'VS',
  },
  {
    quote:
      'Attendance, fees, and exam reports now live in one login. Teachers adopted it faster than any tool we have rolled out in ten years.',
    name: 'Fatima Khan',
    title: 'Academic Head, Crescent International',
    product: 'Shribi Edufy',
    initials: 'FK',
  },
  {
    quote:
      'Our brokers were still sharing PDFs on WhatsApp. Zamiwala made inventory searchable, and the admin dashboard keeps every listing honest.',
    name: 'Suresh Nair',
    title: 'Partner, Nair & Sons Realty',
    product: 'Zamiwala',
    initials: 'SN',
  },
  {
    quote:
      'From e-invoicing to batch pricing, Billint matches how a mid-size retailer actually works. Support answers before the day ends.',
    name: 'Priya Deshmukh',
    title: 'Operations Lead, Deshmukh Retail',
    product: 'Billint',
    initials: 'PD',
  },
  {
    quote:
      'Parents used to call the office for every homework query. Edufy cut those calls in half in the first term.',
    name: 'Arjun Reddy',
    title: 'Correspondent, Lakshya Vidyalaya',
    product: 'Shribi Edufy',
    initials: 'AR',
  },
  {
    quote:
      'Project pages, location filters, and a clean mobile flow — Zamiwala feels like a product team that has sat in a broker’s cabin.',
    name: 'Neha Banerjee',
    title: 'Principal Broker, Eastwind Properties',
    product: 'Zamiwala',
    initials: 'NB',
  },
  {
    quote:
      'We run three GSTINs. Switching businesses in Billint is a tap, and stock never gets mixed. That alone paid for the subscription.',
    name: 'Harpreet Singh',
    title: 'Owner, Singh Auto Spares',
    product: 'Billint',
    initials: 'HS',
  },
  {
    quote:
      'A Montessori cannot live on a heavy ERP. Edufy is light enough for our staff and complete enough for the board.',
    name: 'Kavya Rao',
    title: 'Administrator, Little Oak Montessori',
    product: 'Shribi Edufy',
    initials: 'KR',
  },
  {
    quote:
      'Shribi rebuilt our customer portal and the Android app as one programme. Delivery dates held, which is why we came back for phase two.',
    name: 'Omar Hassan',
    title: 'Director, Horizon Facilities',
    product: 'Custom software',
    initials: 'OH',
  },
  {
    quote:
      'Payroll and vendor bills used to collide at month-end. Billint’s party ledger gave finance a single source of truth.',
    name: 'Divya Menon',
    title: 'HR & Admin, Menon Logistics',
    product: 'Billint',
    initials: 'DM',
  },
  {
    quote:
      'Site visit logging used to live in a notebook. With Zamiwala, sales sees the pipeline before the morning huddle.',
    name: 'Rohan Joshi',
    title: 'Sales Head, Joshi Projects',
    product: 'Zamiwala',
    initials: 'RJ',
  },
  {
    quote:
      'We needed admissions, transport, and parent SMS without hiring an IT team. Shribi trained our clerks and stayed on the phone until it stuck.',
    name: 'Lakshmi Narayan',
    title: 'Trustee, Saraswati Vidya Mandir',
    product: 'Shribi Edufy',
    initials: 'LN',
  },
]

const products = [
  {
    href: '/billing-and-inventory-management-software/',
    label: 'Visit Billint',
    image: '/assets/thumbnails/billint-thumbnail.png',
    alt: 'Billint dashboard',
    name: 'Billint - CRM & Billing Software',
    description:
      'Complete billing and invoice management for Indian businesses — GST invoices, inventory, parties, payments, and multi-business support.',
    features: ['GST billing & e-invoice', 'Inventory & batch pricing', 'Web + Android / iOS app'],
    link: 'View Billint →',
    delay: '',
  },
  {
    href: 'https://www.zamiwala.com',
    label: 'Visit Zamiwala',
    image: '/assets/thumbnails/zamiwala-thumbnail.png',
    alt: 'Zamiwala platform',
    name: 'Zamiwala',
    description:
      'Property discovery and estate management — listings, projects, locations, admin tools, and mobile apps for buyers and agents.',
    features: ['Property & project listings', 'Admin & CRM dashboards', 'Web + Android application'],
    link: 'View Zamiwala →',
    delay: 'reveal-delay',
  },
  {
    href: 'https://edufy.shribi.com/',
    label: 'Visit Shribi Edufy',
    image: '/assets/thumbnails/edufy-shribi.png',
    alt: 'Shribi Edufy school ERP',
    name: 'Shribi Edufy',
    description:
      'Advanced School ERP for admissions, academics, fees, HR, transport, exams, and parent communication — built for modern Indian schools.',
    features: ['Student Information System', 'Attendance Management', 'Homework & Assignments'],
    link: 'View Edufy →',
    delay: 'reveal-delay-2',
  },
]

export default function HomePageContent() {
  return (
    <>
      <section className="hero hero--globe hero--banner" id="home">
        <HeroBannerSlider />
        <div className="container hero-shell">
          <div className="hero-grid">
            <div className="hero-content reveal">
              <h1>
              We build software that <span className="gradient-text">solves real business problems</span>
                {/* Building digital solutions that <span className="gradient-text">scale with you</span> */}
              </h1>
              <p className="hero-lead">
              Shribi helps businesses in improve and manage their digital operations through custom software, websites, mobile apps and business platforms. 
              {/* We also build and operate our own products, including Billint, Zamiwala and Shribi Edufy. */}
                {/* Shribi delivers modern software, cloud infrastructure, and business technology
                tailored for growth — precise, reliable, and beautifully engineered. */}
              </p>
              <div className="hero-actions">
                <Link href="#services" className="btn btn-primary">
                  Explore Services
                </Link>
                <Link href="#contact" className="btn btn-ghost">
                  Talk to an expert
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-stats-bar reveal">
            {/* <div className="hero-stat-item">
              <strong>4+</strong>
              <span>Years of experience</span>
            </div>
            <div className="hero-stat-item">
              <strong>50+</strong>
              <span>Happy clients</span>
            </div>
            <div className="hero-stat-item">
              <strong>88%</strong>
              <span>Client retention</span>
            </div>
            <div className="hero-stat-item">
              <strong>24/7</strong>
              <span>Support</span>
            </div> */}
            <div className="hero-stat-item">
              <strong className="gradient-text">50+</strong>
              <span className="gradient-text">Happy clients</span>
            </div>
            <div className="hero-stat-item">
              <strong>150+</strong>
              <span className="gradient-text">Projects delivered</span>
            </div>
            <div className="hero-stat-item">
              <strong>95%</strong>
              <span className="gradient-text">Client retention</span>
            </div>
            <div className="hero-stat-item">
              <strong>98%</strong>
              <span className="gradient-text">On-time delivery</span>
            </div> 
          </div>
        </div>
      </section>

      

      <section className="section section-muted about" id="about">
        <div className="container">
          <div className="section-header reveal">
            {/* <span className="section-tag">Why Clients Trust Us</span> */}
            {/* <h2>The company behind trusted Indian SaaS brands</h2> */}
            <h2>Why Clients Trust Us</h2>
            <p>
              We deliver custom software, websites, mobile apps and business platforms
              to businesses across India.
            </p>
          </div>
          <div className="trust-grid">
            {trustCards.map((card) => (
              <article key={card.title} className={`trust-card reveal ${card.delay}`.trim()}>
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {card.icon}
                  </svg>
                </div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services services" id="services">
        <div className="container">
          <div className="section-header reveal">
            {/* <span className="section-tag">What We Do Best</span> */}
            <h2>Our Core Services</h2>
          </div>
          <div className="services-grid">
            {coreServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                delayClass={
                  i === 1
                    ? 'reveal-delay'
                    : i === 2
                      ? 'reveal-delay-2'
                      : i === 3
                        ? 'reveal-delay-3'
                        : ''
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light companies" id="companies">
        <div className="container">
          <div className="section-header reveal">
            {/* <span className="section-tag">Our Products</span> */}
            <h2>The products we build and operate</h2>
            <p>
              Products built and operated by Shribi, committed to quality, support, and continuous innovation.
            </p>
          </div>
          <div className="companies-grid">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className={`company-card reveal ${product.delay}`.trim()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={product.label}
              >
                <figure className="company-screenshot">
                  <Image src={product.image} alt={product.alt} width={880} height={720} />
                </figure>
                <div className="company-card-body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <ul className="company-features">
                    {product.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <span className="company-link">{product.link}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      

      <section className="section section-light testimonials" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            {/* <span className="section-tag">Customer stories</span> */}
            <h2>Trusted by teams who run on Shribi</h2>
            <p>
              Voices from schools, traders, and property teams using our products every day.
            </p>
          </div>
          <TestimonialsSlider items={testimonials} />
        </div>
      </section>

      <section className="section section-muted industries" id="industries">
        <div className="container">
          <div className="section-header reveal">
            {/* <span className="section-tag">Industries We Serve</span> */}
            <h2>Industries We Serve</h2>
            <p>
              We serve businesses across various industries, from education to real estate and more.
            </p>
          </div>
          <div className="industry-strip">
            {industries.map((name) => (
              <article key={name} className="industry-strip-item reveal">
                <div className="industry-tile__icon">
                  <IndustryIcon name={name} />
                </div>
                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light why" id="why">
        <div className="container why-grid">
          <div className="why-content reveal">
            {/* <span className="section-tag">Why Partner With Us</span> */}
            <h2>A partner who understands your business</h2>
            <p>
            Our experience in building and operating our own products gives us a practical understanding of development, deployment, maintenance and long-term support. This helps us approach every client project with a practical understanding of development, deployment, maintenance and long-term support. 
            Whether you need a website, business application, mobile app or a custom software solution, we work closely with you to understand your requirements and build something that fits your business.
            </p>
            <ul className="why-list">
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{' '}
                Transparent communication and realistic timelines
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{' '}
                Agile delivery with measurable milestones
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{' '}
                Long-term support after launch
              </li>
              <li>
                <span className="check" aria-hidden="true">
                  ✓
                </span>{' '}
                Dedicated teams for enterprise-grade delivery
              </li>
            </ul>
          </div>
          <div className="metrics-panel reveal reveal-delay">
            {[
              ['Projects Delivered', '150+', '92%'],
              ['Client Retention Rate', '95%', '95%'],
              ['On-time Delivery', '98%', '98%'],
              ['Support Availability', '24/7', '100%'],
            ].map(([label, value, width]) => (
              <div key={label as string} className="metric-row">
                <div className="metric-row-header">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
                <div className="metric-bar">
                  <div className="metric-bar-fill" style={{ width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contact contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            {/* <span className="section-tag">Let&apos;s Connect</span> */}
            <h2>Let&apos;s talk about your project</h2>
            <p>Have an idea, a business problem to solve, or an existing system that needs improvement? Tell us a little about what you’re looking for.</p>
            <p>Share the basics below and our team will get back to you within one business day. If you’re still figuring things out, that’s fine too—we can discuss the right approach together.</p>
            <div className="contact-details">
              <ContactLinks />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
