type Featured = { label: string; href: string }

type Pillar = {
  number: string
  title: string
  description: string
  featured: Featured[]
}

// Rule: only include a 'Featured' item if it has a real public destination
// (paper, journal, sciencedirect, repo, etc). Internal anchors that scroll
// to a card are fine when the project still appears on /projects; if the
// project is hidden or no good external link exists, omit the item.
const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Vision-Language Models for Spatial Scenes',
    description:
      'Multimodal models that parse social interactions, urban form, and built environments from imagery and street-view data.',
    featured: [
      {
        label: 'MINGLE',
        href: 'https://ojs.aaai.org/index.php/AAAI/article/view/41239',
      },
    ],
  },
  {
    number: '02',
    title: 'Spatial Representation Learning',
    description:
      'Graph-based and geometric embeddings for trajectories, road networks, and neighborhood archetypes.',
    featured: [
      {
        label: 'Maine Pedestrian Model',
        href: 'https://rip.trb.org/View/2554000',
      },
      {
        label: 'Automated Urban Archetypes',
        href: 'https://www.sciencedirect.com/science/article/pii/S0378778826005645',
      },
    ],
  },
  {
    number: '03',
    title: 'LLM Reasoning with Structured Spatial Data',
    description:
      'Integrating geospatial, sensor, and tabular data into LLM workflows for spatial analysis and diagnostic systems.',
    featured: [],
  },
]

export default function ResearchAreas() {
  return (
    <section className="mt-16 mb-8">
      <div className="flex items-center mb-6 space-x-3">
        <h2 className="mt-3 mb-2 uppercase tracking-[.2em] text-accent text-sm font-semibold">
          RESEARCH AREAS
        </h2>
      </div>

      <div className="space-y-6">
        {pillars.map((pillar) => (
          <article key={pillar.number} className="text-sm leading-relaxed">
            <div className="flex items-baseline gap-3">
              <span className="text-fore-subtle tabular-nums text-xs">
                {pillar.number}
              </span>
              <h3 className="font-semibold text-fore-primary">
                {pillar.title}
              </h3>
            </div>
            <p className="mt-1 ml-8 text-fore-secondary">
              {pillar.description}
            </p>
            {pillar.featured.length > 0 && (
              <div className="mt-1 ml-8 text-xs text-fore-subtle">
                {pillar.featured.map((item, i) => (
                  <span key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-accent hover:text-accent-hover hover:underline"
                    >
                      {item.label}
                    </a>
                    {i < pillar.featured.length - 1 && (
                      <span>, </span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
