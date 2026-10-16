'use client'

import { useLayoutEffect } from 'react'

export default function BodyClass({ className }: { className: string }) {
  useLayoutEffect(() => {
    const classes = className.split(/\s+/).filter(Boolean)
    document.body.classList.add(...classes)
    return () => {
      document.body.classList.remove(...classes)
    }
  }, [className])

  return null
}
