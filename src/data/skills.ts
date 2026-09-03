import type { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    color: 'accent',
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    color: 'teal',
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL'],
    color: 'rose',
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'CI/CD', 'Vite'],
    color: 'amber',
  },
]
