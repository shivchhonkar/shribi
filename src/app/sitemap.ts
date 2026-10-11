import type { MetadataRoute } from 'next'

import { serviceLandingPages } from '@/lib/service-landing-content'
import { SITE_URL } from '@/lib/site'
import { workshopCoursePages, workshopCoursePath } from '@/lib/workshop-course-content'

function absoluteUrl(path: string) {
  if (path === '/') return `${SITE_URL}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized.endsWith('/') ? normalized : `${normalized}/`}`
}

const staticPages: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/about-us/', priority: 0.8 },
  { path: '/services/', priority: 0.8 },
  { path: '/school-erp/', priority: 0.9 },
  { path: '/billing-and-inventory-management-software/', priority: 0.9 },
  { path: '/shribi-talent/', priority: 0.9 },
  { path: '/shribi-workshop-in-college/', priority: 0.8 },
  { path: '/contact/', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...staticPages,
    ...serviceLandingPages.map((page) => ({ path: page.path, priority: 0.8 })),
    ...workshopCoursePages.map((course) => ({
      path: workshopCoursePath(course.slug),
      priority: course.slug.startsWith('data-structures') ? 0.7 : 0.6,
    })),
  ]

  return pages.map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency: 'monthly',
    priority: page.priority,
  }))
}
