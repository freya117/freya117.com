import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV',
}

export default function CVPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold text-fore-primary mb-2">
          Curriculum Vitae
        </h1>
        <p className="text-fore-subtle text-sm">
          Freya Tan · ht2671@nyu.edu
        </p>
        <p className="text-xs text-fore-subtle italic mt-2">
          A full CV is available on request.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-fore-subtle mb-4">
          Education
        </h2>
        <ul className="space-y-2 text-fore-secondary">
          <li>
            <strong className="text-fore-primary">Ph.D. in Computer Science</strong> (first year) ·
            New York University, VIDA Center · advised by Prof. Claudio Silva and Prof. Paul Torrens · 2026 – present
          </li>
          <li>
            <strong className="text-fore-primary">Dual M.S.</strong> · MIT — EECS (CSAIL) and
            City Planning (City Form Lab) · 2024–2026
          </li>
          <li>
            <strong className="text-fore-primary">M.U.D., Urban Science</strong> ·
            UC Berkeley · 2022–2024
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-fore-subtle mb-4">
          Where to find more
        </h2>
        <ul className="space-y-2 text-fore-secondary">
          <li>
            Publications:{' '}
            <a
              href="/publications"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              /publications
            </a>
          </li>
          <li>
            Projects:{' '}
            <a
              href="/projects"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              /projects
            </a>
          </li>
          <li>
            Teaching:{' '}
            <a
              href="/teaching"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              /teaching
            </a>
          </li>
          <li>
            Google Scholar:{' '}
            <a
              href="https://scholar.google.com/citations?user=yiXTUIwAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              scholar.google.com/citations?user=yiXTUIwAAAAJ
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/freya117"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              github.com/freya117
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/freya-tan-888145258/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              linkedin.com/in/freya-tan-888145258
            </a>
          </li>
        </ul>
      </section>
    </article>
  )
}
