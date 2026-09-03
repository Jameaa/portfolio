import { projects } from '@/data/projects'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading eyebrow="Projects" title="Things I've built" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
