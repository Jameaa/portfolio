import type { ReactNode } from 'react'
import type { AccentColor } from '@/types'
import { cn } from '@/lib/cn'

const colorClasses: Record<AccentColor, string> = {
  accent: 'border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)]',
  teal: 'border-[var(--color-teal)]/30 bg-[var(--color-teal)]/10 text-[var(--color-teal)]',
  rose: 'border-[var(--color-rose)]/30 bg-[var(--color-rose)]/10 text-[var(--color-rose)]',
  amber: 'border-[var(--color-amber)]/30 bg-[var(--color-amber)]/10 text-[var(--color-amber)]',
}

interface BadgeProps {
  children: ReactNode
  color?: AccentColor
}

export function Badge({ children, color }: BadgeProps) {
  return (
    <span
      className={cn(
        'rounded-full border px-3 py-1 text-xs font-medium',
        color
          ? colorClasses[color]
          : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)]',
      )}
    >
      {children}
    </span>
  )
}
