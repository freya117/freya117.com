import { Metadata } from 'next'
import { Fragment } from 'react'
import PublicationList from '../../components/publicationList'
import ProjectGrid from '../../components/ProjectGrid'
import { publications } from '../../data/publications'
import { getAllProjects } from '../../lib/projects'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Spatial AI, vision-language models, and LLM reasoning research — publications and projects by Freya Tan.',
}

export default async function ResearchPage() {
  const projects = await getAllProjects()

  // Group publications by year, desc
  const byYear = publications.reduce<Record<number, typeof publications>>(
    (acc, p) => {
      ;(acc[p.year] ||= []).push(p)
      return acc
    },
    {}
  )
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <Fragment>
      <header className="mb-12">
        <h1 className="mt-3 mb-3 text-2xl font-bold text-accent">Research</h1>
        <p className="text-fore-secondary leading-relaxed max-w-2xl">
          My research builds spatial and multimodal AI systems — vision-language
          models, graph-based representations, and LLM reasoning over structured
          data — to make machines genuinely understand places and the people in
          them.
        </p>
      </header>

      <section className="mb-20">
        <div className="flex items-center mb-8 space-x-3">
          <span className="uppercase tracking-[.2em] text-accent text-sm">
            PUBLICATIONS
          </span>
        </div>
        {years.map((year) => (
          <div key={year} className="mb-10">
            <h2 className="text-lg font-semibold text-fore-primary border-b border-fore-subtle/20 pb-2 mb-6">
              {year}
            </h2>
            <PublicationList publications={byYear[year]} />
          </div>
        ))}
      </section>

      <section className="mb-16">
        <div className="flex items-center mb-8 space-x-3">
          <span className="uppercase tracking-[.2em] text-accent text-sm">
            PROJECTS
          </span>
        </div>
        <p className="text-sm text-fore-subtle mb-6">
          Research work that's not (yet) tied to a publication — including
          design, planning, and applied projects.
        </p>
        <ProjectGrid projects={projects} />
      </section>
    </Fragment>
  )
}
