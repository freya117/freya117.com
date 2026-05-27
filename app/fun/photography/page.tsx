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
  date?: string
  location?: string
  description?: string
  photos: string[] // public-path images, displayed in order in a 3-col grid
}

// Drop new albums at the top of this array.
// Each album shows as: title + meta + 3-col grid of photos.
const albums: Album[] = [
  {
    slug: 'yellowstone',
    title: 'Yellowstone',
    date: 'August 2024',
    location: 'Yellowstone National Park, WY',
    description:
      'Summer in geyser country — steam plumes at sunrise, bison crossings, and the Lamar Valley at golden hour.',
    photos: [
      '/fun/photography/yellowstone/01.jpg',
      '/fun/photography/yellowstone/02.jpg',
      '/fun/photography/yellowstone/03.jpg',
      '/fun/photography/yellowstone/04.jpg',
      '/fun/photography/yellowstone/05.jpg',
      '/fun/photography/yellowstone/06.jpg',
      '/fun/photography/yellowstone/07.jpg',
      '/fun/photography/yellowstone/08.jpg',
      '/fun/photography/yellowstone/09.jpg',
    ],
  },
  {
    slug: 'arizona-road-trip',
    title: 'Arizona Road Trip',
    date: 'January 2025',
    location: 'Bryce · Canyonlands · Monument Valley · Antelope Canyon',
    description:
      'A winter loop out of Las Vegas through the Southwest — hoodoos at sunrise, Mesa Arch at first light, sandstone slot canyons.',
    photos: [
      '/fun/photography/arizona-road-trip/01.jpg',
      '/fun/photography/arizona-road-trip/02.jpg',
      '/fun/photography/arizona-road-trip/03.jpg',
      '/fun/photography/arizona-road-trip/04.jpg',
      '/fun/photography/arizona-road-trip/05.jpg',
      '/fun/photography/arizona-road-trip/06.jpg',
      '/fun/photography/arizona-road-trip/07.jpg',
      '/fun/photography/arizona-road-trip/08.jpg',
      '/fun/photography/arizona-road-trip/09.jpg',
    ],
  },
]

function AlbumSection({ album }: { album: Album }) {
  return (
    <section className="mb-20">
      <header className="mb-6">
        <h2 className="text-lg font-semibold text-fore-primary">
          {album.title}
        </h2>
        {(album.date || album.location) && (
          <p className="text-xs text-fore-subtle mt-0.5">
            {[album.date, album.location].filter(Boolean).join(' · ')}
          </p>
        )}
        {album.description && (
          <p className="text-sm text-fore-secondary mt-3 leading-relaxed max-w-2xl">
            {album.description}
          </p>
        )}
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
        {album.photos.map((src, i) => (
          <div
            key={src}
            className="relative aspect-square overflow-hidden rounded bg-back-subtle"
          >
            <Image
              src={src}
              alt={`${album.title} — ${i + 1}`}
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 320px"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default function PhotographyPage() {
  return (
    <Fragment>
      <header className="mb-12">
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
          Albums of nine — each grid is one trip or theme. Slowly editing
          these into proper photo books; more series coming as I sort
          through the archive.
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
        <div>
          {albums.map((album) => (
            <AlbumSection key={album.slug} album={album} />
          ))}
        </div>
      )}

      <br />
      <br />
    </Fragment>
  )
}
