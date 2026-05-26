export type Publication = {
  title: string
  authors: string[]
  venue: string
  year: number
  image?: string
  paperLink?: string
  arxivLink?: string
  pdfLink?: string
  codeLink?: string
  projectLink?: string
  videoLink?: string
  demoLink?: string
  status?: 'published' | 'accepted' | 'under-review' | 'in-submission'
}

// All Freya's publications — sorted by year desc.
// Note: this is the source of truth. Selected subset is derived in
// data/selectedPublications.ts and used on the homepage.
export const publications: Publication[] = [
  {
    title:
      'MINGLE: VLMs for Semantically Complex Region Detection in Urban Scenes',
    authors: [
      'Liu Liu',
      'Alexandra Schild',
      'Marco Cipriano',
      'Fatimeh Al Ghannam',
      'Freya Tan',
      'Gerard de Melo',
      'Andres Sevtsuk',
    ],
    venue: 'AAAI 2026',
    year: 2026,
    image: '/images/publication/mingle.jpg',
    paperLink: 'https://ojs.aaai.org/index.php/AAAI/article/view/41239',
    arxivLink: 'https://arxiv.org/abs/2509.13484',
    status: 'published',
  },
  {
    title:
      'Sidewalk Moments: Decompose visual impressions based on dynamic city walk video footage',
    authors: ['Liu Liu', 'Freya Tan', 'Fabio Duarte'],
    venue: 'AAG 2026',
    year: 2026,
    image: '/images/publication/sidewalk-moments.jpg',
    projectLink: '/projects/gist-blur-attention',
    status: 'accepted',
  },
  {
    title:
      'Local Government Cybersecurity: An Analysis of Vulnerability Assessments and Institutional Capacity',
    authors: [
      'Jungwoo Chun',
      'Freya Tan',
      'Cristine Chen',
      'Yuri Sakai',
      'Gabriel Rodriguez Castillo',
      'Lawrence Susskind',
    ],
    venue: 'Computers & Security',
    year: 2026,
    image: '/images/publication/cybersecurity.png',
    status: 'under-review',
  },
  {
    title:
      'Beyond Prompts: A reference-based interaction framework for generative AI in design fields',
    authors: [
      'Rohit Sanatani',
      'Richa Gupta',
      'Freya Tan',
      'Randall Davis',
      'Takehiko Nagakura',
    ],
    venue: 'HCI International 2026',
    year: 2026,
    image: '/images/publication/beyond-prompts.jpg',
    status: 'accepted',
  },
  {
    title:
      'Automated urban archetypes: Integrating urban morphology and topology for scalable urban building energy modeling',
    authors: ['Xinwei Zhuang', 'Freya Tan'],
    venue: 'Energy & Buildings',
    year: 2026,
    image: '/images/publication/neighborhood-archetypes.jpg',
    paperLink:
      'https://www.sciencedirect.com/science/article/pii/S0378778826005645',
    projectLink: '/projects/neighborhood-archetypes',
    status: 'published',
  },
  {
    title:
      'Seeing "HAI": Human Activities and Interactions Detection from Streetviews through LLMs',
    authors: [
      'Liu Liu',
      'Marco Cipriano',
      'Freya Tan',
      'Aleksandra Kudaeva',
      'Andres Sevtsuk',
    ],
    venue: 'ACSP 65th Annual Conference',
    year: 2025,
    image: '/images/publication/seeing-hai.jpg',
    projectLink: '/projects/sidewalk-ballet',
    status: 'published',
  },
  {
    title:
      'Chapter 4: Reimagining Education, Rewinding Valley: A New Knowledge-Production Vision for Salinas Valley',
    authors: ['Freya Tan', 'M. Yu', 'Y. Gogri'],
    venue:
      'Designing the Rural: Urban Design in Rural California, UC Berkeley',
    year: 2023,
    image: '/images/publication/salinas-valley.jpg',
    projectLink: '/projects/reimagining-salinas-valley',
    status: 'published',
  },
]
