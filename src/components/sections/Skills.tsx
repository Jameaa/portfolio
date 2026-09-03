import { skillGroups } from '@/data/skills'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-sm font-medium text-[var(--color-text)]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
