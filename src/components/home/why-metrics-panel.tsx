'use client'

import { useScrollReplayProgress } from '@/components/home/use-scroll-replay-progress'

type PartnerMetric = {
  label: string
  value: number
  suffix: string
  bar: number
}

const partnerMetrics: PartnerMetric[] = [
  { label: 'Projects Delivered', value: 150, suffix: '+', bar: 92 },
  { label: 'Client Retention Rate', value: 95, suffix: '%', bar: 95 },
  { label: 'On-time Delivery', value: 98, suffix: '%', bar: 98 },
  { label: 'Support Availability', value: 24, suffix: '/7', bar: 100 },
]

export default function WhyMetricsPanel() {
  const { ref, progress } = useScrollReplayProgress()

  return (
    <div ref={ref} className="metrics-panel reveal reveal-delay">
      {partnerMetrics.map((metric) => (
        <div key={metric.label} className="metric-row">
          <div className="metric-row-header">
            <span>{metric.label}</span>
            <strong>
              {Math.round(progress * metric.value)}
              {metric.suffix}
            </strong>
          </div>
          <div className="metric-bar">
            <div
              className="metric-bar-fill"
              style={{ width: `${progress * metric.bar}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
