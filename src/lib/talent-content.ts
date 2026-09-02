export const TALENT_PATH = '/shribi-talent/'

export const talentPage = {
  navLabel: 'Shribi Talent',
  title: 'Shribi Talent – Hire Skilled React & Next.js Developers from India',
  description:
    'Shribi Talent helps companies hire skilled and technically assessed software developers for remote roles, dedicated teams, and contract staffing. Access talent from the GLA University ecosystem in Mathura, backed by Shribi Technologies.',
  keywords: [
    'hire React developers India',
    'hire Next.js developers',
    'dedicated development team India',
    'remote staffing Mathura',
    'GLA University talent',
    'Shribi Talent',
  ],
  eyebrow: 'Shribi Talent',
  h1: 'Hire Skilled',
  h1Highlight: 'React & Next.js Developers',
  h1Suffix: 'from India',
  lead: 'Shribi Talent helps companies hire skilled and technically assessed software developers for remote roles, dedicated teams, and contract staffing.',
  leadSecondary:
    'Access talent from the GLA University ecosystem in Mathura, Uttar Pradesh, backed by experienced engineering leadership from Shribi Technologies Pvt. Ltd.',
}

export const talentHeroActions = [
  { href: '#available-developers', label: 'View Available Developers', variant: 'primary' as const },
  { href: '/contact/?subject=Request developer profiles', label: 'Request Developer Profiles', variant: 'ghost' as const },
]

export function talentProfileRequestHref(role: string, experience: string) {
  const params = new URLSearchParams({
    subject: `Request profile: ${role}`,
    message: `I would like the full profile for a ${role} (${experience}). Please share CV, availability, and engagement options.`,
  })
  return `/contact/?${params.toString()}`
}

export const talentDevelopers = [
  {
    id: 'react-next-1-2',
    role: 'React / Next.js Developer',
    experience: '1–2 Years',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    availability: 'Available',
    availabilityTone: 'now' as const,
    engagement: 'Full-Time / Remote / Contract',
  },
  {
    id: 'senior-react-3-5',
    role: 'Senior React Developer',
    experience: '3–5 Years',
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Node.js'],
    availability: 'Available in 2 Weeks',
    availabilityTone: 'soon' as const,
    engagement: 'Full-Time / Remote / Contract',
  },
  {
    id: 'nodejs-2',
    role: 'Node.js Developer',
    experience: '2+ Years',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'Prisma'],
    availability: 'Available',
    availabilityTone: 'now' as const,
    engagement: 'Full-Time / Remote / Contract',
  },
  {
    id: 'fullstack-js-2-3',
    role: 'Full-Stack JavaScript Developer',
    experience: '2–3 Years',
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB'],
    availability: 'Available',
    availabilityTone: 'now' as const,
    engagement: 'Full-Time / Remote / Contract',
  },
  {
    id: 'next-frontend-1-3',
    role: 'Next.js Frontend Developer',
    experience: '1–3 Years',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO'],
    availability: 'Available in 2 Weeks',
    availabilityTone: 'soon' as const,
    engagement: 'Full-Time / Remote / Contract',
  },
  {
    id: 'react-ts-2-4',
    role: 'React & TypeScript Developer',
    experience: '2–4 Years',
    skills: ['React', 'TypeScript', 'Next.js', 'REST APIs', 'Git'],
    availability: 'Available',
    availabilityTone: 'now' as const,
    engagement: 'Full-Time / Remote / Dedicated Team',
  },
  {
    id: 'backend-node-3',
    role: 'Backend Node.js Developer',
    experience: '3+ Years',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'AWS'],
    availability: 'Available in 30 Days',
    availabilityTone: 'later' as const,
    engagement: 'Full-Time / Remote / Contract',
  },
  {
    id: 'ui-react-1-2',
    role: 'React UI Developer',
    experience: '1–2 Years',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Figma'],
    availability: 'Available',
    availabilityTone: 'now' as const,
    engagement: 'Full-Time / Remote / Contract',
  },
]

export const talentModels = [
  {
    title: 'Dedicated teams',
    text: 'A full-time pod that works only on your product — engineers, a lead, and a clear delivery rhythm you can scale up or down.',
    points: ['Exclusive to your roadmap', 'Weekly reporting', 'Scale seats as you grow'],
  },
  {
    title: 'Remote staffing',
    text: 'Add carefully selected developers to your existing squad. They join your tools, standups, and codebase as an extension of your team.',
    points: ['React, Next.js, Node.js', 'Your timezone overlap', 'Replace or extend quickly'],
  },
  {
    title: 'Project-based development',
    text: 'Need a release, a rebuild, or a time-boxed sprint? We staff a team for the outcome, then hand over cleanly when the work is done.',
    points: ['Fixed scope or retainers', 'Shribi engineering oversight', 'Documented handover'],
  },
]

export const talentSkills = [
  {
    name: 'React',
    text: 'Component-driven UIs, design systems, and production-grade frontends.',
  },
  {
    name: 'Next.js',
    text: 'App Router, SSR, and high-performance marketing and product sites.',
  },
  {
    name: 'Node.js',
    text: 'APIs, integrations, and backend services that stay maintainable.',
  },
  {
    name: 'Software engineering',
    text: 'Architecture, testing, DevOps basics, and delivery discipline.',
  },
]

export const talentWhy = [
  {
    title: 'Industry-trained talent',
    text: 'Candidates are screened for real project work — not just course certificates — before they ever meet your team.',
  },
  {
    title: 'Engineering leadership',
    text: "Shribi's delivery leads stay involved so your dedicated team has architecture, code review, and accountability.",
  },
  {
    title: "India's talent ecosystem",
    text: 'Work with technically assessed developers from the GLA University ecosystem in Mathura — without running your own campus hiring pipeline.',
  },
  {
    title: 'Lower cost, same standard',
    text: 'Build faster with a cost structure that stretches runway — without trading away quality or communication.',
  },
]

export const talentProcess = [
  {
    title: 'Share what you need',
    text: 'Roles, stack, seniority, timezone overlap, and whether you want a dedicated pod or extra seats on your team.',
  },
  {
    title: 'Review curated profiles',
    text: 'We shortlist developers who match the brief and send you profiles you can actually interview.',
  },
  {
    title: 'Interview and select',
    text: 'Meet the engineers, test a small assignment if you want, and choose the people you want on the team.',
  },
  {
    title: 'Start shipping',
    text: 'Onboard into your repos and rituals. We stay on the line for delivery quality and replacements if needed.',
  },
]

export const talentFaqs = [
  {
    question: 'How quickly can we hire dedicated developers?',
    answer:
      'Most teams receive a first shortlist within a few business days once the role and stack are clear. Start dates depend on interviews and notice periods, but we plan onboarding around your sprint calendar.',
  },
  {
    question: 'What is the difference between dedicated teams and remote staffing?',
    answer:
      'A dedicated team is a self-contained pod that delivers against your roadmap. Remote staffing adds individual engineers into your existing squad, tools, and standups. Both models can scale as the product grows.',
  },
  {
    question: 'Which technologies does Shribi Talent cover?',
    answer:
      'We focus on React, Next.js, Node.js, and broader software engineering — APIs, integrations, testing, and delivery. If you need adjacent skills, tell us in the brief and we will confirm fit before we share profiles.',
  },
  {
    question: 'Who manages the developers day to day?',
    answer:
      'You own the product direction. Shribi provides engineering leadership, quality checks, and a single point of contact so the team stays aligned and accountable.',
  },
  {
    question: 'Can we see every developer in your pool?',
    answer:
      'No. The page shows a small, curated set of currently available roles. Full CVs, names, and additional matches are shared privately after you request a profile, so we do not publish an open directory of students or staff.',
  },
]
