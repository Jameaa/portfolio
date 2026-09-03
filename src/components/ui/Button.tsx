import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors',
        variant === 'primary' && 'bg-[var(--color-accent)] text-[var(--color-bg)] hover:opacity-90',
        variant === 'secondary' &&
          'border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)]',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
