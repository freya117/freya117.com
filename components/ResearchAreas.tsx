type Featured = { label: string; href: string }

type Pillar = {
  number: string
  title: string
  description: string
  featured: Featured[]
}

const pillars: Pillar[] = [
  {
    number: '01',
    title: 'Vision-Language Models for Spatial Scenes',
    description:
      'Multimodal models that parse social interactions, urban form, and built environments from imagery and street-view data.',
    featured: [
      { label: 'MINGLE', href: 'https://arxiv.org/abs/2509.13484' },
      { label: 'Seeing HAI', href: '/projects#sidewalk-ballet' },
      { label: 'Sidewalk Moments', href: '/projects#gist-blur-attention' },
    ],
  },
  {
    number: '02',
    title: 'Spatial Representation Learning',
    description:
      'Graph-based and geometric embeddings for trajectories, road networks, and neighborhood archetypes.',
    featured: [
      { label: 'Maine Pedestrian Model', href: '/projects#maine-pedestrian-model' },
      { label: 'Neighborhood Archetypes', href: '/projects#neighborhood-archetypes' },
    ],
  },
  {
    number: '03',
    title: 'LLM Reasoning with Structured Spatial Data',
    description:
      'Integrating geospatial, sensor, and tabular data into LLM workflows for spatial analysis and diagnostic systems.',
    featured: [
      { label: 'GeoSense-LLM', href: '#' },
      { label: 'Beyond Prompts', href: '#' },
      { label: 'Symmons Diagnostic', href: '/projects#symmons-water-management' },
    ],
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
            <div className="mt-1 ml-8 text-xs text-fore-subtle">
              {pillar.featured.map((item, i) => (
                <span key={item.label}>
                  <a
                    href={item.href}
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
          </article>
        ))}
      </div>
    </section>
  )
}
