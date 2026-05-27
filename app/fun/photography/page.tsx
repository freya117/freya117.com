import { Metadata } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photography',
  description:
    'Photo albums by Freya Tan — series collected from street, architectural, and travel work.',
}

type Album = {
  slug: string
  title: string
  year?: string
  location?: string
  description?: string
  cover?: string // path under /public; soft-tinted block as fallback
  photos?: string[] // future: gallery grid
}

// Drop new albums in here as you collect photos.
// Cover-only treatment for now; eventually each album can route to its own
// page with a full grid (app/fun/photography/[slug]/page.tsx).
const albums: Album[] = [
  // Example shape:
  // {
  //   slug: 'venice-2025',
  //   title: 'Venice, 2025',
  //   year: '2025',
  //   location: 'Venice, Italy',
  //   description: 'Walks around the Biennale week — water, scaffolding, low light.',
  //   cover: '/fun/photography/venice-2025/cover.jpg',
  // },
]

export default function PhotographyPage() {
  return (
    <Fragment>
      <header className="mb-10">
        <p className="text-xs text-fore-subtle mb-2">
          <Link
            href="/fun"
            className="text-accent hover:text-accent-hover hover:underline"
          >
            ← Fun
          </Link>
        </p>
        <h1 className="mt-3 mb-3 text-2xl font-bold text-accent">Photography</h1>
        <p className="text-fore-secondary leading-relaxed max-w-2xl text-sm">
          Albums collected over the years — mostly street, architectural, and
          travel work. I&apos;m slowly editing these into proper photo books.
          More series will land here as I sort through the archive.
        </p>
      </header>

      {albums.length === 0 ? (
        <section className="border border-dashed border-fore-subtle/30 rounded-lg p-8 md:p-12 text-center text-sm text-fore-subtle max-w-2xl">
          <p>
            <span className="text-3xl block mb-3" aria-hidden="true">
              📷
            </span>
            Albums coming soon — I&apos;m editing the first few series now.
          </p>
        </section>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {albums.map((a) => (
            <article key={a.slug} className="group">
              <div className="aspect-[4/3] relative rounded overflow-hidden bg-back-subtle mb-3">
                {a.cover ? (
                  <Image
                    src={a.cover}
                    alt={a.title}
                    fill
                    className="object-cover transition-opacity group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-back-accent">
                    <span className="text-4xl select-none" aria-hidden="true">
                      📷
                    </span>
                  </div>
                )}
              </div>
              <h2 className="text-base font-semibold text-fore-primary">
                {a.title}
              </h2>
              {(a.year || a.location) && (
                <p className="text-xs text-fore-subtle mt-0.5">
                  {[a.location, a.year].filter(Boolean).join(' · ')}
                </p>
              )}
              {a.description && (
                <p className="text-sm text-fore-secondary mt-2 leading-relaxed">
                  {a.description}
                </p>
              )}
            </article>
          ))}
        </section>
      )}

      <br />
      <br />
    </Fragment>
  )
}
