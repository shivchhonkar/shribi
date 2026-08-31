export const BILLINT_URL = 'https://www.billint.com'

export const MODULE_TABS = [
  { id: 'features', label: 'Features' },
  { id: 'documents', label: 'Documents' },
  { id: 'operations', label: 'Operations' },
] as const

export type BillintTabId = (typeof MODULE_TABS)[number]['id']

export const MODULES: Record<
  BillintTabId,
  { title: string; description: string; icon: string }[]
> = {
  features: [
    {
      title: 'GST Invoicing',
      description:
        'Create professional GST and non-GST invoices in seconds. Customize templates and share instantly.',
      icon: 'file',
    },
    {
      title: 'Inventory Management',
      description:
        'Track stock in real-time, manage multiple warehouses, and get low stock alerts.',
      icon: 'box',
    },
    {
      title: 'Reports & Analytics',
      description:
        'Get detailed insights with beautiful reports and make data-driven decisions.',
      icon: 'chart',
    },
    {
      title: 'Client Management',
      description:
        'Manage clients, track their history, outstanding payments, and communicate seamlessly.',
      icon: 'users',
    },
    {
      title: 'Expense Tracking',
      description: 'Track expenses, categorize them, and manage cash flow efficiently.',
      icon: 'wallet',
    },
    {
      title: 'Automation',
      description:
        'Automate recurring invoices, payment reminders, and follow-ups to save time.',
      icon: 'refresh',
    },
  ],
  documents: [
    {
      title: 'Invoice Generator',
      description:
        'Create branded GST or non-GST invoices in minutes and share instantly with clients.',
      icon: 'file',
    },
    {
      title: 'Quotation Generator',
      description:
        'Send clean quotations with pricing, taxes, and terms before client approvals.',
      icon: 'mail',
    },
    {
      title: 'Purchase Order Generator',
      description:
        'Organize supplier purchases with clear items, quantities, rates, and approvals.',
      icon: 'box',
    },
    {
      title: 'GST Invoice Generator',
      description:
        'Generate GST-compliant invoices with automatic tax breakdown and format support.',
      icon: 'dollar',
    },
    {
      title: 'Delivery Challan Generator',
      description:
        'Prepare delivery challans for goods movement and maintain accurate dispatch records.',
      icon: 'truck',
    },
    {
      title: 'Proforma Invoice Generator',
      description:
        'Share proforma invoices for advance billing and smoother pre-sales communication.',
      icon: 'credit',
    },
  ],
  operations: [
    {
      title: 'Real-time inventory',
      description: 'Track stock in real time so you always know what you can sell and what to reorder.',
      icon: 'layers',
    },
    {
      title: 'Faster invoicing',
      description: 'Create invoices faster with saved parties, items, taxes, and reusable templates.',
      icon: 'zap',
    },
    {
      title: 'GST billing',
      description: 'Raise GST bills faster with automatic tax breakdown and compliant formats.',
      icon: 'dollar',
    },
    {
      title: 'GST & reports',
      description: 'Stay on top of GST, profit and loss, and other business reports from one dashboard.',
      icon: 'pie',
    },
    {
      title: 'Data protection',
      description: 'Keep invoices, inventory, and client data protected with role-based access control.',
      icon: 'shield',
    },
    {
      title: 'Custom templates',
      description: 'Use customizable invoice and report templates that match your brand.',
      icon: 'settings',
    },
  ],
}

export const WHY_CHOOSE_US = [
  {
    title: 'Set up in seconds',
    description: 'Set up your business in seconds and start billing without a long onboarding process.',
    icon: 'zap',
  },
  {
    title: 'Role-based access',
    description: 'Give your team the right permissions with role-based access control.',
    icon: 'eye',
  },
  {
    title: 'Multiple businesses',
    description: 'Manage multiple businesses from one Billint account as you grow.',
    icon: 'layers',
  },
  {
    title: '24/7 customer support',
    description: 'Get help when you need it — Billint support is available around the clock.',
    icon: 'headphones',
  },
  {
    title: 'Customizable templates',
    description: 'Customize invoice and report templates so every document looks like your brand.',
    icon: 'settings',
  },
  {
    title: 'Secure by design',
    description: 'Data protection is built in so your billing, stock, and client records stay safe.',
    icon: 'shield',
  },
]

export const BENEFITS = [
  {
    title: 'GST-ready billing',
    description: 'Create GST and non-GST invoices with automatic tax breakdown and share them instantly.',
    icon: 'dollar',
  },
  {
    title: 'Live inventory',
    description: 'Track stock in real time, manage warehouses, and get low-stock alerts before you run out.',
    icon: 'box',
  },
  {
    title: 'Payments & clients',
    description: 'Manage parties, outstanding payments, and client history in one place.',
    icon: 'users',
  },
  {
    title: 'Start free',
    description: 'Start free billing with no credit card required — then grow into reports and automation.',
    icon: 'tag',
  },
]

export const CTA_HIGHLIGHTS = [
  'Start free — no credit card required',
  'GST invoicing, inventory, and payments in one place',
  'Manage multiple businesses with role-based access',
  '24/7 customer support',
]

export const TESTIMONIALS = [
  {
    quote:
      'Billint has made our billing so simple and fast. The GST invoicing and reports save us hours every week.',
    name: 'Vansh Jindal',
    company: 'Jindal Traders, Murena',
  },
  {
    quote: 'The best part is how easy it is to use. Our team adapted to it in just a day.',
    name: 'Vishal Jaiswal',
    company: 'Jaiswal Traders, Vanarasi',
  },
  {
    quote: 'Excellent support and powerful features. Highly recommended for small businesses.',
    name: 'Aditya Gupta',
    company: 'Aditya Telecom, Dishpur',
  },
]

export const FAQS = [
  {
    question: 'What is Billint?',
    answer:
      'Billint is free GST billing and inventory software for small businesses. Create GST invoices, track stock, manage payments, and stay compliant — all in one place.',
  },
  {
    question: 'Do I need GST knowledge to use Billint?',
    answer:
      'No. Billint helps you create GST and non-GST invoices with automatic tax breakdown and format support, so you can stay compliant without being a tax expert.',
  },
  {
    question: 'Can I manage multiple businesses?',
    answer:
      'Yes. Billint lets you manage multiple businesses from one account, with role-based access control for your team.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Yes. Billint is built with data protection in mind so your invoices, inventory, and client records stay secure.',
  },
  {
    question: 'Can the software grow with my business?',
    answer:
      'Yes. Start with invoicing and inventory, then add reports, automation, and document tools such as quotations, purchase orders, and delivery challans as you grow.',
  },
]
