import { Project, Service, Testimonial, Stat } from './types';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { value: '5+', label: 'Years Experience' },
  { value: '80+', label: 'Projects Delivered' },
  { value: '40+', label: 'Happy Clients' },
];

export const SKILLS = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'Figma', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'AWS', 'Motion Design'
];

export const PROJECTS: Project[] = [
  {
    category: 'E-Commerce',
    name: 'ShopFlow — Headless Commerce Platform',
    description: 'A blazing-fast headless storefront with personalised recommendations and sub-second load times.',
    tech: ['Next.js', 'Shopify', 'GraphQL'],
  },
  {
    category: 'SaaS Dashboard',
    name: 'AnalytIQ — Real-Time Analytics UI',
    description: 'Complex data visualisations made simple. 12 chart types, drag and drop layouts, and live streaming data.',
    tech: ['React', 'D3.js', 'WebSocket'],
  },
  {
    category: 'Real Estate',
    name: 'NestFind — Property Discovery App',
    description: 'Geospatial property search with AR walkthroughs and AI-powered price prediction.',
    tech: ['React Native', 'Mapbox', 'Python ML'],
  },
  {
    category: 'Communication',
    name: 'PulseChat — Team Collaboration Tool',
    description: 'A Slack alternative with end-to-end encryption, threaded discussions, and file collaboration.',
    tech: ['Vue.js', 'Socket.io', 'Redis'],
  },
  {
    category: 'Design Tools',
    name: 'Palette Pro — Design System Builder',
    description: 'Generate, preview, and export complete design tokens and component libraries in seconds.',
    tech: ['Svelte', 'CSS Houdini', 'Figma API'],
  },
  {
    category: 'Food Tech',
    name: 'YumRush — Food Ordering Platform',
    description: 'Multi-vendor food marketplace with real-time order tracking and driver dispatch system.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
];

export const SERVICES: Service[] = [
  {
    name: 'UI UX Design',
    description: 'User-centred design that converts. Wireframes, prototypes, design systems, and polished high-fidelity mockups using Figma.',
  },
  {
    name: 'Frontend Development',
    description: 'Pixel-perfect React and Next.js apps with smooth animations, excellent accessibility, and lightning-fast performance.',
  },
  {
    name: 'Backend and APIs',
    description: 'Scalable RESTful and GraphQL APIs built with Node.js, secured, documented, and ready for production at scale.',
  },
  {
    name: 'Mobile Apps',
    description: 'Cross-platform iOS and Android apps using React Native with a single codebase and native feel.',
  },
  {
    name: 'E-Commerce',
    description: 'Custom Shopify stores, headless commerce, and complete checkout experiences that maximise conversion.',
  },
  {
    name: 'DevOps and Cloud',
    description: 'CI/CD pipelines, Docker, AWS and GCP deployment, monitoring, and infrastructure that scales with your business.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Working with this developer was the best decision for our startup. The product shipped in 6 weeks and our users absolutely love it. Exceptional attention to detail.',
    name: 'Priya Sharma',
    role: 'Co-Founder, TechLaunch India',
  },
  {
    quote: 'The redesign increased our conversion rate by 34 percent. Every interaction feels intentional. I have hired many freelancers and this is a different level altogether.',
    name: 'Marcus Webb',
    role: 'CEO, NovaBrand UK',
  },
  {
    quote: 'Fast communication, clean code, and a genuine understanding of user experience. Delivered ahead of schedule with zero bugs. Highly recommended.',
    name: 'Ananya Kapoor',
    role: 'Product Lead, Zest Design',
  },
  {
    quote: 'Our dashboard went from slow and confusing to beautiful and instant. The data visualisations alone saved us from churning three enterprise clients.',
    name: 'Jordan Lee',
    role: 'CTO, DataPulse Analytics',
  },
];
