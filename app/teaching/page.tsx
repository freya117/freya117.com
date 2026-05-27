import { Metadata } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Teaching',
  description:
    'Teaching, TA experiences, and instructional development at MIT.',
}

type TeachingEntry = {
  title: string
  role: string
  period: string
  description: string[]
  image?: string
  link?: string
}

const entries: TeachingEntry[] = [
  {
    title: 'Kaufman Teaching Certificate Program',
    role: 'MIT Teaching and Learning Lab · Cohort participant',
    period: 'Sep 2025 – Dec 2025',
    image: '/teaching/kaufman-certificate.jpg',
    link: 'https://tll.mit.edu/programming/grad-student-programming/kaufman-teaching-certificate-program/',
    description: [
      'Designed a graduate course package on AI for sustainable urban energy systems — syllabus, intended learning outcomes, assessments, and active-learning lesson plans.',
      'Completed 8 workshops + 2 microteaching sessions on assessment alignment, scaffolding, and inclusive teaching.',
    ],
  },
  {
    title: 'Teaching Assistant · MIT Cybersecurity Clinic',
    role: '11.074 / 11.274 — Supervisors: Prof. Lawrence Susskind & Prof. Jungwoo Chun',
    period: 'Fall 2025 & Spring 2026',
    image: '/teaching/cybersecurity-clinic.jpg',
    link: 'https://urbancyberdefense.mit.edu/',
    description: [
      'Guided student teams through cybersecurity vulnerability assessments for public agencies and hospitals — threat modeling, mitigation planning, NIST-framework deliverables.',
      'Led weekly recitations on network security, vendor and supply-chain risk, ransomware readiness, and data analysis workflows.',
    ],
  },
  {
    title: 'Teaching Assistant · Modeling Pedestrian Activity in Cities',
    role: 'MIT 11.024 / 11.324 — Supervisor: Prof. Andres Sevtsuk',
    period: 'Spring 2025 · Jan – May 2025',
    image: '/teaching/pedestrian-modeling.jpg',
    link: 'https://mitxonline.mit.edu/courses/course-v1:MITxT+11.024x/',
    description: [
      'Taught Python-based spatial modeling, network analysis, and GIS for pedestrian flow estimation.',
      'Mentored student teams applying the methods to real urban scenarios in Kendall Square.',
      'Contributed to translating the course into an MITx open online module (MITxT+11.024x).',
    ],
  },
]

export default function TeachingPage() {
  return (
    <Fragment>
      <header className="mb-10">
        <h1 className="mt-3 mb-3 text-2xl font-bold text-accent">Teaching</h1>
        <p className="text-fore-secondary leading-relaxed max-w-2xl text-sm">
          Course assistantships, teaching-development training, and
          instructional materials I've contributed to at MIT.
        </p>
      </header>

      <div className="space-y-10">
        {entries.map((e) => {
          const Img = e.image && (
            <div className="relative w-full md:w-[160px] aspect-[4/3] rounded overflow-hidden bg-back-subtle shrink-0">
              <Image
                src={e.image}
                alt={e.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 160px"
              />
            </div>
          )
          return (
            <article
              key={e.title}
              className="grid md:grid-cols-[160px_1fr] gap-5 md:gap-6"
            >
              {Img &&
                (e.link ? (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={e.title}
                    className="block transition-opacity hover:opacity-85"
                  >
                    {Img}
                  </a>
                ) : (
                  Img
                ))}
              <div>
                <h2 className="text-base font-semibold text-fore-primary">
                  {e.link ? (
                    <a
                      href={e.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {e.title}
                    </a>
                  ) : (
                    e.title
                  )}
                </h2>
                <p className="text-sm text-fore-secondary mt-0.5">{e.role}</p>
                <p className="text-xs italic text-fore-subtle mt-0.5">
                  {e.period}
                </p>
                <ul className="text-sm text-fore-secondary mt-3 space-y-2 list-disc pl-5 leading-relaxed">
                  {e.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>

      <br />
      <br />
    </Fragment>
  )
}
