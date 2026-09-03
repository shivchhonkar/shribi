export const WORKSHOP_COURSE_BASE = '/workshop/'

export type WorkshopCourseDetail = {
  slug: string
  subjectId: string
  language?: string
  title: string
  highlight: string
  eyebrow: string
  description: string
  keywords: string[]
  lead: string
  audience: string
  duration: string
  perks: string[]
  learn: string[]
  features: { title: string; text: string }[]
  projects: { title: string; text: string }[]
  variants: { name: string; duration: string; points: string[] }[]
  stats: { value: string; label: string }[]
  curriculum: { title: string; items: string[] }[]
  faqs: { question: string; answer: string }[]
}

export const workshopMentors = [
  {
    name: 'Hemant Sharma',
    role: 'Software Engineer, Shribi Technologies',
    bio: 'Builds production software at Shribi and runs campus labs so students practise the same problem-solving we use on client work.',
    image: '/assets/hemant.jpeg',
  },
  {
    name: 'Gaurav Singh',
    role: 'Sr. Software Engineer, Shribi Technologies',
    bio: 'Architects applications and coaches student batches on structure, debugging, and how interviews actually run.',
    image: '/assets/no-image.png',
  },
  {
    name: 'Krishna',
    role: 'Sr. Software Engineer, Shribi Technologies',
    bio: 'Focuses on system design and backend thinking — useful when DSA has to connect to real APIs and products.',
    image: '/assets/no-image.png',
  },
]

const campusPerks = [
  'Delivered in your college labs',
  'Live mentoring by Shribi engineers',
  'Certificate of completion for the batch',
  'Optional pathway into Shribi Talent',
]

const campusFaqs = (title: string): WorkshopCourseDetail['faqs'] => [
  {
    question: 'Is this an online course we buy individually?',
    answer:
      'No. This is an on-campus workshop that Shribi runs at your college. Placement cells, HODs, or clubs book a batch. Students do not purchase a seat online.',
  },
  {
    question: 'Where is the training held?',
    answer:
      'In your campus computer labs. We travel to colleges; we started with the GLA University ecosystem in Mathura and run programmes for other engineering campuses on request.',
  },
  {
    question: `Do students get a certificate after ${title}?`,
    answer:
      'Yes. Participants who complete the labs receive a Shribi workshop completion note. It is not a substitute for a degree — it records the project and problem work they did on campus.',
  },
  {
    question: 'What should the college provide?',
    answer:
      'A lab with machines, a projector or screen, and a student list. We bring the curriculum, problem sheets, mentors, and the closing demo format.',
  },
  {
    question: 'Can this connect to internships or hiring?',
    answer:
      'If the college opts in, strong participants can be reviewed privately through Shribi Talent. We do not publish a public directory of students.',
  },
]

function dsaCourse(input: {
  slug: string
  language: string
  highlight: string
}): WorkshopCourseDetail {
  const { slug, language, highlight } = input
  const title = `Master Data Structures and Algorithms using ${language}`

  return {
    slug,
    subjectId: 'dsa',
    language,
    title,
    highlight,
    eyebrow: 'Campus workshop',
    description: `On-campus Data Structures and Algorithms workshop using ${language}. Shribi engineers train college students in labs with live problem-solving, projects, and placement-style practice — not an online buy-now course.`,
    keywords: [
      `DSA using ${language}`,
      `data structures and algorithms ${language} workshop`,
      'college DSA workshop',
      'campus coding workshop India',
    ],
    lead: `A campus lab workshop where students implement core data structures and algorithms in ${language}, then solve placement-style problems with live mentoring from Shribi engineers.`,
    audience: '2nd and 3rd year CS / IT / MCA students. Basic programming in any language is enough; we start with a short language warmup.',
    duration: '2 or 3 campus weeks',
    perks: campusPerks,
    learn: [
      `Write clean ${language} for arrays, hashing, recursion, lists, stacks, queues, trees, and graphs`,
      'Explain time and space complexity the way interviewers expect',
      'Debug on a whiteboard and in a lab, not only from slides',
      'Complete a small project they can show in placements',
      'Sit a timed problem set that feels like a campus drive round',
    ],
    features: [
      {
        title: 'Live mentorship on campus',
        text: 'Shribi engineers walk the aisles, review code, and run stand-up style labs in your college.',
      },
      {
        title: 'Problem sheets, not only lectures',
        text: 'Each module has practice problems. Students code in the lab while mentors unstick them.',
      },
      {
        title: 'Placement-shaped practice',
        text: 'Timed sets and “explain your approach” rounds, without pretending this is an off-campus bootcamp.',
      },
      {
        title: 'Projects you can demo',
        text: `Every batch ships a small ${language} project they can talk about in interviews.`,
      },
    ],
    projects: [
      { title: 'Sudoku solver', text: `Backtracking in ${language} with a clear explanation of pruning.` },
      { title: 'LRU cache', text: 'Hash map + linked list — a favourite placement question, implemented fully.' },
      { title: 'Graph navigator', text: 'BFS / DFS on a campus-map style graph with a short write-up.' },
      { title: 'Sorting visualiser', text: 'Compare a few algorithms and discuss when each is the wrong choice.' },
      { title: 'Expression evaluator', text: 'Stacks for infix / postfix — useful for compiler and interview talk.' },
      { title: 'Mini contest set', text: 'A timed sheet students finish in lab hours, then review as a group.' },
    ],
    variants: [
      {
        name: '2-day campus lab',
        duration: '2 days',
        points: ['Language warmup', 'Core structures', 'One project', 'Closing problem set'],
      },
      {
        name: '3-day placement intensive',
        duration: '3 days',
        points: ['Full curriculum', 'Two projects', 'Mock interview drill', 'Talent opt-in review'],
      },
    ],
    stats: [
      { value: '40+', label: 'Practice problems' },
      { value: '16–24', label: 'Lab hours' },
      { value: '2–3', label: 'Campus days' },
      { value: 'Live', label: 'Shribi mentors' },
    ],
    curriculum: [
      { title: `${language} warmup`, items: ['Syntax refresh', 'STL / collections you will actually use', 'How we review code in lab'] },
      { title: 'Arrays & hashing', items: ['Two pointers', 'Prefix patterns', 'Maps and sets'] },
      { title: 'Recursion & backtracking', items: ['Call stack mental model', 'Subsets and permutations', 'Sudoku-style search'] },
      { title: 'Lists, stacks, queues', items: ['Pointers vs indices', 'LRU sketch', 'Expression parsing'] },
      { title: 'Trees & graphs', items: ['BST vs heap talk', 'BFS / DFS', 'When graphs show up in product work'] },
      { title: 'Timed lab', items: ['Placement-style set', 'Explain your approach', 'Group review'] },
    ],
    faqs: campusFaqs(`the ${language} DSA workshop`),
  }
}

const otherCourses: WorkshopCourseDetail[] = [
  {
    slug: 'react-fundamentals-on-campus',
    subjectId: 'web-development',
    title: 'React fundamentals on campus',
    highlight: 'React',
    eyebrow: 'Campus workshop',
    description:
      'On-campus React workshop for engineering colleges. Students build components and a small UI they can explain in placements, mentored by Shribi engineers in your labs.',
    keywords: ['React workshop college', 'campus React training', 'Shribi React workshop'],
    lead: 'A beginner-friendly React lab: components, state, props, and a UI students can demo — delivered in your college, not as an online purchase.',
    audience: 'Students with basic JavaScript. Absolute beginners can join if the college books an extra warmup hour.',
    duration: '1–2 campus weeks',
    perks: campusPerks,
    learn: [
      'Component thinking, props, and state',
      'Lists, forms, and simple data flow',
      'How to explain a React UI in an interview',
      'GitHub handoff of the lab project',
    ],
    features: [
      { title: 'Live coding in lab', text: 'Mentors build with the batch, then students recreate and extend.' },
      { title: 'Interview language', text: 'We practise saying what a component does in one minute.' },
      { title: 'Campus delivery', text: 'Your labs, your timetable, our curriculum.' },
      { title: 'Project first', text: 'A small app beats a slide deck at placements.' },
    ],
    projects: [
      { title: 'Campus club site', text: 'Sections, cards, and a simple filter.' },
      { title: 'Task board', text: 'State, lists, and adding items.' },
      { title: 'Profile card set', text: 'Reusable components from one data list.' },
    ],
    variants: [
      { name: '1-day intro', duration: '1 day', points: ['Components', 'State', 'Mini UI'] },
      { name: '2-day lab', duration: '2 days', points: ['Forms', 'GitHub', 'Interview drill'] },
    ],
    stats: [
      { value: '1–2', label: 'Campus weeks' },
      { value: '8–16', label: 'Lab hours' },
      { value: '1', label: 'Demo project' },
      { value: 'Live', label: 'Mentors' },
    ],
    curriculum: [
      { title: 'React mental model', items: ['Why components', 'JSX', 'Props vs state'] },
      { title: 'Building UI', items: ['Lists', 'Conditional UI', 'Events'] },
      { title: 'Lab project', items: ['Build', 'Review', 'Push to GitHub'] },
    ],
    faqs: campusFaqs('the React fundamentals workshop'),
  },
  {
    slug: 'nextjs-product-workshop',
    subjectId: 'web-development',
    title: 'Next.js product workshop',
    highlight: 'Next.js',
    eyebrow: 'Campus workshop',
    description:
      'Campus Next.js workshop covering App Router and a deployable page. Taught in college labs by Shribi product engineers.',
    keywords: ['Next.js workshop college', 'App Router campus training'],
    lead: 'Students build a small Next.js site the way product teams ship pages — routing, data fetching, and a demo they can host.',
    audience: 'Students who know basic React or have done our React fundamentals batch.',
    duration: '1–3 campus weeks',
    perks: campusPerks,
    learn: [
      'App Router file structure',
      'Server vs client components at a practical level',
      'Fetching data for a real page',
      'Shipping a demo the college can open in a browser',
    ],
    features: [
      { title: 'Product-shaped', text: 'We treat the lab like a small marketing or dashboard page, not a toy counter.' },
      { title: 'Live mentors', text: 'Shribi engineers who ship Next.js on client work.' },
      { title: 'Campus labs', text: 'No recorded bootcamp. The batch is in your college.' },
      { title: 'Handoff', text: 'Repo + how to run it after we leave.' },
    ],
    projects: [
      { title: 'Department landing page', text: 'Routes, layout, and content sections.' },
      { title: 'Simple dashboard', text: 'Fetched data on a page students can explain.' },
      { title: 'Deploy checklist', text: 'What “it works on my machine” means for a Next app.' },
    ],
    variants: [
      { name: '1-day overview', duration: '1 day', points: ['Routing', 'One page', 'Demo'] },
      { name: '3-day product lab', duration: '3 days', points: ['Data fetching', 'Polish', 'Interview talk'] },
    ],
    stats: [
      { value: '1–3', label: 'Campus weeks' },
      { value: '8–24', label: 'Lab hours' },
      { value: '1', label: 'Shippable demo' },
      { value: 'Live', label: 'Mentors' },
    ],
    curriculum: [
      { title: 'Next.js map', items: ['App Router', 'Layouts', 'When to use a client component'] },
      { title: 'Data on a page', items: ['Fetch patterns', 'Loading states', 'Errors'] },
      { title: 'Ship the demo', items: ['Run locally', 'README', 'Placement story'] },
    ],
    faqs: campusFaqs('the Next.js workshop'),
  },
  {
    slug: 'frontend-project-lab',
    subjectId: 'web-development',
    title: 'Frontend project lab',
    highlight: 'TypeScript & Tailwind',
    eyebrow: 'Campus workshop',
    description:
      'Multi-day campus lab for a placement-ready frontend demo using TypeScript and Tailwind CSS, mentored on site.',
    keywords: ['frontend workshop college', 'TypeScript campus lab'],
    lead: 'Students turn React basics into a typed, styled project they can push to GitHub and walk through in interviews.',
    audience: 'Students with some React. Ideal as a follow-on to the fundamentals workshop.',
    duration: '2–3 campus weeks',
    perks: campusPerks,
    learn: [
      'TypeScript where it helps, not everywhere at once',
      'Layout with Tailwind CSS',
      'A complete demo with README',
      'How to talk about trade-offs in a UI',
    ],
    features: [
      { title: 'Project hours', text: 'Most of the time is building, with reviews in between.' },
      { title: 'GitHub standard', text: 'Commits, a README, and a running project.' },
      { title: 'Campus', text: 'Your labs; we bring the brief and mentors.' },
      { title: 'Interview close', text: 'A 3-minute demo script at the end.' },
    ],
    projects: [
      { title: 'Event listing UI', text: 'Cards, filters, and typed data.' },
      { title: 'Form + validation', text: 'A realistic campus form, not a toy input.' },
      { title: 'Responsive polish', text: 'It has to work on a phone in the demo.' },
    ],
    variants: [
      { name: '2-day sprint', duration: '2 days', points: ['Build', 'Review', 'GitHub'] },
      { name: '3-day polish', duration: '3 days', points: ['Types', 'UI pass', 'Interview demo'] },
    ],
    stats: [
      { value: '2–3', label: 'Campus weeks' },
      { value: '16–24', label: 'Lab hours' },
      { value: '1', label: 'Portfolio demo' },
      { value: 'Live', label: 'Mentors' },
    ],
    curriculum: [
      { title: 'Brief & setup', items: ['Repo', 'TypeScript', 'Tailwind'] },
      { title: 'Build', items: ['Pages', 'Components', 'State'] },
      { title: 'Ship', items: ['Review', 'README', 'Demo'] },
    ],
    faqs: campusFaqs('the frontend project lab'),
  },
  {
    slug: 'nodejs-api-from-scratch',
    subjectId: 'nodejs',
    title: 'Node.js API from scratch',
    highlight: 'Express',
    eyebrow: 'Campus workshop',
    description:
      'On-campus Node.js and Express workshop. Students build a CRUD API in college labs with Shribi backend engineers.',
    keywords: ['Node.js workshop college', 'Express campus training'],
    lead: 'From a blank folder to a working REST API — routes, validation, and how backend work shows up in product teams.',
    audience: 'Students who can write basic JavaScript or any programming language. SQL is helpful, not required.',
    duration: '1–2 campus weeks',
    perks: campusPerks,
    learn: [
      'Express routing and middleware',
      'Request validation and error shape',
      'CRUD for one resource',
      'How to explain an API in an interview',
    ],
    features: [
      { title: 'API first', text: 'Postman or a simple client — students see HTTP, not only console.log.' },
      { title: 'Live review', text: 'Mentors catch status codes and messy handlers early.' },
      { title: 'Campus labs', text: 'Delivered at your college.' },
      { title: 'Next step', text: 'Pairs well with the Prisma lab if you book two days extra.' },
    ],
    projects: [
      { title: 'Student club API', text: 'List, create, update, delete one resource.' },
      { title: 'Validation layer', text: 'Reject bad input with a clear message.' },
      { title: 'README for testers', text: 'How a teammate runs and calls the API.' },
    ],
    variants: [
      { name: '1-day core', duration: '1 day', points: ['Routes', 'CRUD', 'Demo'] },
      { name: '2-day API lab', duration: '2 days', points: ['Validation', 'Errors', 'Interview talk'] },
    ],
    stats: [
      { value: '1–2', label: 'Campus weeks' },
      { value: '8–16', label: 'Lab hours' },
      { value: '1', label: 'Working API' },
      { value: 'Live', label: 'Mentors' },
    ],
    curriculum: [
      { title: 'HTTP & Express', items: ['Verbs', 'JSON', 'Middleware'] },
      { title: 'CRUD', items: ['Routes', 'In-memory or file store', 'Status codes'] },
      { title: 'Handoff', items: ['Test the API', 'README', 'What to say in placements'] },
    ],
    faqs: campusFaqs('the Node.js API workshop'),
  },
  {
    slug: 'postgresql-and-prisma-lab',
    subjectId: 'nodejs',
    title: 'PostgreSQL & Prisma lab',
    highlight: 'PostgreSQL',
    eyebrow: 'Campus workshop',
    description:
      'Campus lab connecting a Node API to PostgreSQL with Prisma. For colleges that want students to touch a real database.',
    keywords: ['PostgreSQL workshop college', 'Prisma campus lab'],
    lead: 'Schema, queries, and wiring Prisma into an API — in your labs, with mentors who use this stack at work.',
    audience: 'Best after the Node.js API workshop, or for students who already know basic JavaScript.',
    duration: '1–2 campus weeks',
    perks: campusPerks,
    learn: [
      'Tables and relations at a practical level',
      'Prisma schema and migrate mindset',
      'Connecting routes to the database',
      'What not to put in a student demo DB',
    ],
    features: [
      { title: 'Real database', text: 'Not only arrays in memory.' },
      { title: 'Campus setup help', text: 'We plan install steps with your lab staff.' },
      { title: 'Product talk', text: 'Why teams use an ORM and when it gets in the way.' },
      { title: 'Live mentors', text: 'Shribi backend engineers on the floor.' },
    ],
    projects: [
      { title: 'Event table', text: 'Model, migrate, query.' },
      { title: 'API + DB', text: 'The Node routes persist data.' },
      { title: 'Simple report query', text: 'Count or filter students can explain.' },
    ],
    variants: [
      { name: '1-day schema lab', duration: '1 day', points: ['Schema', 'Queries', 'One route'] },
      { name: '2-day persistence', duration: '2 weeks', points: ['Relations', 'API wiring', 'Demo'] },
    ],
    stats: [
      { value: '1–2', label: 'Campus weeks' },
      { value: '8–16', label: 'Lab hours' },
      { value: '1', label: 'Persisted API' },
      { value: 'Live', label: 'Mentors' },
    ],
    curriculum: [
      { title: 'Data model', items: ['Tables', 'Keys', 'Prisma schema'] },
      { title: 'Queries', items: ['CRUD', 'Filters', 'Relations intro'] },
      { title: 'Wire-up', items: ['Express + Prisma', 'Errors', 'Demo'] },
    ],
    faqs: campusFaqs('the PostgreSQL lab'),
  },
  {
    slug: 'auth-and-integrations',
    subjectId: 'nodejs',
    title: 'Auth & integrations',
    highlight: 'Auth',
    eyebrow: 'Campus workshop',
    description:
      'Short campus workshop on sessions, JWT basics, and calling a third-party API — taught in college labs.',
    keywords: ['JWT workshop college', 'API integration campus'],
    lead: 'A focused day on how login and outbound APIs actually work, without turning it into a security degree.',
    audience: 'Students who have built a basic API or completed our Node.js workshop.',
    duration: '1 campus day',
    perks: campusPerks,
    learn: [
      'Cookie/session vs token at a high level',
      'A simple protected route',
      'Calling an external API safely in a student project',
      'What not to commit to GitHub',
    ],
    features: [
      { title: 'Practical auth', text: 'Enough to demo a locked route, not a production IdP.' },
      { title: 'Secrets hygiene', text: 'Env files and what recruiters look for in repos.' },
      { title: 'Campus', text: 'One packed lab day.' },
      { title: 'Live', text: 'Mentors catch leaked keys in reviews.' },
    ],
    projects: [
      { title: 'Protected route', text: 'Login sketch + a page that needs a token or session.' },
      { title: 'External fetch', text: 'One third-party call with error handling.' },
      { title: 'Repo cleanup', text: '.env example, no real secrets.' },
    ],
    variants: [
      { name: '1-day intensive', duration: '1 day', points: ['Auth sketch', 'Integration', 'Review'] },
    ],
    stats: [
      { value: '1', label: 'Campus day' },
      { value: '8', label: 'Lab hours' },
      { value: '2', label: 'Mini labs' },
      { value: 'Live', label: 'Mentors' },
    ],
    curriculum: [
      { title: 'Auth map', items: ['Sessions', 'JWT idea', 'Protected routes'] },
      { title: 'Integrations', items: ['HTTP client', 'Errors', 'Rate limits talk'] },
      { title: 'Safety', items: ['Secrets', 'GitHub', 'Demo'] },
    ],
    faqs: campusFaqs('the auth workshop'),
  },
  {
    slug: 'project-storytelling-lab',
    subjectId: 'interview',
    title: 'Project storytelling lab',
    highlight: 'Interviews',
    eyebrow: 'Campus workshop',
    description:
      'Campus lab that turns a student GitHub repo into a clear 3-minute interview story, coached by Shribi engineers.',
    keywords: ['placement interview workshop', 'project storytelling college'],
    lead: 'Students already have code. We teach them how to talk about it — on campus, with live feedback.',
    audience: 'Best after a project workshop so there is a real repo to use.',
    duration: '1 campus day',
    perks: campusPerks,
    learn: [
      'A 3-minute project narrative',
      'What interviewers ask after “what did you build?”',
      'How to admit gaps without collapsing',
      'A one-page project summary',
    ],
    features: [
      { title: 'Live drills', text: 'Students present; mentors interrupt like interviewers.' },
      { title: 'Campus', text: 'Your seminar hall or lab.' },
      { title: 'No fake certificates for sale', text: 'This is a coaching day for your batch.' },
      { title: 'Optional talent', text: 'Strong stories can feed a private Shribi Talent review if you opt in.' },
    ],
    projects: [
      { title: 'Story card', text: 'Problem, approach, result, what they would change.' },
      { title: 'Live demo script', text: 'What to click and what to say.' },
      { title: 'Q&A round', text: 'Practise follow-up questions.' },
    ],
    variants: [
      { name: '1-day lab', duration: '1 day', points: ['Write', 'Present', 'Feedback'] },
    ],
    stats: [
      { value: '1', label: 'Campus day' },
      { value: '8', label: 'Hours' },
      { value: 'Live', label: 'Feedback' },
      { value: '3 min', label: 'Story target' },
    ],
    curriculum: [
      { title: 'Structure', items: ['Hook', 'Trade-offs', 'Result'] },
      { title: 'Delivery', items: ['Demo', 'Voice', 'Timebox'] },
      { title: 'Pressure', items: ['Follow-ups', '“I don’t know”', 'Close'] },
    ],
    faqs: campusFaqs('the storytelling lab'),
  },
  {
    slug: 'frontend-interview-drills',
    subjectId: 'interview',
    title: 'Frontend interview drills',
    highlight: 'React interviews',
    eyebrow: 'Campus workshop',
    description:
      'Campus React interview drills: questions, machine-coding, and code review — run by Shribi engineers at your college.',
    keywords: ['React interview workshop', 'campus machine coding'],
    lead: 'Timed frontend tasks and verbal rounds in your labs, shaped like intern and campus-hire interviews.',
    audience: 'Students with React basics. Pair with the project lab if the batch is new to UI.',
    duration: '1–2 campus days',
    perks: campusPerks,
    learn: [
      'Common React interview questions in their own words',
      'A short machine-coding exercise',
      'How a code review feels',
      'What “good enough” looks like under time',
    ],
    features: [
      { title: 'Timed labs', text: 'Not unlimited homework — interview pace.' },
      { title: 'Live reviewers', text: 'Shribi engineers, not a recorded quiz.' },
      { title: 'Campus', text: 'Your machines, our briefs.' },
      { title: 'Kind but direct', text: 'Feedback they can use the next week.' },
    ],
    projects: [
      { title: 'UI in 45 minutes', text: 'A small React task with a rubric.' },
      { title: 'Explain this component', text: 'Verbal round on their own code.' },
      { title: 'Review notes', text: 'What to fix before a real drive.' },
    ],
    variants: [
      { name: '1-day drills', duration: '1 day', points: ['Questions', 'One task', 'Review'] },
      { name: '2-day intensive', duration: '2 days', points: ['Two tasks', 'Verbal', 'Feedback loop'] },
    ],
    stats: [
      { value: '1–2', label: 'Campus days' },
      { value: '8–16', label: 'Hours' },
      { value: 'Live', label: 'Review' },
      { value: 'Campus', label: 'Delivery' },
    ],
    curriculum: [
      { title: 'Question bank', items: ['Hooks', 'Rendering', 'State'] },
      { title: 'Machine coding', items: ['Brief', 'Timebox', 'Demo'] },
      { title: 'Review', items: ['Readability', 'Edge cases', 'Next practice'] },
    ],
    faqs: campusFaqs('the frontend interview drills'),
  },
  {
    slug: 'mock-placement-round',
    subjectId: 'interview',
    title: 'Mock placement round',
    highlight: 'Mock drive',
    eyebrow: 'Campus workshop',
    description:
      'Half-day or full-day mock placement at your college, with Shribi engineers as interviewers.',
    keywords: ['mock placement college', 'campus interview workshop'],
    lead: 'A compressed campus drive: timed task plus a short interview. Built for placement cells, not for selling online seats.',
    audience: 'Final-year and pre-final students who have at least one project.',
    duration: 'Half day or 1 day',
    perks: campusPerks,
    learn: [
      'How a timed round feels',
      'How to enter and leave an interview',
      'Written feedback they can act on',
      'What hiring managers actually mark',
    ],
    features: [
      { title: 'Real interviewers', text: 'Shribi engineers, not student volunteers only.' },
      { title: 'Campus logistics', text: 'We run slots with your TPO.' },
      { title: 'Private notes', text: 'Feedback to the student and, if you ask, a summary to the college — not a public list.' },
      { title: 'Optional hiring', text: 'Opt-in Shribi Talent review afterwards.' },
    ],
    projects: [
      { title: 'Timed task', text: 'DSA or small UI, depending on the batch brief.' },
      { title: '10–15 min interview', text: 'Project + one technical follow-up.' },
      { title: 'Score sheet', text: 'Shared with the student the same day when possible.' },
    ],
    variants: [
      { name: 'Half-day', duration: '4 hours', points: ['Task', 'Interview', 'Notes'] },
      { name: 'Full day', duration: '1 day', points: ['Two rounds', 'Debrief', 'TPO summary'] },
    ],
    stats: [
      { value: '0.5–1', label: 'Campus day' },
      { value: 'Live', label: 'Interviewers' },
      { value: 'Written', label: 'Feedback' },
      { value: 'Private', label: 'Results' },
    ],
    curriculum: [
      { title: 'Briefing', items: ['Rules', 'Time', 'What we mark'] },
      { title: 'Rounds', items: ['Task', 'Interview'] },
      { title: 'Debrief', items: ['Common misses', 'Practice plan'] },
    ],
    faqs: campusFaqs('the mock placement round'),
  },
  {
    slug: 'python-for-data',
    subjectId: 'ml',
    title: 'Python for data',
    highlight: 'Python',
    eyebrow: 'Campus workshop',
    description:
      'Beginner campus workshop on Python notebooks and pandas, using a small dataset in college labs.',
    keywords: ['Python data workshop college', 'pandas campus lab'],
    lead: 'Students clean a small dataset and explain what they found — on campus, with live help.',
    audience: 'Beginners welcome. A little Python helps but is not required if we add a warmup.',
    duration: '1–2 campus days',
    perks: campusPerks,
    learn: [
      'Notebooks as a working environment',
      'Loading and cleaning a table',
      'Simple charts they can talk about',
      'What “data for a product” means vs a Kaggle flex',
    ],
    features: [
      { title: 'Campus machines', text: 'We align Python install with your lab staff.' },
      { title: 'Small data', text: 'Fits a lab session; no huge downloads.' },
      { title: 'Live mentors', text: 'Unstick imports and encoding issues fast.' },
      { title: 'Honest scope', text: 'This is not a full data-science degree.' },
    ],
    projects: [
      { title: 'Clean a CSV', text: 'Missing values, types, a short summary.' },
      { title: 'Two charts', text: 'What the chart claims — and what it does not.' },
      { title: 'One-page finding', text: 'Write it so a non-coder HOD could read it.' },
    ],
    variants: [
      { name: '1-day intro', duration: '1 day', points: ['Notebook', 'Clean', 'Chart'] },
      { name: '2-day lab', duration: '2 days', points: ['More cleaning', 'Story', 'Demo'] },
    ],
    stats: [
      { value: '1–2', label: 'Campus days' },
      { value: '8–16', label: 'Hours' },
      { value: '1', label: 'Dataset' },
      { value: 'Live', label: 'Mentors' },
    ],
    curriculum: [
      { title: 'Python in a notebook', items: ['Cells', 'Packages', 'Re-run'] },
      { title: 'pandas basics', items: ['Load', 'Filter', 'Group'] },
      { title: 'Tell the story', items: ['Chart', 'Caveats', 'Demo'] },
    ],
    faqs: campusFaqs('Python for data'),
  },
  {
    slug: 'ml-starter-project',
    subjectId: 'ml',
    title: 'ML starter project',
    highlight: 'Machine learning',
    eyebrow: 'Campus workshop',
    description:
      'Two-day campus ML starter: train a simple model and explain it in plain language, in college labs.',
    keywords: ['machine learning workshop college', 'campus ML project'],
    lead: 'A first supervised model students can defend without pretending they shipped a production ML platform.',
    audience: 'Python for data workshop or equivalent. Not for absolute non-coders unless you book both days plus warmup.',
    duration: '2 campus days',
    perks: campusPerks,
    learn: [
      'Train/test split in practice',
      'A simple model and its metric',
      'Overfit in language a student can say out loud',
      'Where ML shows up in real software (and where it does not)',
    ],
    features: [
      { title: 'Project, not magic', text: 'One dataset, one model, a clear write-up.' },
      { title: 'Campus', text: 'Your labs; we bring the notebook trail.' },
      { title: 'Live', text: 'Mentors stop cargo-cult sklearn.' },
      { title: 'Interview close', text: 'Explain the metric to a non-ML engineer.' },
    ],
    projects: [
      { title: 'Baseline model', text: 'Something simple before anything fancy.' },
      { title: 'One improvement', text: 'A feature or a different model they can justify.' },
      { title: 'Limitation note', text: 'What the model must not be used for.' },
    ],
    variants: [
      { name: '2-day starter', duration: '2 days', points: ['Data', 'Model', 'Explain'] },
    ],
    stats: [
      { value: '2', label: 'Campus days' },
      { value: '16', label: 'Hours' },
      { value: '1', label: 'Model' },
      { value: 'Live', label: 'Mentors' },
    ],
    curriculum: [
      { title: 'Problem framing', items: ['Label', 'Leakage talk', 'Split'] },
      { title: 'Fit a model', items: ['Baseline', 'Metric', 'Sanity checks'] },
      { title: 'Explain', items: ['Who it helps', 'Who it fails', 'Demo'] },
    ],
    faqs: campusFaqs('the ML starter project'),
  },
  {
    slug: 'ai-in-product-teams',
    subjectId: 'ml',
    title: 'AI in product teams',
    highlight: 'Applied AI',
    eyebrow: 'Campus workshop',
    description:
      'One-day campus workshop on where AI and automation show up in real software teams — APIs, not hype.',
    keywords: ['AI workshop college', 'campus AI product'],
    lead: 'How product teams use models and APIs day to day, taught by engineers who ship software at Shribi.',
    audience: 'Any engineering year. Technical depth adjusts to the batch.',
    duration: '1 campus day',
    perks: campusPerks,
    learn: [
      'AI as a feature vs AI as the whole product',
      'Calling a model API vs training from scratch',
      'Failure modes students should mention in interviews',
      'A tiny demo that uses an API responsibly',
    ],
    features: [
      { title: 'Industry talk', text: 'Tied to Shribi’s automation and product work, not a vendor pitch.' },
      { title: 'Campus', text: 'Seminar + lab hybrid.' },
      { title: 'Live', text: 'Q&A with practising engineers.' },
      { title: 'Sane demos', text: 'No fake “we trained GPT” claims.' },
    ],
    projects: [
      { title: 'API sketch', text: 'One call, one fallback, one user-facing sentence.' },
      { title: 'Risk list', text: 'Privacy, cost, hallucination — in student language.' },
      { title: 'Where it fits Shribi work', text: 'Automation vs full custom software.' },
    ],
    variants: [
      { name: '1-day briefing', duration: '1 day', points: ['Talk', 'Mini lab', 'Q&A'] },
    ],
    stats: [
      { value: '1', label: 'Campus day' },
      { value: '8', label: 'Hours' },
      { value: 'Live', label: 'Engineers' },
      { value: 'Campus', label: 'Delivery' },
    ],
    curriculum: [
      { title: 'Map of AI in products', items: ['APIs', 'Data', 'Humans in the loop'] },
      { title: 'Lab', items: ['One integration', 'Errors', 'Demo'] },
      { title: 'Careers', items: ['What to learn next', 'Shribi Talent opt-in'] },
    ],
    faqs: campusFaqs('AI in product teams'),
  },
  {
    slug: '2-day-feature-sprint',
    subjectId: 'fullstack',
    title: '2-day feature sprint',
    highlight: 'Full-stack',
    eyebrow: 'Campus programme',
    description:
      'Two-day campus sprint: one user flow from form to API, demoed at the end of day two.',
    keywords: ['full stack workshop college', 'campus feature sprint'],
    lead: 'Students ship one thin feature together — UI, API, demo — in your college labs.',
    audience: 'Mixed batches welcome. We pair stronger and newer students.',
    duration: '2 campus days',
    perks: campusPerks,
    learn: [
      'A vertical slice, not six disconnected tutorials',
      'Standup-style check-ins',
      'Demo discipline on day two',
      'How product teams talk about a feature',
    ],
    features: [
      { title: 'One flow', text: 'Form, save, show it back. Done is better than huge.' },
      { title: 'Campus', text: 'Your labs for two consecutive days if possible.' },
      { title: 'Mentors', text: 'Shribi engineers unblocking teams.' },
      { title: 'Demo day', text: 'Short presentations the department can attend.' },
    ],
    projects: [
      { title: 'Registration flow', text: 'Or a club event signup — college-flavoured.' },
      { title: 'List + detail', text: 'What they saved is visible again.' },
      { title: 'Team README', text: 'Who did what.' },
    ],
    variants: [
      { name: '2-day sprint', duration: '2 days', points: ['Slice', 'Build', 'Demo'] },
    ],
    stats: [
      { value: '2', label: 'Campus days' },
      { value: '16', label: 'Hours' },
      { value: '1', label: 'Feature' },
      { value: 'Demo', label: 'Day 2' },
    ],
    curriculum: [
      { title: 'Brief', items: ['User', 'Slice', 'Teams'] },
      { title: 'Build', items: ['UI', 'API', 'Glue'] },
      { title: 'Demo', items: ['5 minutes', 'Gaps', 'Next'] },
    ],
    faqs: campusFaqs('the 2-day feature sprint'),
  },
  {
    slug: '5-day-product-sprint',
    subjectId: 'fullstack',
    title: '5-day product sprint',
    highlight: 'Product sprint',
    eyebrow: 'Campus programme',
    description:
      'Five-day campus product sprint with standups, code review, and a public demo — hosted at your college.',
    keywords: ['campus product sprint', 'week-long coding workshop college'],
    lead: 'A fest-week or semester capstone: students run a mini product team with Shribi mentors in the building.',
    audience: 'Colleges that can free lab time for a week. Mix of 2nd–4th year works if we set roles.',
    duration: '5 campus days',
    perks: campusPerks,
    learn: [
      'Daily standup habit',
      'Code review that is not personal',
      'Scope cuts when time runs out',
      'A public demo for faculty and peers',
    ],
    features: [
      { title: 'Real week rhythm', text: 'Closer to work than a one-day guest lecture.' },
      { title: 'On campus', text: 'We stay with the batch through the week.' },
      { title: 'Reviews', text: 'Mentors review PRs or lab folders daily.' },
      { title: 'Demo day', text: 'Invite HODs and the placement cell.' },
    ],
    projects: [
      { title: 'Small campus product', text: 'Events, lost-and-found, or a department tool.' },
      { title: 'Team board', text: 'Who owns what by Wednesday.' },
      { title: 'Demo script', text: 'Faculty-friendly, then technical Q&A.' },
    ],
    variants: [
      { name: '5-day sprint', duration: '5 days', points: ['Standups', 'Reviews', 'Public demo'] },
    ],
    stats: [
      { value: '5', label: 'Campus days' },
      { value: '40', label: 'Hours' },
      { value: 'Daily', label: 'Standups' },
      { value: 'Live', label: 'Mentors' },
    ],
    curriculum: [
      { title: 'Kickoff', items: ['Brief', 'Teams', 'Repo'] },
      { title: 'Build days', items: ['Standup', 'Build', 'Review'] },
      { title: 'Demo day', items: ['Rehearse', 'Present', 'Retro'] },
    ],
    faqs: campusFaqs('the 5-day product sprint'),
  },
  {
    slug: 'hackathon-lab',
    subjectId: 'fullstack',
    title: 'Hackathon lab',
    highlight: 'Hackathon',
    eyebrow: 'Campus programme',
    description:
      'Shribi mentors a campus hackathon: briefs, desks, judging help — at your college, not as a ticketed online event.',
    keywords: ['college hackathon mentor', 'campus hackathon workshop'],
    lead: 'We help you run a hackathon students can finish: clear problem statements, mentors on the floor, a judged demo.',
    audience: 'Fest committees, coding clubs, and placement cells.',
    duration: 'Aligned to your fest (often 24 hours or a weekend)',
    perks: campusPerks,
    learn: [
      'How to pick a problem that is finishable',
      'Mentorship without taking over the laptop',
      'A judging rubric that is fair',
      'What “shipping” means at 6 a.m.',
    ],
    features: [
      { title: 'Briefs', text: 'We write or review problem statements with you.' },
      { title: 'Desks', text: 'Shribi engineers rotate as mentors.' },
      { title: 'Judging', text: 'A simple rubric HODs can stand behind.' },
      { title: 'Campus', text: 'Your venue, your rules, our facilitation.' },
    ],
    projects: [
      { title: 'Problem pack', text: '2–3 statements at different difficulty.' },
      { title: 'Mentor rota', text: 'Who is on the floor when.' },
      { title: 'Demo protocol', text: 'Time, judges, backup projector plan.' },
    ],
    variants: [
      { name: 'Mentored hackathon', duration: 'Per fest', points: ['Briefs', 'Mentors', 'Judging'] },
    ],
    stats: [
      { value: 'Campus', label: 'Venue' },
      { value: 'Live', label: 'Mentors' },
      { value: 'Judged', label: 'Demo' },
      { value: 'Opt-in', label: 'Talent review' },
    ],
    curriculum: [
      { title: 'Before', items: ['Briefs', 'Labs', 'Internet'] },
      { title: 'During', items: ['Kickoff', 'Mentoring', 'Checkpoints'] },
      { title: 'After', items: ['Demos', 'Prizes', 'Optional talent'] },
    ],
    faqs: campusFaqs('the hackathon lab'),
  },
  {
    slug: '24-hour-campus-hackathon',
    subjectId: 'hackathon',
    title: '24-hour campus hackathon',
    highlight: '24 hours',
    eyebrow: 'Campus programme',
    description:
      'A 24-hour hackathon run at your college with Shribi problem statements, mentorship, and judged demos.',
    keywords: ['24 hour hackathon college', 'campus overnight hackathon'],
    lead: 'Overnight build culture with safety and lab access planned with the college — mentors present in shifts.',
    audience: 'Fest teams that can keep labs open overnight with proper permissions.',
    duration: '24 hours on campus',
    perks: campusPerks,
    learn: [
      'Scope for a single night',
      'Handover between tired teammates',
      'A morning demo that still makes sense',
      'Rest and lab rules we agree with the college',
    ],
    features: [
      { title: 'Shift mentors', text: 'Shribi does not leave students unattended as “the industry guest.”' },
      { title: 'Campus safety', text: 'We follow your overnight policies.' },
      { title: 'Judged morning', text: 'Short demos, clear rubric.' },
      { title: 'Optional hiring', text: 'Private follow-up only if the college wants it.' },
    ],
    projects: [
      { title: 'Night-sized briefs', text: 'Finishable, not fantasy.' },
      { title: 'Checkpoint', text: 'A 2 a.m. “what will you demo?” note.' },
      { title: 'Morning showcase', text: 'Faculty can attend.' },
    ],
    variants: [
      { name: '24-hour format', duration: '24 hours', points: ['Kickoff', 'Overnight', 'Judging'] },
    ],
    stats: [
      { value: '24h', label: 'On campus' },
      { value: 'Shifts', label: 'Mentors' },
      { value: 'Morning', label: 'Demos' },
      { value: 'College', label: 'Host' },
    ],
    curriculum: [
      { title: 'Evening', items: ['Rules', 'Briefs', 'Teams'] },
      { title: 'Night', items: ['Build', 'Mentor shifts', 'Checkpoint'] },
      { title: 'Morning', items: ['Demos', 'Results', 'Close'] },
    ],
    faqs: campusFaqs('the 24-hour hackathon'),
  },
  {
    slug: 'weekend-build',
    subjectId: 'hackathon',
    title: 'Weekend build',
    highlight: 'Weekend',
    eyebrow: 'Campus programme',
    description:
      'Friday kickoff, Saturday build, Sunday showcase — a campus weekend programme mentored by Shribi.',
    keywords: ['weekend hackathon college', 'campus weekend coding'],
    lead: 'For colleges that cannot run overnight labs. Same energy, daylight hours, a Sunday demo.',
    audience: 'Clubs and departments that can book labs Friday evening through Sunday afternoon.',
    duration: 'Weekend on campus',
    perks: campusPerks,
    learn: [
      'A three-act build',
      'Saturday scope cuts',
      'Sunday presentation skills',
      'Working in a team without a night-long crunch',
    ],
    features: [
      { title: 'Daylight format', text: 'Easier permissions than 24 hours.' },
      { title: 'Mentors both days', text: 'Shribi on campus Saturday and Sunday.' },
      { title: 'Showcase', text: 'Parents or faculty can be invited Sunday.' },
      { title: 'Campus', text: 'Your labs all weekend.' },
    ],
    projects: [
      { title: 'Friday brief', text: 'Teams leave with a written slice.' },
      { title: 'Saturday build', text: 'Mentored lab hours.' },
      { title: 'Sunday demo', text: 'Judged or faculty showcase.' },
    ],
    variants: [
      { name: 'Weekend format', duration: 'Fri–Sun', points: ['Kickoff', 'Build', 'Showcase'] },
    ],
    stats: [
      { value: '3', label: 'Calendar days' },
      { value: 'Live', label: 'Mentors' },
      { value: 'Sun', label: 'Showcase' },
      { value: 'Campus', label: 'Labs' },
    ],
    curriculum: [
      { title: 'Friday', items: ['Brief', 'Teams', 'Setup'] },
      { title: 'Saturday', items: ['Build', 'Review', 'Cut scope'] },
      { title: 'Sunday', items: ['Polish', 'Demo', 'Close'] },
    ],
    faqs: campusFaqs('the weekend build'),
  },
  {
    slug: 'sponsored-challenge',
    subjectId: 'hackathon',
    title: 'Sponsored challenge',
    highlight: 'Sponsored',
    eyebrow: 'Campus programme',
    description:
      'A company-brief campus challenge with Shribi engineers as mentors. Hosted at the college with the sponsor’s problem.',
    keywords: ['sponsored campus hackathon', 'industry challenge college'],
    lead: 'Placement cells and brands get a structured campus challenge — Shribi runs mentoring so it stays educational, not a logo-only stall.',
    audience: 'Colleges with a sponsor, or companies that want a first look at a campus batch.',
    duration: '1 day to a weekend, depending on the brief',
    perks: campusPerks,
    learn: [
      'Working from an industry brief',
      'Asking clarifying questions',
      'A demo the sponsor can understand',
      'What “good enough for a first look” means',
    ],
    features: [
      { title: 'Brief control', text: 'We help the sponsor write a finishable challenge.' },
      { title: 'Mentors', text: 'Shribi on the floor so students are not abandoned.' },
      { title: 'Campus host', text: 'The college remains the venue and authority.' },
      { title: 'Hiring boundary', text: 'Any recruiting is opt-in and private — never a public student dump.' },
    ],
    projects: [
      { title: 'Sponsor brief', text: 'One problem, acceptance tests in plain language.' },
      { title: 'Team demos', text: 'Sponsor + faculty panel if you want both.' },
      { title: 'Follow-up path', text: 'Shribi Talent only if the college agrees.' },
    ],
    variants: [
      { name: 'Sponsored day', duration: '1 day', points: ['Brief', 'Build', 'Demo'] },
      { name: 'Sponsored weekend', duration: 'Weekend', points: ['Deeper build', 'Mentor hours', 'Panel'] },
    ],
    stats: [
      { value: 'Campus', label: 'Host' },
      { value: 'Industry', label: 'Brief' },
      { value: 'Live', label: 'Mentors' },
      { value: 'Opt-in', label: 'Hiring' },
    ],
    curriculum: [
      { title: 'Align', items: ['Sponsor', 'College', 'Rules'] },
      { title: 'Run', items: ['Kickoff', 'Mentoring', 'Support'] },
      { title: 'Close', items: ['Demos', 'Thanks', 'Private next steps'] },
    ],
    faqs: campusFaqs('the sponsored challenge'),
  },
]

const dsaCourses: WorkshopCourseDetail[] = [
  dsaCourse({
    slug: 'data-structures-and-algorithms-using-c-plus-plus',
    language: 'C++',
    highlight: 'C++',
  }),
  dsaCourse({
    slug: 'data-structures-and-algorithms-using-java',
    language: 'Java',
    highlight: 'Java',
  }),
  dsaCourse({
    slug: 'data-structures-and-algorithms-using-python',
    language: 'Python',
    highlight: 'Python',
  }),
]

export const workshopCoursePages: WorkshopCourseDetail[] = [...dsaCourses, ...otherCourses]

export function getWorkshopCourse(slug: string) {
  return workshopCoursePages.find((course) => course.slug === slug)
}

export function getRelatedWorkshopCourses(slug: string) {
  const current = getWorkshopCourse(slug)
  if (!current) return []
  return workshopCoursePages.filter(
    (course) => course.slug !== slug && course.subjectId === current.subjectId,
  )
}

export function workshopCoursePath(slug: string) {
  return `${WORKSHOP_COURSE_BASE}${slug}/`
}
