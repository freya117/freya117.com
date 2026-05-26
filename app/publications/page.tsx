import { Metadata } from 'next'
import { Fragment } from 'react'
import PublicationList from '../../components/publicationList'
import { publications } from '../../data/publications'

export const metadata: Metadata = {
  title: 'Publications',
}

export default function PublicationsPage() {
  // Group by year, descending
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
      <h1 className="mt-3 mb-2 text-2xl font-bold text-accent">Publications</h1>
      <p className="text-fore-secondary text-sm mb-8">
        Research on spatial AI, vision-language models, and applied urban
        computing. <span className="text-fore-subtle">(Co-)first author work bolded.</span>
      </p>

      {years.map((year) => (
        <section key={year} className="mb-12">
          <h2 className="text-lg font-semibold text-fore-primary border-b border-fore-subtle/20 pb-2 mb-6">
            {year}
          </h2>
          <PublicationList publications={byYear[year]} />
        </section>
      ))}

      <br />
      <br />
    </Fragment>
  )
}
