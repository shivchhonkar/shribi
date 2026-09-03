import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import SiteShell from '@/components/layout/site-shell'
import WorkshopCoursePageContent from '@/components/pages/workshop-course-page'
import {
  getWorkshopCourse,
  workshopCoursePages,
  workshopCoursePath,
} from '@/lib/workshop-course-content'
import { pageMetadata } from '@/lib/site'

import '@/styles/services.css'
import '@/styles/workshop-course.css'

export function generateStaticParams() {
  return workshopCoursePages.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = getWorkshopCourse(slug)
  if (!course) {
    return pageMetadata({
      title: 'Workshop',
      description: 'Shribi campus workshop.',
      path: workshopCoursePath(slug),
    })
  }

  return pageMetadata({
    title: course.title,
    description: course.description,
    path: workshopCoursePath(course.slug),
    keywords: course.keywords,
  })
}

export default async function WorkshopCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = getWorkshopCourse(slug)
  if (!course) notFound()

  return (
    <SiteShell activePage="services" bodyClass="page-services">
      <WorkshopCoursePageContent course={course} />
    </SiteShell>
  )
}
