import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * "Read more →" style link with a subtle SVG chevron that slides
 * a few pixels on hover. Used for "All publications", "All projects",
 * "All news" etc.
 */
export function ArrowLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1 text-accent hover:text-accent-hover transition-colors ${className}`}
    >
      <span className="underline decoration-accent/30 underline-offset-2 group-hover:decoration-accent">
        {children}
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </Link>
  )
}

/**
 * "Show more / less" toggle with a chevron that rotates when open.
 */
export function ChevronToggle({
  open,
  onClick,
  labelOpen = 'Show less',
  labelClosed = 'Show more',
  className = '',
}: {
  open: boolean
  onClick: () => void
  labelOpen?: string
  labelClosed?: string
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className={`group inline-flex items-center gap-1 text-accent hover:text-accent-hover transition-colors focus:outline-none ${className}`}
    >
      <span className="underline decoration-accent/30 underline-offset-2 group-hover:decoration-accent">
        {open ? labelOpen : labelClosed}
      </span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  )
}
