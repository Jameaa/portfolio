import { profile, socialLinks } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SocialIcon } from '@/components/ui/SocialIcon'

export function Hero() {
  return (
    <section id="top" className="py-24 sm:py-32">
      <Container>
        <p className="mb-3 text-sm font-medium text-[var(--color-accent)]">
          {profile.role} · {profile.location}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold text-[var(--color-text)] sm:text-5xl">
          Hi, I'm {profile.name}.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--color-text-muted)]">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="#projects">View my work</Button>
          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
        </div>

        <div className="mt-10 flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.icon === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={link.label}
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
