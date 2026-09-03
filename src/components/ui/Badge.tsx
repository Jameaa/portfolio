import type { ReactNode } from 'react'

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
      {children}
    </span>
  )
}
