'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavLink } from './atoms'
import { ThemeToggle } from './themeToggle'

const routes = [
  {
    path: '/',
    label: 'About',
    exact: true,
  },
  {
    path: '/publications',
    label: 'Publications',
  },
  {
    path: '/projects',
    label: 'Projects',
  },
  {
    path: '/teaching',
    label: 'Teaching',
  },
]

export function Header() {
  const path = usePathname()
  return (
    <header className="container h-32 max-w-screen-lg px-5 m-auto overflow-hidden sm:px-12 md:px-20">
      <nav
        className="flex items-center justify-start h-full mt-auto space-x-6 text-sm md:justify-start"
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          aria-label="Website logo, go back to homepage."
          className="flex items-center border-white group "
        >
          <div>
            <div className="overflow-hidden transition-transform ease-in-out rounded-full w-9 h-9 group-hover:-translate-y-1">
              {/* Placeholder logo — same MIT-blue F mark as favicon, circular variant.
                  Replace with custom logo when designed. */}
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Freya Tan — home"
                className="w-9 h-9"
              >
                <circle cx="32" cy="32" r="32" fill="#0033A0" />
                <text
                  x="50%"
                  y="56%"
                  dy="0"
                  textAnchor="middle"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  fontStyle="italic"
                  fontWeight={500}
                  fontSize={42}
                  fill="#ffffff"
                  dominantBaseline="middle"
                >
                  F
                </text>
              </svg>
            </div>
          </div>
        </Link>
        <div className="items-center flex-grow hidden space-x-6 sm:flex">
          {routes.map(route => (
            <NavLink
              key={route.path}
              to={route.path}
              title={route.label}
              selected={
                route.exact === true
                  ? route.path === path
                  : path.startsWith(route.path)
              }
            />
          ))}
        </div>
        <ThemeToggle className="hidden mt-1 transition-transform ease-in-out focus:outline-none sm:block hover:text-accent hover:-translate-y-1 " />
      </nav>
    </header>
  )
}
