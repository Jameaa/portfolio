import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    description:
      'A short, concrete description of what this project does and the problem it solves. Mention the impact or scale if relevant.',
    tags: ['React', 'TypeScript', 'Node.js'],
    liveUrl: 'https://example.com',
    sourceUrl: 'https://github.com/yourusername/project-one',
    featured: true,
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description:
      'Another project description. Focus on what you built and why it mattered, not just the tech stack.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    sourceUrl: 'https://github.com/yourusername/project-two',
    featured: true,
  },
  {
    id: 'project-three',
    title: 'Project Three',
    description: 'A smaller project or experiment worth showing off.',
    tags: ['Next.js', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
  },
]
