'use client'

import { useLayoutEffect } from 'react'

export default function BodyClass({ className }: { className: string }) {
  useLayoutEffect(() => {
    document.body.classList.add(className)
    return () => {
      document.body.classList.remove(className)
    }
  }, [className])

  return null
}
