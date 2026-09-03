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
    id: 'project-one',
    title: 'Project One',
    description:
      'A short, concrete description of what this project does and the problem it solves. Mention the impact or scale if relevant.',
    tags: ['React', 'TypeScript', 'Node.js'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/Jameaa/project-one',
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
