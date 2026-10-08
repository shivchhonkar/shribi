'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  {
    src: '/assets/thumbnails/billint-thumbnail.webp',
    alt: 'Billint dashboard on a laptop and phone',
  },
  {
    src: '/assets/thumbnails/edufy-shribi.webp',
    alt: 'Shribi Edufy school dashboard on a laptop and phone',
  },
]

const INTERVAL_MS = 6000

export default function HeroBannerSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length)
    }, INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="hero-banner-visual">
      <div className="hero-banner-stage">
        {SLIDES.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 92vw, 46vw"
            className={index === active ? 'is-active' : undefined}
            aria-hidden={index === active ? undefined : true}
          />
        ))}
      </div>
    </div>
  )
}
