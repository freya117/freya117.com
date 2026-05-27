import { Metadata } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fun',
  description:
    'When Freya is not in the lab — photography, climbing, teaching, cooking, and other interests.',
}

type Interest = {
  emoji: string
  title: string
  description: string
  image?: string
  href?: string // internal route OR external URL
  external?: boolean
  cta?: string // optional small "Learn more →" style label
}

const interests: Interest[] = [
  {
    emoji: '📷',
    title: 'Photography',
    description:
      'Mostly street and architectural — moments when the geometry of a place catches a passing figure just right. Slowly building it into a few small albums.',
    image: '/fun/photography-cover.jpg',
    href: '/fun/photography',
    cta: 'See the albums',
  },
  {
    emoji: '🧗',
    title: 'Climbing',
    description:
      "Bouldering and sport climbing. I'm a USA Climbing Level 1 certified judge — refereeing is a strangely meditative way to spend a weekend at the gym.",
  },
  {
    emoji: '✏️',
    title: 'STEM education',
    description:
      "I love designing curricula and teaching kids — figuring out how to make a hard idea click is its own puzzle. Most recent stint: program assistant at Berkeley's Girls in Engineering summer camp, where I designed and led a week of hands-on sessions across electrical, environmental, semiconductor, dendrochronology, and civil engineering — the hand-drawn roadmap shown here.",
    image: '/fun/girls-in-engineering-roadmap.jpg',
    href: 'https://girlsinengineering.berkeley.edu/',
    external: true,
    cta: 'Berkeley GIE',
  },
  {
    emoji: '🍳',
    title: 'Cooking',
    description:
      'Mostly home-style Chinese, with detours into baking and the occasional fermentation experiment. The kitchen is where I think best after a long stretch of staring at a screen.',
  },
]

function InterestImage({ it }: { it: Interest }) {
  if (it.image) {
    return (
      <div className="relative w-full md:w-[160px] aspect-[4/3] rounded overflow-hidden bg-back-subtle shrink-0">
        <Image
          src={it.image}
          alt={it.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 160px"
        />
      </div>
    )
  }
  return (
    <div
      aria-hidden="true"
      className="relative w-full md:w-[160px] aspect-[4/3] rounded overflow-hidden bg-back-accent flex items-center justify-center shrink-0"
    >
      <span className="text-4xl select-none">{it.emoji}</span>
    </div>
  )
}

function InterestCard({ it }: { it: Interest }) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (!it.href) return <>{children}</>
    if (it.external) {
      return (
        <a
          href={it.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block transition-opacity hover:opacity-90"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={it.href} className="block transition-opacity hover:opacity-90">
        {children}
      </Link>
    )
  }

  return (
    <article className="grid md:grid-cols-[160px_1fr] gap-5 md:gap-6">
      {it.href ? (
        <Wrapper>
          <InterestImage it={it} />
        </Wrapper>
      ) : (
        <InterestImage it={it} />
      )}
      <div>
        <h2 className="text-base font-semibold text-fore-primary">
          <span className="mr-1.5" aria-hidden="true">
            {it.emoji}
          </span>
          {it.href ? (
            it.external ? (
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {it.title}
              </a>
            ) : (
              <Link
                href={it.href}
                className="hover:text-accent transition-colors"
              >
                {it.title}
              </Link>
            )
          ) : (
            it.title
          )}
        </h2>
        <p className="text-sm text-fore-secondary mt-3 leading-relaxed">
          {it.description}
        </p>
        {it.href && it.cta && (
          <p className="mt-2 text-xs">
            {it.external ? (
              <a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover hover:underline"
              >
                {it.cta} →
              </a>
            ) : (
              <Link
                href={it.href}
                className="text-accent hover:text-accent-hover hover:underline"
              >
                {it.cta} →
              </Link>
            )}
          </p>
        )}
      </div>
    </article>
  )
}

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
          <InterestCard key={it.title} it={it} />
        ))}
      </section>

      <br />
      <br />
    </Fragment>
  )
}
