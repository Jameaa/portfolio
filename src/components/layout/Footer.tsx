import { profile, socialLinks } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { SocialIcon } from '@/components/ui/SocialIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]">
      <Container className="flex flex-col items-center gap-4 py-8 text-sm text-[var(--color-text-muted)] sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.icon === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={link.label}
              className="transition-colors hover:text-[var(--color-text)]"
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}
