'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ProjectFrontmatter } from '../lib/projects'

const TAG_LABELS: Record<string, string> = {
  all: 'All',
  'vision-language': 'Vision-Language',
  'spatial-ml': 'Spatial ML',
  llm: 'LLM',
  'urban-computing': 'Urban Computing',
  design: 'Design',
}

type Props = {
  projects: ProjectFrontmatter[]
}

export default function ProjectGrid({ projects }: Props) {
  const [activeTag, setActiveTag] = useState<string>('all')

  const filtered = useMemo(() => {
    if (activeTag === 'all') return projects
    return projects.filter((p) => p.tags?.includes(activeTag))
  }, [projects, activeTag])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6 text-xs">
        {Object.entries(TAG_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTag(key)}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTag === key
                ? 'bg-accent text-back-primary'
                : 'bg-back-subtle text-fore-secondary hover:bg-fore-subtle/20'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block"
          >
            <article className="overflow-hidden rounded transition-opacity hover:opacity-90">
              {p.thumbnail ? (
                <div className="aspect-[4/3] relative bg-back-subtle">
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-back-subtle" />
              )}
              <div className="pt-3">
                <h3 className="text-sm font-semibold text-fore-primary group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-fore-subtle mt-0.5">
                  {p.year}
                  {p.tags?.length ? ' · ' + p.tags.join(' · ') : ''}
                </p>
                {p.description && (
                  <p className="text-xs text-fore-secondary mt-1 line-clamp-2">
                    {p.description}
                  </p>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-fore-subtle text-center py-8">
          No projects match this filter.
        </p>
      )}
    </div>
  )
}
