import { Metadata } from 'next'
import { Fragment } from 'react'
import { newsItems } from '../../data/news'

export const metadata: Metadata = {
  title: 'News',
  description: 'Recent updates and milestones for Freya Tan.',
}

export default function NewsArchivePage() {
  return (
    <Fragment>
      <header className="mb-10">
        <h1 className="mt-3 mb-3 text-2xl font-bold text-accent">News</h1>
        <p className="text-fore-secondary leading-relaxed max-w-2xl text-sm">
          A reverse-chronological log of paper acceptances, lab moves, fellowships,
          and other research milestones.
        </p>
      </header>

      <ul className="flex-col space-y-4">
        {newsItems.map((item, index) => (
          <li key={index}>
            <strong>{item.date}</strong>
            <br />
            {item.content}
          </li>
        ))}
      </ul>

      <br />
      <br />
    </Fragment>
  )
}
