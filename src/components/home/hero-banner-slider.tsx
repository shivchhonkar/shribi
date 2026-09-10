'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const HERO_SLIDES = [
  '/assets/bannerImages/slider/hero-banner1.png',
  '/assets/bannerImages/slider/hero-banner2.png',
]

const INTERVAL_MS = 9000

export default function HeroBannerSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || HERO_SLIDES.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_SLIDES.length)
    }, INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <div
      className="hero-banner-bg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {HERO_SLIDES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={1920}
          height={800}
          priority={index === 0}
          className={index === active ? 'is-active' : undefined}
        />
      ))}
      <div className="hero-banner-dots">
        {HERO_SLIDES.map((src, index) => (
          <button
            key={src}
            type="button"
            className={index === active ? 'is-active' : undefined}
            aria-label={`Show banner ${index + 1}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  )
}
