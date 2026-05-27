import { Metadata } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Fun',
  description:
    'When Freya is not in the lab — photography, climbing, and other interests.',
}

type Interest = {
  emoji: string
  title: string
  description: string
  image?: string // path under /public; if absent, renders a soft accent-tinted block
}

const interests: Interest[] = [
  {
    emoji: '📷',
    title: 'Photography',
    description:
      'Mostly street and architectural — moments when the geometry of a place catches a passing figure just right.',
    // image: '/fun/photography.jpg',
  },
  {
    emoji: '🧗',
    title: 'Climbing',
    description:
      'Bouldering and sport climbing. Routes are the most honest puzzles I know: your body either solves them or it doesn’t.',
    // image: '/fun/climbing.jpg',
  },
]

const funFacts: string[] = [
  'I think of cities the way some people think of cathedrals — every block has structure, sediment, and surprises.',
  'I read on paper, take notes in Pages, and refuse to give either up.',
  'Favorite working soundtrack: instrumental film scores or rainstorms.',
]

export default function FunPage() {
  return (
    <Fragment>
      <header className="mb-10">
        <h1 className="mt-3 mb-3 text-2xl font-bold text-accent">Fun</h1>
        <p className="text-fore-secondary leading-relaxed max-w-2xl text-sm">
          When I&apos;m not in the lab, you&apos;ll usually find me doing one
          of these.
        </p>
      </header>

      <section className="mb-16 space-y-10">
        {interests.map((it) => (
          <article
            key={it.title}
            className="grid md:grid-cols-[160px_1fr] gap-5 md:gap-6"
          >
            {it.image ? (
              <div className="relative w-full md:w-[160px] aspect-[4/3] rounded overflow-hidden bg-back-subtle shrink-0">
                <Image
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="relative w-full md:w-[160px] aspect-[4/3] rounded overflow-hidden bg-back-accent flex items-center justify-center shrink-0"
              >
                <span className="text-4xl select-none">{it.emoji}</span>
              </div>
            )}
            <div>
              <h2 className="text-base font-semibold text-fore-primary">
                <span className="mr-1.5" aria-hidden="true">
                  {it.emoji}
                </span>
                {it.title}
              </h2>
              <p className="text-sm text-fore-secondary mt-3 leading-relaxed">
                {it.description}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="uppercase tracking-[.2em] text-accent text-sm font-semibold mb-6">
          Things you might not know
        </h2>
        <ul className="space-y-3 text-sm text-fore-secondary list-disc pl-5 leading-relaxed max-w-2xl">
          {funFacts.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      <br />
      <br />
    </Fragment>
  )
}
