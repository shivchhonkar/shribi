import Image from 'next/image'
import Link from 'next/link'

const founderImagePath = '/assets/Shiv chhonkar - founder of shribi.png'

const kpiCards = [
  {
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    value: '100+',
    label: 'Happy Clients',
    detail: 'Across the globe',
    delay: '',
  },
  {
    icon: (
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    ),
    value: '250+',
    label: 'Projects Delivered',
    detail: 'Successful deployments',
    delay: 'reveal-delay',
  },
  {
    icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    value: '14+',
    label: 'Years of Experience',
    detail: 'Industry expertise',
    delay: 'reveal-delay-2',
  },
  {
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    value: '99%',
    label: 'Client Retention',
    detail: 'Long-term partnerships',
    delay: 'reveal-delay-3',
  },
]

const whyCards = [
  {
    icon: <path d="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: 'Experience meets innovation',
    text: 'Shribi combines experienced leadership with young engineering talent from GLA University, enabling us to deliver modern solutions with agility and efficiency.',
    delay: '',
  },
  {
    icon: (
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: 'Cost-effective development',
    text: 'Our development model allows businesses to access high-quality software engineering services at competitive pricing.',
    delay: 'reveal-delay',
  },
  {
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    title: 'Customer-centric approach',
    text: 'We work closely with clients to understand business requirements and build solutions tailored to their unique needs.',
    delay: 'reveal-delay-2',
  },
]

const expertiseItems = [
  {
    icon: <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 4l-4 16" />,
    label: 'Enterprise software development',
  },
  {
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </>
    ),
    label: 'Product engineering',
  },
  {
    icon: (
      <>
        <path d="M4 7v10M20 7v10M7 7h10v10H7z" />
        <path d="M10 10h4v4h-4z" />
      </>
    ),
    label: 'Software architecture',
  },
  {
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14" />,
    label: 'CRM & ERP systems',
  },
  {
    icon: <path d="M7 18a4 4 0 01-.88-7.9A5 5 0 0117.5 8.5 4.5 4.5 0 0119 17H7z" />,
    label: 'Cloud-based applications',
  },
  {
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    label: 'Team leadership & delivery management',
  },
]

export default function AboutPageContent() {
  return (
    <>
      <section className="about-hero about-hero--banner" id="about-hero">
        <div className="about-hero-banner-bg" aria-hidden="true" />
        <div className="container about-hero-grid">
          <div className="about-hero-content reveal">
            <p className="eyebrow">About Shribi Technologies</p>
            <h1>
              Innovative software for <span className="gradient-text">growing businesses</span>
            </h1>
            <div className="about-hero-accent" aria-hidden="true" />
            <p className="about-hero-lead">
              Shribi Technologies is a software development company focused on delivering innovative,
              scalable, and cost-effective digital solutions for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="section section-light about-kpi-section">
        <div className="container">
          <div className="about-kpi-grid">
            {kpiCards.map((card) => (
              <article key={card.label} className={`about-kpi-card reveal ${card.delay}`.trim()}>
                <div className="about-kpi-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {card.icon}
                  </svg>
                </div>
                <div>
                  <strong>{card.value}</strong>
                  <span>{card.label}</span>
                  <small>{card.detail}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section section-muted">
        <div className="container">
          <div className="about-vm-grid">
            <article className="about-vm-card reveal">
              <div className="about-vm-icon about-vm-icon--vision" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="section-tag">Our Vision</span>
              <h2>Trusted technology partner worldwide</h2>
              <p>
                To become a trusted technology partner for businesses worldwide by delivering innovative
                software solutions that drive digital transformation and sustainable growth.
              </p>
            </article>
            <article className="about-vm-card reveal reveal-delay">
              <div className="about-vm-icon about-vm-icon--mission" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </div>
              <span className="section-tag section-tag--green">Our Mission</span>
              <h2>Empowering organizations with reliable software</h2>
              <p>
                To empower organizations with reliable, scalable, and affordable software solutions that
                streamline operations, enhance customer experiences, and create measurable business value.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Why Choose Shribi</span>
            <h2>Experience meets innovation</h2>
          </div>
          <div className="about-why-grid">
            {whyCards.map((card) => (
              <article key={card.title} className={`about-why-card reveal ${card.delay}`.trim()}>
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
          <article className="about-why-wide reveal">
            <div className="card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 100 3m0-3a1.5 1.5 0 110 3m6-3v6a1.5 1.5 0 01-3 0v-6m3 0a1.5 1.5 0 100-3m0 3a1.5 1.5 0 110-3" />
              </svg>
            </div>
            <div>
              <h3>Long-term partnership</h3>
              <p>
                We focus on building long-term relationships by providing continuous support, enhancements,
                and technology guidance.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container about-founder-grid">
          <figure className="about-founder-photo reveal">
            <Image
              src={founderImagePath}
              alt="Shivram Chhonkar, Founder of Shribi Technologies"
              width={480}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="about-founder-content reveal reveal-delay">
            <span className="section-tag">Founder & Leadership</span>
            <h2>Shivram Chhonkar</h2>
            <p className="about-founder-role">Founder, Shribi Technologies</p>
            <p>
              Shribi Technologies is led by Shivram Chhonkar, a software professional with more than 14
              years of experience in enterprise application development, product engineering, and digital
              transformation initiatives.
            </p>
            <p>
              Throughout his career, Shivram has contributed to the development and delivery of software
              solutions for global organizations, including multinational companies such as R Systems
              International and Fareportal.
            </p>
            <p>
              With a strong background in building scalable technology platforms and managing software
              delivery teams, Shivram brings strategic direction, technical excellence, and a
              customer-focused approach to Shribi Technologies.
            </p>
          </div>
          <aside className="about-expertise-card reveal reveal-delay-2">
            <span className="section-tag">Areas of Expertise</span>
            <ul className="about-expertise-list">
              {expertiseItems.map((item) => (
                <li key={item.label}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                  {item.label}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-dark about-commitment">
        <div className="container">
          <div className="about-commitment-box reveal">
            <div className="about-commitment-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div className="about-commitment-text">
              <span className="section-tag">Our Commitment</span>
              <h2>Technology that creates lasting value</h2>
              <p>
                At Shribi, we are committed to delivering reliable, scalable, and business-focused software
                solutions that create lasting value for our clients. We believe technology should simplify
                operations, improve productivity, and enable sustainable growth.
              </p>
            </div>
            <Link href="/contact/" className="btn btn-primary">Get in touch →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
