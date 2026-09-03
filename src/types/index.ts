export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  sourceUrl?: string
  featured?: boolean
}

export type AccentColor = 'accent' | 'teal' | 'rose' | 'amber'

export interface SkillGroup {
  category: string
  items: string[]
  color: AccentColor
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'email' | 'twitter'
}
