import { profile } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading eyebrow="Contact" title="Let's work together" />
        <p className="max-w-xl text-[var(--color-text-muted)]">
          I'm currently open to new opportunities. The best way to reach me is by email, and I'll
          get back to you as soon as I can.
        </p>
        <div className="mt-6">
          <Button href={`mailto:${profile.email}`}>Say hello</Button>
        </div>
      </Container>
    </section>
  )
}
