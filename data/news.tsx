import { ReactNode } from 'react'

export type NewsItem = {
  date: string // MM/YYYY format for sortability
  content: ReactNode
}

// Starter set — Freya to refine wording / add more items.
// Inspired by the milestones listed in the design spec, Section 4.4.
export const newsItems: NewsItem[] = [
  {
    date: '05/2026',
    content: (
      <>
        - 🎓 Accepted to{' '}
        <a
          href="https://cs.nyu.edu/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          NYU CS PhD
        </a>
        ; will join the{' '}
        <a
          href="https://vida.engineering.nyu.edu/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          VIDA Center
        </a>{' '}
        with{' '}
        <a
          href="https://ctsilva.github.io/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          Claudio Silva
        </a>{' '}
        and{' '}
        <a
          href="https://www.geosimulation.org/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          Paul Torrens
        </a>
        .
      </>
    ),
  },
  {
    date: '01/2026',
    content: (
      <>
        - 📃 Our paper{' '}
        <a
          href="https://ojs.aaai.org/index.php/AAAI/article/view/41239"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          MINGLE
        </a>{' '}
        accepted to <strong>AAAI 2026</strong>.
      </>
    ),
  },
  {
    date: '01/2026',
    content: (
      <>
        - 📃 Our paper{' '}
        <a
          href="https://www.sciencedirect.com/science/article/pii/S0378778826005645"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          Automated urban archetypes
        </a>{' '}
        published in <strong>Energy &amp; Buildings</strong>.
      </>
    ),
  },
  {
    date: '08/2025',
    content: (
      <>
        - 💻 Joined{' '}
        <a
          href="https://www.csail.mit.edu/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          CSAIL
        </a>{' '}
        as Research Assistant under Randall Davis &amp; Takehiko Nagakura on LLM
        spatial intelligence (GeoSense-LLM).
      </>
    ),
  },
  {
    date: '08/2025',
    content: (
      <>
        - 🧑‍🏫 Started TA for{' '}
        <a
          href="https://urbancyberdefense.mit.edu/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          MIT 11.074/274 Cybersecurity Clinic
        </a>{' '}
        under Lawrence Susskind &amp; Jungwoo Chun.
      </>
    ),
  },
  {
    date: '06/2025',
    content: (
      <>
        - 🌆 Started{' '}
        <a
          href="https://freedomsummerfellowship.com/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          Freedom Summer Fellowship
        </a>{' '}
        with the City of Newark Office of Sustainability &amp; Emerald Cities
        Collaborative.
      </>
    ),
  },
  {
    date: '05/2025',
    content: <>- 🎨 Project featured at the Venice Architecture Biennale.</>,
  },
  {
    date: '01/2025',
    content: (
      <>
        - 🧑‍🏫 TA for{' '}
        <a
          href="https://mitxonline.mit.edu/courses/course-v1:MITxT+11.024x/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          MIT 11.024/324 Modeling Pedestrian Activity in Cities
        </a>{' '}
        under Andres Sevtsuk.
      </>
    ),
  },
]
