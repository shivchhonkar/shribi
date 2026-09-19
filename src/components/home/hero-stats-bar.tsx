'use client'

import { useScrollReplayProgress } from '@/components/home/use-scroll-replay-progress'

type HeroStat = {
  value: number
  suffix: string
  label: string
  valueClassName?: string
  labelClassName?: string
}

const heroStats: HeroStat[] = [
  {
    value: 50,
    suffix: '+',
    label: 'Happy clients',
    valueClassName: 'gradient-text',
    labelClassName: 'gradient-text',
  },
  {
    value: 150,
    suffix: '+',
    label: 'Projects delivered',
    labelClassName: 'gradient-text',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Client retention',
    labelClassName: 'gradient-text',
  },
  {
    value: 98,
    suffix: '%',
    label: 'On-time delivery',
    labelClassName: 'gradient-text',
  },
]

export default function HeroStatsBar() {
  const { ref, progress } = useScrollReplayProgress()

  return (
    <div ref={ref} className="hero-stats-bar reveal">
      {heroStats.map((stat) => (
        <div key={stat.label} className="hero-stat-item">
          <strong className={stat.valueClassName}>
            {Math.round(progress * stat.value)}
            {stat.suffix}
          </strong>
          <span className={stat.labelClassName}>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
