'use client'

import { useMemo, useState, type ReactNode } from 'react'
import Link from 'next/link'

import { workshopSubjects, type WorkshopSubject } from '@/lib/workshop-content'

const icons: Record<WorkshopSubject['icon'], ReactNode> = {
  web: (
    <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 4l-4 16" />
  ),
  dsa: (
    <>
      <path d="M4 6h16M4 12h16M4 18h10" />
      <path d="M16 16l2 2 4-4" />
    </>
  ),
  node: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12v9" />
    </>
  ),
  interview: (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  ),
  ml: (
    <>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" />
    </>
  ),
  hackathon: (
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
  ),
}

function SubjectIcon({ name }: { name: WorkshopSubject['icon'] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default function WorkshopTracks() {
  const [activeId, setActiveId] = useState(workshopSubjects[0].id)
  const active = useMemo(
    () => workshopSubjects.find((subject) => subject.id === activeId) ?? workshopSubjects[0],
    [activeId],
  )
  const core = workshopSubjects.filter((subject) => subject.group === 'core')
  const campus = workshopSubjects.filter((subject) => subject.group === 'campus')

  return (
    <div className="workshop-tracks reveal">
      <div className="workshop-tracks__nav" role="tablist" aria-label="Workshop subjects">
        <p className="workshop-tracks__nav-label">Subjects</p>
        {core.map((subject) => (
          <button
            key={subject.id}
            type="button"
            role="tab"
            id={`track-tab-${subject.id}`}
            aria-selected={subject.id === active.id}
            aria-controls={`track-panel-${subject.id}`}
            className={`workshop-tracks__tab${subject.id === active.id ? ' is-active' : ''}`}
            onClick={() => setActiveId(subject.id)}
          >
            <span className="workshop-tracks__tab-icon">
              <SubjectIcon name={subject.icon} />
            </span>
            {subject.label}
          </button>
        ))}
        <p className="workshop-tracks__nav-label">Campus programmes</p>
        {campus.map((subject) => (
          <button
            key={subject.id}
            type="button"
            role="tab"
            id={`track-tab-${subject.id}`}
            aria-selected={subject.id === active.id}
            aria-controls={`track-panel-${subject.id}`}
            className={`workshop-tracks__tab workshop-tracks__tab--campus${subject.id === active.id ? ' is-active' : ''}`}
            onClick={() => setActiveId(subject.id)}
          >
            <span className="workshop-tracks__tab-icon">
              <SubjectIcon name={subject.icon} />
            </span>
            {subject.label}
          </button>
        ))}
      </div>

      <div
        className="workshop-tracks__panel"
        role="tabpanel"
        id={`track-panel-${active.id}`}
        aria-labelledby={`track-tab-${active.id}`}
      >
        <div className="workshop-tracks__panel-head">
          <span className="workshop-tracks__panel-icon">
            <SubjectIcon name={active.icon} />
          </span>
          <div>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <p className="workshop-tracks__note">{active.note}</p>
          </div>
        </div>
        <div className="workshop-tracks__courses">
          {active.courses.map((course) => (
            <article key={course.title} className="workshop-tracks__course">
              <h4>{course.title}</h4>
              <p>{course.summary}</p>
              <ul>
                {course.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link href={`/workshop/${course.slug}/`} className="workshop-tracks__course-link">
                View workshop details
              </Link>
            </article>
          ))}
        </div>
        <div className="workshop-tracks__footer">
          <p>Not sure which track to book?</p>
          <div className="workshop-tracks__footer-actions">
            <Link href="/contact/?subject=Book a college workshop" className="workshop-tracks__footer-btn">
              Book a campus workshop
            </Link>
            <Link href="/contact/?subject=College workshop enquiry" className="workshop-tracks__footer-btn">
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
