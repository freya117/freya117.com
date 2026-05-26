'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { GitHub24 } from './icons'
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

  // Tags available for filtering = union of tags appearing in visible projects
  const availableTags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)))
    const ordered = ['vision-language', 'spatial-ml', 'llm', 'urban-computing', 'design']
    return ['all', ...ordered.filter((t) => set.has(t))]
  }, [projects])

  const filtered = useMemo(() => {
    if (activeTag === 'all') return projects
    return projects.filter((p) => p.tags?.includes(activeTag))
  }, [projects, activeTag])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6 text-xs">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => {
          // Primary external link (first in priority order): project > paper > demo > github
          const primary =
            p.links?.project ||
            p.links?.paper ||
            p.links?.demo ||
            p.links?.github

          const ThumbnailWrapper = primary ? 'a' : 'div'
          const wrapperProps = primary
            ? { href: primary, target: '_blank', rel: 'noopener noreferrer' as const }
            : {}

          return (
            <article
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24"
            >
              {p.thumbnail && (
                <ThumbnailWrapper
                  {...wrapperProps}
                  className={`block aspect-[4/3] relative bg-back-subtle rounded overflow-hidden ${
                    primary ? 'group cursor-pointer' : ''
                  }`}
                >
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    className={`object-cover transition-opacity ${
                      primary ? 'group-hover:opacity-85' : ''
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </ThumbnailWrapper>
              )}
              <div className="pt-3">
                <h3 className="text-sm font-semibold text-fore-primary">
                  {primary ? (
                    <a
                      href={primary}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {p.title}
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="text-xs text-fore-subtle mt-0.5">
                  {p.year}
                  {p.tags?.length ? ' · ' + p.tags.join(' · ') : ''}
                </p>
                {p.description && (
                  <p className="text-xs text-fore-secondary mt-1 leading-relaxed">
                    {p.description}
                  </p>
                )}
                {(p.links?.github ||
                  p.links?.paper ||
                  p.links?.demo ||
                  p.links?.project) && (
                  <div className="mt-2 space-x-2 text-xs">
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
