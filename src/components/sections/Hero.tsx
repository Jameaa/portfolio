import { profile, socialLinks } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SocialIcon } from '@/components/ui/SocialIcon'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, var(--color-accent), transparent 60%), radial-gradient(circle at 70% 70%, var(--color-teal), transparent 60%)',
        }}
      />

      <Container className="relative">
        <p className="mb-3 text-sm font-medium text-[var(--color-accent)]">
          {profile.role} · {profile.location}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold text-[var(--color-text)] sm:text-5xl">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-teal)] bg-clip-text text-transparent">
            {profile.name}
          </span>
          .
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
