import { useState } from 'react'
import { navLinks, profile } from '@/data/profile'
import { Container } from '@/components/ui/Container'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-semibold text-[var(--color-text)]">
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="text-[var(--color-text)] sm:hidden"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-[var(--color-border)] px-6 py-3 sm:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
