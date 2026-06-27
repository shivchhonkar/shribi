'use client'

import { useEffect } from 'react'

type PageTheme = 'home' | 'about' | 'services' | 'contact'

export default function PageEffects({ theme }: { theme: PageTheme }) {
  useEffect(() => {
    const header = document.getElementById('header')
    const navToggle = document.getElementById('navToggle')
    const navLinks = document.getElementById('navLinks')

    const varHeader = () =>
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-h'),
        10,
      ) || 72

    const heroIds: Record<PageTheme, string | null> = {
      home: 'home',
      about: 'about-hero',
      services: 'services-hero',
      contact: 'contact-hero',
    }

    const onScroll = () => {
      if (!header) return
      const scrolled = window.scrollY > 20
      header.classList.toggle('scrolled', scrolled)

      const heroId = heroIds[theme]
      const hero = heroId ? document.getElementById(heroId) : null
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight - varHeader()
        header.classList.toggle('nav-solid', window.scrollY > heroBottom - varHeader())
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const onToggle = () => {
      if (!navLinks || !navToggle) return
      const open = navLinks.classList.toggle('open')
      navToggle.classList.toggle('open', open)
      navToggle.setAttribute('aria-expanded', String(open))
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    }

    navToggle?.addEventListener('click', onToggle)

    navLinks?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open')
        navToggle?.classList.remove('open')
        navToggle?.setAttribute('aria-expanded', 'false')
      })
    })

    const revealEls = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    revealEls.forEach((el) => revealObserver.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      navToggle?.removeEventListener('click', onToggle)
      revealObserver.disconnect()
    }
  }, [theme])

  return null
}
