export const WORKSHOP_PATH = '/shribi-workshop-in-college/'

export const workshopPage = {
  navLabel: 'College Workshops',
  title: 'Shribi Workshop in College — Industry Coding Workshops on Campus',
  description:
    'Empower your college with Shribi’s hands-on technical workshops and build a strong culture of coding and innovation. Host expert-led workshops on React, Next.js, Node.js, DSA, web development, machine learning, and more. Students gain practical experience by building real-world projects, while colleges can organize hackathons, collaborate with industry professionals, and help students develop the skills needed for successful tech careers.',
  keywords: [
    'college coding workshop',
    'React workshop for students',
    'Next.js workshop India',
    'engineering college workshop Mathura',
    'GLA University workshop',
    'Shribi workshop in college',
  ],
  h1: 'Industry workshops',
  h1Highlight: 'on your college campus',
  lead: 'Empower your college with Shribi’s hands-on technical workshops and build a strong culture of coding and innovation. Host expert-led workshops on React, Next.js, Node.js, DSA, web development, machine learning, and more.',
  leadSecondary:
    'Students gain practical experience by building real-world projects, while colleges can organize hackathons, collaborate with industry professionals, and help students develop the skills needed for successful tech careers.' //Built from our work with the GLA University ecosystem in Mathura, these sessions help students ship real projects and help placement cells connect campus talent with industry.',
}

export const workshopHeroActions = [
  {
    href: '/contact/?subject=Book a college workshop',
    label: 'Book a Campus Workshop',
    variant: 'primary' as const,
  },
  {
    href: '/contact/?subject=College workshop enquiry',
    label: 'Talk to Our Team',
    variant: 'ghost' as const,
  },
]

export type WorkshopCourse = {
  slug: string
  title: string
  summary: string
  tags: string[]
}

export type WorkshopSubject = {
  id: string
  label: string
  group: 'core' | 'campus'
  icon: 'web' | 'dsa' | 'node' | 'interview' | 'ml' | 'hackathon'
  title: string
  description: string
  note: string
  courses: WorkshopCourse[]
}

export const workshopSubjects: WorkshopSubject[] = [
  {
    id: 'web-development',
    label: 'Web Development',
    group: 'core',
    icon: 'web',
    title: 'Web Development',
    description:
      'Campus workshops on React and Next.js so students can build production-style UIs they can demo in placements.',
    note: 'Introductory batches assume basic JavaScript. Advanced batches can start from React fundamentals.',
    courses: [
      {
        slug: 'react-fundamentals-on-campus',
        title: 'React fundamentals on campus',
        summary: 'Components, state, props, and a small UI students can explain in interviews.',
        tags: ['Campus', '2-3 weeks', 'Beginner'],
      },
      {
        slug: 'nextjs-product-workshop',
        title: 'Next.js product workshop',
        summary: 'App Router, data fetching, and a deployable marketing or dashboard page.',
        tags: ['Campus', '2-3 weeks', 'Intermediate'],
      },
      {
        slug: 'frontend-project-lab',
        title: 'Frontend project lab',
        summary: 'TypeScript, Tailwind CSS, and GitHub handoff of a placement-ready demo.',
        tags: ['Campus', 'Project', '2-3 weeks'],
      },
    ],
  },
  {
    id: 'dsa',
    label: 'Data Structures & Algorithms',
    group: 'core',
    icon: 'dsa',
    title: 'Data Structures & Algorithms',
    description:
      'Problem-solving workshops that connect classroom DSA to how product teams talk about complexity, debugging, and interviews.',
    note: 'Designed for 2nd and 3rd year students. No contest background required.',
    courses: [
      {
        slug: 'data-structures-and-algorithms-using-c-plus-plus',
        title: 'DSA using C++',
        summary: 'Master data structures and algorithms in C++ with campus labs and placement-style problems.',
        tags: ['Campus', 'Live', 'C++'],
      },
      {
        slug: 'data-structures-and-algorithms-using-java',
        title: 'DSA using Java',
        summary: 'Core structures and timed practice in Java for campus placement rounds.',
        tags: ['Campus', 'Live', 'Java'],
      },
      {
        slug: 'data-structures-and-algorithms-using-python',
        title: 'DSA using Python',
        summary: 'Readable Python implementations plus a short contest-style lab.',
        tags: ['Campus', 'Live', 'Python'],
      },
    ],
  },
  {
    id: 'nodejs',
    label: 'Node.js & APIs',
    group: 'core',
    icon: 'node',
    title: 'Node.js & APIs',
    description:
      'Backend workshops on Express, REST, and databases — how APIs actually show up in real product teams.',
    note: 'Students should know basic programming. SQL or JavaScript is helpful but not required.',
    courses: [
      {
        slug: 'nodejs-api-from-scratch',
        title: 'Node.js API from scratch',
        summary: 'Express routes, validation, and a working CRUD service.',
        tags: ['Campus', '1–2 days', 'Project'],
      },
      {
        slug: 'postgresql-and-prisma-lab',
        title: 'PostgreSQL & Prisma lab',
        summary: 'Schema design, queries, and connecting the API to a real database.',
        tags: ['Campus', 'Live', '1–2 days'],
      },
      {
        slug: 'auth-and-integrations',
        title: 'Auth & integrations',
        summary: 'Sessions, JWT basics, and calling a third-party API.',
        tags: ['Campus', 'Live', '1 day'],
      },
    ],
  },
  {
    id: 'interview',
    label: 'Interview Preparation',
    group: 'core',
    icon: 'interview',
    title: 'Interview Preparation',
    description:
      'Placement-focused sessions: how to talk about projects, debug live, and answer frontend or backend rounds.',
    note: 'Best after a project workshop so students have something concrete to discuss.',
    courses: [
      {
        slug: 'project-storytelling-lab',
        title: 'Project storytelling lab',
        summary: 'Turn a GitHub repo into a 3-minute interview narrative.',
        tags: ['Campus', 'Live', '1 day'],
      },
      {
        slug: 'frontend-interview-drills',
        title: 'Frontend interview drills',
        summary: 'React questions, machine-coding, and code-review style feedback.',
        tags: ['Campus', 'Live', '1–2 days'],
      },
      {
        slug: 'mock-placement-round',
        title: 'Mock placement round',
        summary: 'Timed tasks with Shribi engineers acting as interviewers.',
        tags: ['Campus', 'Live', 'Half-day'],
      },
    ],
  },
  {
    id: 'ml',
    label: 'Data Science & ML',
    group: 'core',
    icon: 'ml',
    title: 'Data Science & ML',
    description:
      'Introductory machine-learning workshops with a small applied project — not a full degree replacement.',
    note: 'Python basics help. Absolute beginners can join an orientation batch.',
    courses: [
      {
        slug: 'python-for-data',
        title: 'Python for data',
        summary: 'Notebooks, pandas basics, and cleaning a small campus dataset.',
        tags: ['Campus', 'Beginner', '1–2 days'],
      },
      {
        slug: 'ml-starter-project',
        title: 'ML starter project',
        summary: 'Train a simple model and explain results in plain language.',
        tags: ['Campus', 'Project', '2 days'],
      },
      {
        slug: 'ai-in-product-teams',
        title: 'AI in product teams',
        summary: 'Where ML shows up in real software, APIs, and automation work.',
        tags: ['Campus', 'Live', '1 day'],
      },
    ],
  },
  {
    id: 'fullstack',
    label: 'Full-stack Sprint',
    group: 'campus',
    icon: 'web',
    title: 'Full-stack Sprint',
    description:
      'A multi-day build from UI to API so students see how a feature actually ships, with standups and a closing demo.',
    note: 'Ideal as a fest week, semester capstone, or placement bootcamp.',
    courses: [
      {
        slug: '2-day-feature-sprint',
        title: '2-day feature sprint',
        summary: 'One user flow: form, API, and a working demo.',
        tags: ['Campus', '2 days', 'Demo'],
      },
      {
        slug: '5-day-product-sprint',
        title: '5-day product sprint',
        summary: 'Team standups, code review, and a public demo day.',
        tags: ['Campus', '5 days', 'Team'],
      },
      {
        slug: 'hackathon-lab',
        title: 'Hackathon lab',
        summary: 'We mentor a campus hackathon with briefs, judging, and shipping help.',
        tags: ['Campus', 'Hackathon', 'Live'],
      },
    ],
  },
  {
    id: 'hackathon',
    label: 'Hackathons',
    group: 'campus',
    icon: 'hackathon',
    title: 'Hackathons',
    description:
      'Industry-led hackathons for colleges that want students to collaborate with professionals and ship under a deadline.',
    note: 'We can co-host with your placement cell or a sponsoring company.',
    courses: [
      {
        slug: '24-hour-campus-hackathon',
        title: '24-hour campus hackathon',
        summary: 'Problem statements, mentorship desks, and a judged demo.',
        tags: ['Campus', '24 hours', 'Live'],
      },
      {
        slug: 'weekend-build',
        title: 'Weekend build',
        summary: 'Friday kickoff, Saturday build, Sunday showcase.',
        tags: ['Campus', 'Weekend', 'Team'],
      },
      {
        slug: 'sponsored-challenge',
        title: 'Sponsored challenge',
        summary: 'A company brief with Shribi engineers as mentors.',
        tags: ['Campus', 'Sponsored', 'Demo'],
      },
    ],
  },
]

export const workshopAudience = [
  {
    name: 'Colleges & universities',
    text: 'Add an industry module to CS, IT, or MCA calendars without hiring a full in-house training team.',
  },
  {
    name: 'Training & placement cells',
    text: 'Give students a project they can talk about in interviews, plus an optional talent pipeline with Shribi.',
  },
  {
    name: 'Departments & clubs',
    text: 'HODs, coding clubs, and student chapters can host a focused sprint around a fest, semester, or hackathon.',
  },
  {
    name: 'Sponsoring companies',
    text: 'Brands that want campus visibility and a first look at workshop graduates can co-host a batch.',
  },
]

export const workshopWhy = [
  {
    title: 'Practising engineers',
    text: 'Sessions are led by people who ship software at Shribi — the same stack we use on client work.',
  },
  {
    title: 'Projects, not only slides',
    text: 'Every track ends with something students can run, explain, and put on GitHub.',
  },
  {
    title: 'Campus-ready delivery',
    text: 'We run on-site at colleges in and around Mathura, and we travel for multi-day programmes.',
  },
  {
    title: 'Path into industry',
    text: 'Strong participants can move into Shribi Talent assessments for internships or dedicated roles.',
  },
]

export const workshopProcess = [
  {
    title: 'Share the brief',
    text: 'Dates, year of study, batch size, lab setup, and whether you want React, Node.js, or a full-stack sprint.',
  },
  {
    title: 'We design the track',
    text: 'You get an outline, duration, prerequisites, and what students will build by the last session.',
  },
  {
    title: 'Deliver on campus',
    text: 'Our engineers run the workshop in your labs, with live coding, reviews, and a closing demo.',
  },
  {
    title: 'Certificates & next steps',
    text: 'Participants receive a completion note. Placement cells can request a shortlist for internships or hiring.',
  },
]

export const workshopFaqs = [
  {
    question: 'How long is a typical Shribi college workshop?',
    answer:
      'Most campuses book 1–3 days. Full-stack sprints can run up to a week. We size the track to your timetable, lab hours, and student year.',
  },
  {
    question: 'Which colleges do you work with?',
    answer:
      'We started with the GLA University ecosystem in Mathura and now run programmes for engineering colleges that want industry-led React, Next.js, and Node.js training. Tell us your campus and dates and we will confirm travel.',
  },
  {
    question: 'Do students need prior coding experience?',
    answer:
      'A basic JavaScript or programming course is enough for the introductory React track. Advanced batches can assume data structures and a little web experience. We will recommend a level after we see the student mix.',
  },
  {
    question: 'Is this a public list of students or a hiring fair?',
    answer:
      'No. The workshop is a training programme for your campus. Names and performance notes are shared with the college and, only if you opt in, with Shribi Talent for internship or hiring follow-up.',
  },
  {
    question: 'Can we combine a workshop with hiring?',
    answer:
      'Yes. Many placement cells run the workshop first, then invite Shribi Talent to review a small set of participants. Hiring stays opt-in and is never a public student directory.',
  },
]
