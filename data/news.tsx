import { ReactNode } from 'react'

export type NewsItem = {
  date: string // MM/YYYY format for sortability
  content: ReactNode
}

export const newsItems: NewsItem[] = [
  {
    date: '05/2026',
    content: (
      <>
        - 🎓 Accepted to the PhD program at the{' '}
        <a
          href="https://cs.nyu.edu/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          NYU Computer Science Department
        </a>
        ; will join the{' '}
        <a
          href="https://vida.engineering.nyu.edu/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          VIDA Center
        </a>
        .
      </>
    ),
  },
  {
    date: '04/2026',
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
        as Research Assistant under Prof. Randall Davis &amp; Prof. Takehiko
        Nagakura on LLM spatial intelligence (GeoSense-LLM).
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
        under Prof. Lawrence Susskind &amp; Dr. Jungwoo Chun.
      </>
    ),
  },
  {
    date: '06/2025',
    content: (
      <>
        - 🌆 Started the{' '}
        <a
          href="https://freedomsummerfellowship.com/"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          Freedom Summer Fellowship
        </a>
        .
      </>
    ),
  },
  {
    date: '05/2025',
    content: (
      <>
        - 🎨 <em>NYC Walks</em> and <em>Sidewalk Ballet</em>, two projects from
        MIT's{' '}
        <a
          href="https://cityform.mit.edu/projects/venice-architecture-biennale-2025"
          className="font-medium text-accent hover:text-accent-hover hover:underline"
        >
          City Form Lab
        </a>
        , on display at the <strong>Venice Architecture Biennale 2025</strong>{' '}
        — part of the MIT Architecture exhibition <em>The Next Earth</em> at
        Palazzo Diedo (May 10 – Nov 23, 2025).
      </>
    ),
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
        under Prof. Andres Sevtsuk.
      </>
    ),
  },
]
