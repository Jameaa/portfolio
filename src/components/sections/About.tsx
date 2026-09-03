import { profile } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading eyebrow="About" title="A bit about me" />
        <p className="max-w-2xl leading-relaxed text-[var(--color-text-muted)]">{profile.bio}</p>
      </Container>
    </section>
  )
}
