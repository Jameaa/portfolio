import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import type { SocialLink } from '@/types'

const icons: Record<SocialLink['icon'], typeof FiGithub> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  twitter: FiTwitter,
}

export function SocialIcon({ icon }: { icon: SocialLink['icon'] }) {
  const Icon = icons[icon]
  return <Icon aria-hidden="true" size={18} />
}
