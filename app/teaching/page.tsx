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
}

const entries: TeachingEntry[] = [
  {
    title: 'Kaufman Teaching Certificate Program',
    role: 'MIT Teaching and Learning Lab · Cohort participant',
    period: 'Sep 2025 – Present',
    image: '/teaching/kaufman-certificate.jpg',
    description: [
      'Developed AI for Sustainable Urban Energy Systems as a complete course package — description, week-by-week syllabus, unit-level ILOs, formative & summative assessments, rubrics, and active-learning lesson plans.',
      'Completed 8 workshops and delivered 2 microteaching sessions; applied assessment alignment, scaffolding, inclusive teaching, and structured feedback to iterate materials based on peer and instructor review.',
    ],
  },
  {
    title: 'Teaching Assistant · MIT Cybersecurity Clinic',
    role: '11.074 / 11.274 — Supervisors: Lawrence Susskind & Jungwoo Chun',
    period: 'Fall 2025 & Spring 2026',
    image: '/teaching/cybersecurity-clinic.jpg',
    description: [
      "Supported student teams' end-to-end Cybersecurity Vulnerability Assessments for public agencies and hospitals — data collection, threat modeling, mitigation planning. Aligned deliverables with NIST Cybersecurity Framework standards.",
      'Provided technical guidance on network security, supply-chain vulnerabilities, vendor risk management, and ransomware readiness. Led recitations on client-interview prep, data analysis workflows, and secure-collaboration tools (Dropbox, CISA Toolkit).',
    ],
  },
  {
    title: 'Teaching Assistant · Modeling Pedestrian Activity in Cities',
    role: 'MIT 11.024 / 11.324 — Supervisor: Andres Sevtsuk',
    period: 'Spring 2025 · Jan – May 2025',
    image: '/teaching/pedestrian-modeling.jpg',
    description: [
      'Supported student teams in spatial analysis, pedestrian modeling, and proposal development to enhance walkability and public-realm design in Kendall Square — in collaboration with the Cambridge Redevelopment Authority and community partners.',
      'Guided hands-on training in GIS, network-based pedestrian analysis, and spatial modeling in Python — enabling students to assess pedestrian accessibility, simulate urban-design impacts, and produce data-driven planning proposals.',
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
        {entries.map((e) => (
          <article
            key={e.title}
            className="grid md:grid-cols-[160px_1fr] gap-5 md:gap-6"
          >
            {e.image && (
              <div className="relative w-full md:w-[160px] aspect-[4/3] rounded overflow-hidden bg-back-subtle shrink-0">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
            )}
            <div>
              <h3 className="text-base font-semibold text-fore-primary">
                {e.title}
              </h3>
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
        ))}
      </div>

      <br />
      <br />
    </Fragment>
  )
}
