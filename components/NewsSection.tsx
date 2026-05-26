'use client'
import React, { useState } from 'react'
import { newsItems } from '../data/news'
import { ArrowLink, ChevronToggle } from './ArrowLink'

export default function NewsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? newsItems : newsItems.slice(0, 5)

  return (
    <div>
      <div className="flex items-center mt-24 mb-8 space-x-3">
        <h2 className="mt-3 mb-2 uppercase tracking-[.2em] text-accent text-sm font-semibold">
          NEWS
        </h2>
      </div>

      <ul className="flex-col space-y-4">
        {displayed.map((item, index) => (
          <li key={index}>
            <strong>{item.date}</strong>
            <br />
            {item.content}
          </li>
        ))}
      </ul>

      <div className="mt-6 text-sm flex items-center gap-6">
        {newsItems.length > 5 && (
          <ChevronToggle
            open={showAll}
            onClick={() => setShowAll(!showAll)}
          />
        )}
        <ArrowLink href="/news">All news</ArrowLink>
      </div>
    </div>
  )
}
