import type { NavLink, SocialLink } from '@/types'

export const profile = {
  name: 'Your Name',
  role: 'Software Engineer',
  tagline: 'I build fast, accessible web applications from idea to production.',
  bio: "I'm a software engineer focused on building clean, reliable products. I care about readable code, good developer experience, and shipping things that actually solve problems. Outside of work I enjoy [your interests here].",
  location: 'Your City, Country',
  email: 'you@example.com',
  resumeUrl: '/resume.pdf',
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Jameaa', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:you@example.com', icon: 'email' },
]
