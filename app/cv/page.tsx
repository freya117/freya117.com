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
          Freya Tan · freya117@mit.edu
        </p>
        <p className="text-xs text-fore-subtle italic mt-2">
          A detailed web CV is being prepared for Stage 5 of the site rebuild.
          In the meantime, the highlights below + the resources at the bottom
          should cover most questions.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-fore-subtle mb-4">
          Education
        </h2>
        <ul className="space-y-2 text-fore-secondary">
          <li>
            <strong className="text-fore-primary">Incoming CS PhD</strong> ·
            New York University, VIDA Center · advised by Claudio Silva and Paul Torrens · 2026 –
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
            Publications and projects:{' '}
            <a
              href="/research"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              /research
            </a>
          </li>
          <li>
            Teaching:{' '}
            <a
              href="/teaching"
              className="text-accent hover:text-accent-hover hover:underline"
            >
              /teaching
            </a>{' '}
            <span className="text-xs text-fore-subtle">(coming in Stage 5)</span>
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
