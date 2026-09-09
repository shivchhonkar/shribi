'use client'

import { useCallback, useEffect, useRef } from 'react'

export type Testimonial = {
  quote: string
  name: string
  title: string
  product: string
  initials: string
}

export default function TestimonialsSlider({ items }: { items: Testimonial[] }) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const looping = useRef(false)
  const drag = useRef<{ active: boolean; startX: number; startScroll: number }>({
    active: false,
    startX: 0,
    startScroll: 0,
  })

  const looped = [...items, ...items, ...items]
  const setWidth = items.length

  const cardStep = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return 0
    const card = viewport.querySelector<HTMLElement>('.testimonial-card')
    if (!card) return 0
    const styles = getComputedStyle(viewport.querySelector('.testimonials-track')!)
    const gap = parseFloat(styles.columnGap || styles.gap || '24') || 24
    return card.offsetWidth + gap
  }, [])

  const jumpToMiddle = useCallback(() => {
    const viewport = viewportRef.current
    const step = cardStep()
    if (!viewport || !step) return
    looping.current = true
    viewport.scrollLeft = setWidth * step
    requestAnimationFrame(() => {
      looping.current = false
    })
  }, [cardStep, setWidth])

  const normalize = useCallback(() => {
    const viewport = viewportRef.current
    const step = cardStep()
    if (!viewport || !step || looping.current) return
    const min = setWidth * step
    const max = setWidth * 2 * step
    if (viewport.scrollLeft < min - step / 2) {
      looping.current = true
      viewport.scrollLeft += setWidth * step
      looping.current = false
    } else if (viewport.scrollLeft >= max - step / 2) {
      looping.current = true
      viewport.scrollLeft -= setWidth * step
      looping.current = false
    }
  }, [cardStep, setWidth])

  useEffect(() => {
    jumpToMiddle()
    const viewport = viewportRef.current
    if (!viewport) return
    const onScroll = () => normalize()
    viewport.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', jumpToMiddle)
    return () => {
      viewport.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', jumpToMiddle)
    }
  }, [jumpToMiddle, normalize])

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return
    const viewport = viewportRef.current
    if (!viewport) return
    drag.current = { active: true, startX: e.clientX, startScroll: viewport.scrollLeft }
    viewport.setPointerCapture(e.pointerId)
    viewport.classList.add('is-dragging')
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const viewport = viewportRef.current
    if (!viewport || !drag.current.active) return
    viewport.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    const viewport = viewportRef.current
    if (!viewport) return
    drag.current.active = false
    viewport.classList.remove('is-dragging')
    try {
      viewport.releasePointerCapture(e.pointerId)
    } catch {
      /* already released */
    }
    const step = cardStep()
    if (!step) return
    const nearest = Math.round(viewport.scrollLeft / step) * step
    viewport.scrollTo({ left: nearest, behavior: 'smooth' })
  }

  return (
    <div className="testimonials-slider">
      <div
        className="testimonials-viewport"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="testimonials-track">
          {looped.map((item, i) => (
            <article
              key={`${item.name}-${item.product}-${i}`}
              className="testimonial-card"
            >
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className="testimonial-quote">{item.quote}</p>
              <div className="testimonial-person">
                <div className="testimonial-avatar" aria-hidden="true">
                  {item.initials}
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.title}</span>
                  {/* <em>{item.product}</em> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
