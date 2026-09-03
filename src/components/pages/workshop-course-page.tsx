import Link from 'next/link'
import Image from 'next/image'

import ContactForm from '@/components/forms/contact-form'
import {
  getRelatedWorkshopCourses,
  workshopCoursePath,
  workshopMentors,
  type WorkshopCourseDetail,
} from '@/lib/workshop-course-content'
import { WORKSHOP_PATH } from '@/lib/workshop-content'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, SITE_NAME, SITE_URL } from '@/lib/site'

const jumpLinks = [
  { href: '#overview', label: 'Overview' },
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#mentors', label: 'Mentors' },
  { href: '#enquire', label: 'Enquire' },
  { href: '#faq', label: 'FAQ' },
]

export default function WorkshopCoursePageContent({ course }: { course: WorkshopCourseDetail }) {
  const related = getRelatedWorkshopCourses(course.slug)
  const pageUrl = `${SITE_URL}${workshopCoursePath(course.slug)}`
  const bookHref = `/contact/?subject=${encodeURIComponent(`Book campus workshop: ${course.title}`)}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: course.title,
        description: course.description,
        url: pageUrl,
        provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        educationalLevel: 'Undergraduate',
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'College Workshops', item: `${SITE_URL}${WORKSHOP_PATH}` },
          { '@type': 'ListItem', position: 3, name: course.title, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: course.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <div className="workshop-course">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="workshop-course-hero" id="overview">
        <div className="container workshop-course-hero__grid">
          <div className="workshop-course-hero__copy reveal">
            <nav className="landing-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href={WORKSHOP_PATH}>College Workshops</Link>
                </li>
                <li aria-current="page">{course.highlight}</li>
              </ol>
            </nav>
            <p className="eyebrow">{course.eyebrow}</p>
            <h1>{course.title}</h1>
            <p className="workshop-course-hero__lead">{course.lead}</p>
            <p className="workshop-course-hero__meta">
              {course.duration} · {course.audience}
            </p>
            <div className="services-hero-actions">
              <Link href={bookHref} className="btn btn-primary">
                Book this workshop for your college
              </Link>
              <a href="#enquire" className="btn btn-ghost">
                Request a callback
              </a>
            </div>
          </div>

          <aside className="workshop-course-card reveal">
            <div className="workshop-course-card__visual">
              <Image
                src="/assets/shribi-college-traning.png"
                alt=""
                width={640}
                height={360}
              />
              <p>On-campus labs · live Shribi mentors</p>
            </div>
            <div className="workshop-course-card__body">
              <p className="workshop-course-card__kicker">What the college gets</p>
              <ul>
                {course.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <Link href={bookHref} className="btn btn-primary btn-full">
                Enquire to host this batch
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <nav className="workshop-course-jump" aria-label="On this page">
        <div className="container workshop-course-jump__row">
          {jumpLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="section section-muted" id="learn">
        <div className="container workshop-course-split">
          <div className="reveal">
            <span className="section-tag">What students will learn</span>
            <h2>Outcomes for this campus batch</h2>
            <ul className="workshop-course-list">
              {course.learn.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="workshop-course-stats reveal">
            {course.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services-dark" id="highlights">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Highlights</span>
            <h2>Built for college labs, not an online store</h2>
          </div>
          <div className="workshop-course-features">
            {course.features.map((feature) => (
              <article key={feature.title} className="workshop-course-feature reveal">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="projects">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Labs & projects</span>
            <h2>What the batch will build</h2>
            <p>Students work in your labs. These are the artefacts they leave with.</p>
          </div>
          <div className="workshop-course-projects">
            {course.projects.map((project) => (
              <article key={project.title} className="workshop-course-project reveal">
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="variants">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">How you can host it</span>
            <h2>Choose a campus format</h2>
            <p>No individual checkout. The college books the batch and we deliver on site.</p>
          </div>
          <div className="workshop-course-variants">
            {course.variants.map((variant) => (
              <article key={variant.name} className="workshop-course-variant reveal">
                <h3>{variant.name}</h3>
                <p className="workshop-course-variant__duration">{variant.duration}</p>
                <ul>
                  {variant.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link href={bookHref} className="btn btn-primary">
                  Book this format
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services-dark" id="curriculum">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Curriculum</span>
            <h2>How the campus days are structured</h2>
          </div>
          <ol className="workshop-course-curriculum">
            {course.curriculum.map((module, index) => (
              <li key={module.title} className="reveal">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{module.title}</h3>
                  <p>{module.items.join(' · ')}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-muted" id="mentors">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Mentors</span>
            <h2>Know the engineers who run the lab</h2>
            <p>Practising Shribi engineers — not a rented recording of someone else&apos;s course.</p>
          </div>
          <div className="workshop-course-mentors">
            {workshopMentors.map((mentor) => (
              <article key={mentor.name} className="workshop-course-mentor reveal">
                <Image src={mentor.image} alt="" width={96} height={96} />
                <div>
                  <h3>{mentor.name}</h3>
                  <p className="workshop-course-mentor__role">{mentor.role}</p>
                  <p>{mentor.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="enquire">
        <div className="container workshop-course-enquire">
          <div className="reveal">
            <span className="section-tag">Still planning the batch?</span>
            <h2>Get a call back for your college</h2>
            <p>
              Tell us the campus, student year, lab size, and preferred dates. We will propose a
              schedule for {course.title}.
            </p>
            <p className="workshop-course-enquire__contact">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE}</a>
            </p>
          </div>
          <ContactForm
            stacked
            showPhone
            showSubject={false}
            submitLabel="Request a callback"
            defaultSubject={`Book campus workshop: ${course.title}`}
            defaultMessage={`We would like to host "${course.title}" on our campus. Please call us back with available dates.`}
          />
        </div>
      </section>

      {related.length ? (
        <section className="section section-muted" id="related">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">Related campus workshops</span>
              <h2>Other batches in this subject</h2>
            </div>
            <div className="landing-related reveal">
              <ul>
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={workshopCoursePath(item.slug)}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-light" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">FAQ</span>
            <h2>Questions colleges ask before they book</h2>
          </div>
          <div className="workshop-course-faq">
            {course.faqs.map((faq) => (
              <details key={faq.question} className="reveal">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
