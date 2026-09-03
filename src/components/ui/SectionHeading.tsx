interface SectionHeadingProps {
  eyebrow?: string
  title: string
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-sm font-medium tracking-wide text-[var(--color-accent)] uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">{title}</h2>
    </div>
  )
}
