import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'This site. A component-based portfolio built from scratch with a clean data/UI separation, dark theme, and responsive layout.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    sourceUrl: 'https://github.com/Jameaa/portfolio',
    featured: true,
  },
  {
    id: 'price-tracker',
    title: 'Price Tracker',
    description:
      'Tracks prices on products you care about, stores price history, and sends a Discord alert when the price drops below your target. Full-stack app deployed on a free-tier stack: Postgres, a scheduled backend, and a GitHub Actions cron workflow.',
    tags: ['React', 'TypeScript', 'Express', 'Postgres'],
    liveUrl: 'https://price-tracker-client-nsk5.onrender.com',
    sourceUrl: 'https://github.com/Jameaa/Price-Tracker',
    featured: true,
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description:
      'Another project description. Focus on what you built and why it mattered, not just the tech stack.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    sourceUrl: 'https://github.com/Jameaa/project-two',
    featured: true,
  },
]
