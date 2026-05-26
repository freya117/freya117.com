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
      { label: 'Seeing HAI', href: '/projects/sidewalk-ballet' },
      { label: 'Sidewalk Moments', href: '/projects/gist-blur-attention' },
    ],
  },
  {
    number: '02',
    title: 'Spatial Representation Learning',
    description:
      'Graph-based and geometric embeddings for trajectories, road networks, and neighborhood archetypes — bridging discrete spatial structure and continuous representation.',
    featured: [
      { label: 'Maine Pedestrian Model', href: '/projects/maine-pedestrian-model' },
      { label: 'Neighborhood Archetypes', href: '/projects/neighborhood-archetypes' },
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
      { label: 'Symmons Diagnostic', href: '/projects/symmons-water-management' },
    ],
  },
]

export default function ResearchAreas() {
  return (
    <section className="mt-24 mb-8">
      <div className="flex items-center mb-8 space-x-3">
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          RESEARCH AREAS
        </span>
      </div>

      <div className="space-y-12">
        {pillars.map((pillar) => (
          <article
            key={pillar.number}
            className="grid grid-cols-[auto_1fr] gap-6 md:gap-10"
          >
            <div className="font-serif-fraunces text-4xl md:text-5xl text-fore-subtle leading-none">
              {pillar.number}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fore-primary mb-2">
                {pillar.title}
              </h3>
              <p className="text-base text-fore-secondary leading-relaxed mb-3">
                {pillar.description}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <span className="text-fore-subtle">Featured:</span>
                {pillar.featured.map((item, i) => (
                  <span key={item.label}>
                    <a
                      href={item.href}
                      className="text-accent hover:text-accent-hover hover:underline"
                    >
                      {item.label}
                    </a>
                    {i < pillar.featured.length - 1 && (
                      <span className="text-fore-subtle"> ·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
