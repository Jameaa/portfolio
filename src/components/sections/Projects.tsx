import type { AccentColor } from '@/types'
import { projects } from '@/data/projects'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'

const accentCycle: AccentColor[] = ['accent', 'teal', 'rose', 'amber']

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading eyebrow="Projects" title="Things I've built" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              accent={accentCycle[index % accentCycle.length]}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
