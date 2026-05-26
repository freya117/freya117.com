'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import type { ProjectFrontmatter } from '../lib/projects'

const TAG_LABELS: Record<string, string> = {
  all: 'All',
  'vision-language': 'Vision-Language',
  'spatial-ml': 'Spatial ML',
  llm: 'LLM',
  'urban-computing': 'Urban Computing',
  'ui-ux': 'UI/UX',
  design: 'Design',
}

type Props = {
  projects: ProjectFrontmatter[]
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="text-accent hover:text-accent-hover hover:underline"
    >
      [{label}]
    </a>
  )
}

export default function ProjectGrid({ projects }: Props) {
  const [activeTag, setActiveTag] = useState<string>('all')

  const availableTags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)))
    const ordered = ['vision-language', 'spatial-ml', 'llm', 'urban-computing', 'ui-ux', 'design']
    return ['all', ...ordered.filter((t) => set.has(t))]
  }, [projects])

  const filtered = useMemo(() => {
    if (activeTag === 'all') return projects
    return projects.filter((p) => p.tags?.includes(activeTag))
  }, [projects, activeTag])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10 text-xs">
        {availableTags.map((key) => (
          <button
            key={key}
            onClick={() => setActiveTag(key)}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTag === key
                ? 'bg-accent text-back-primary'
                : 'bg-back-subtle text-fore-secondary hover:bg-fore-subtle/20'
            }`}
          >
            {TAG_LABELS[key] ?? key}
          </button>
        ))}
      </div>

      <div className="flex-col space-y-10">
        {filtered.map((p) => {
          const primary =
            p.links?.project ||
            p.links?.paper ||
            p.links?.demo ||
            p.links?.github

          return (
            <article
              key={p.slug}
              id={p.slug}
              className="flex w-full space-x-4 scroll-mt-24"
            >
              {p.thumbnail && (
                <div className="w-1/4 mt-2 shrink-0">
                  {primary ? (
                    <a
                      href={primary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-[4/3] relative bg-back-subtle rounded overflow-hidden group"
                    >
                      <Image
                        src={p.thumbnail}
                        alt={p.title}
                        fill
                        className="object-cover transition-opacity group-hover:opacity-85"
                        sizes="(max-width: 768px) 25vw, 180px"
                      />
                    </a>
                  ) : (
                    <div className="aspect-[4/3] relative bg-back-subtle rounded overflow-hidden">
                      <Image
                        src={p.thumbnail}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 25vw, 180px"
                      />
                    </div>
                  )}
                </div>
              )}
              <div className={p.thumbnail ? 'w-3/4' : 'w-full'}>
                <h2 className="font-semibold text-base text-accent">
                  {primary ? (
                    <a
                      href={primary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-hover hover:underline"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h2>
                <p className="text-fore-secondary text-sm mt-1">
                  {p.year}
                  {p.tags?.length ? ' · ' + p.tags.join(' · ') : ''}
                </p>
                {p.description && (
                  <p className="text-fore-secondary text-sm mt-2 leading-relaxed">
                    {p.description}
                  </p>
                )}
                {(p.links?.github ||
                  p.links?.paper ||
                  p.links?.demo ||
                  p.links?.project) && (
                  <div className="mt-2 space-x-3 text-xs">
                    {p.links?.paper && <ExternalLink href={p.links.paper} label="Paper" />}
                    {p.links?.github && <ExternalLink href={p.links.github} label="GitHub" />}
                    {p.links?.demo && <ExternalLink href={p.links.demo} label="Demo" />}
                    {p.links?.project && <ExternalLink href={p.links.project} label="Site" />}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-fore-subtle text-center py-8">
          No projects match this filter.
        </p>
      )}
    </div>
  )
}
