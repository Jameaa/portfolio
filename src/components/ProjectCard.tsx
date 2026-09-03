import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import type { AccentColor, Project } from '@/types'
import { Badge } from '@/components/ui/Badge'

const topBarClasses: Record<AccentColor, string> = {
  accent: 'bg-[var(--color-accent)]',
  teal: 'bg-[var(--color-teal)]',
  rose: 'bg-[var(--color-rose)]',
  amber: 'bg-[var(--color-amber)]',
}

const hoverBorderClasses: Record<AccentColor, string> = {
  accent: 'hover:border-[var(--color-accent)]/50',
  teal: 'hover:border-[var(--color-teal)]/50',
  rose: 'hover:border-[var(--color-rose)]/50',
  amber: 'hover:border-[var(--color-amber)]/50',
}

interface ProjectCardProps {
  project: Project
  accent: AccentColor
}

export function ProjectCard({ project, accent }: ProjectCardProps) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors ${hoverBorderClasses[accent]}`}
    >
      <div className={`h-1 ${topBarClasses[accent]}`} />
      <div className="flex flex-1 flex-col p-6">
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
            <Badge key={tag} color={accent}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
