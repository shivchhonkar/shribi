'use client'

import type { ReactNode } from 'react'

import { useScrollReplayProgress } from '@/components/home/use-scroll-replay-progress'

type HeroStat = {
  value: number
  suffix: string
  label: string
  icon: ReactNode
}

const heroStats: HeroStat[] = [
  {
    value: 50,
    suffix: '+',
    label: 'Happy clients',
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  {
    value: 150,
    suffix: '+',
    label: 'Projects delivered',
    icon: (
      <>
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </>
    ),
  },
  {
    value: 95,
    suffix: '%',
    label: 'Client retention',
    icon: (
      <>
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </>
    ),
  },
  {
    value: 98,
    suffix: '%',
    label: 'On-time delivery',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
]

export default function HeroStatsBar() {
  const { ref, progress } = useScrollReplayProgress()

  return (
    <div ref={ref} className="hero-stats-bar">
      {heroStats.map((stat) => (
        <div key={stat.label} className="hero-stat-item">
          <div className="hero-stat-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {stat.icon}
            </svg>
          </div>
          <div className="hero-stat-copy">
            <strong>
              {Math.round(progress * stat.value)}
              {stat.suffix}
            </strong>
            <span>{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
