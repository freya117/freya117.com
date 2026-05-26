import { Metadata } from 'next'
import { Fragment } from 'react'
import ProjectGrid from '../../components/ProjectGrid'
import { getAllProjects } from '../../lib/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Research and applied projects by Freya Tan — vision-language modeling, spatial ML, LLM reasoning, urban computing, and design.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <Fragment>
      <header className="mb-10">
        <h1 className="mt-3 mb-3 text-2xl font-bold text-accent">Projects</h1>
        <p className="text-fore-secondary leading-relaxed max-w-2xl text-sm">
          Research and applied projects spanning vision-language modeling,
          spatial ML, LLM reasoning, urban computing, and design.
        </p>
      </header>

      <ProjectGrid projects={projects} />

      <br />
      <br />
    </Fragment>
  )
}
