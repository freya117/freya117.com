'use client'
import React, { useState } from 'react'
import { newsItems } from '../data/news'

export default function NewsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? newsItems : newsItems.slice(0, 5)

  return (
    <div>
      <div className="flex items-center mt-24 mb-8 space-x-3">
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          NEWS
        </span>
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

      {newsItems.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-accent hover:text-accent-hover hover:underline focus:outline-none"
        >
          {showAll ? 'Show less ▲' : 'Show more ▼'}
        </button>
      )}
    </div>
  )
}
