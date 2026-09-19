'use client'

import { useEffect, useRef, useState } from 'react'

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3
}

export function useScrollReplayProgress(durationMs = 1600) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }

    let frame = 0

    const stop = () => {
      window.cancelAnimationFrame(frame)
    }

    const play = () => {
      stop()
      setProgress(0)
      const startedAt = performance.now()

      const tick = (now: number) => {
        const next = Math.min((now - startedAt) / durationMs, 1)
        setProgress(easeOutCubic(next))
        if (next < 1) {
          frame = window.requestAnimationFrame(tick)
        }
      }

      frame = window.requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          play()
          return
        }

        stop()
        setProgress(0)
      },
      { threshold: 0.25 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      stop()
    }
  }, [durationMs])

  return { ref, progress }
}
