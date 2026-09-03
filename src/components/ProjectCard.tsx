import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import type { Project } from '@/types'
import { Badge } from '@/components/ui/Badge'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent-muted)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-[var(--color-text)]">{project.title}</h3>
        <div className="flex shrink-0 gap-3">
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View source for ${project.title}`}
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              <FiGithub aria-hidden="true" size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              <FiArrowUpRight aria-hidden="true" size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  )
}
