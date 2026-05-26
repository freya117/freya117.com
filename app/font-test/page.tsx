// TEMPORARY A/B page — delete after Task 2.3 selection
const numbers = ['01', '02', '03']

const samplePillar = {
  title: 'Vision-Language Models for Spatial Scenes',
  description:
    'Multimodal models that parse social interactions, urban form, and built environments from imagery and street-view data.',
}

function FontRow({
  label,
  fontClass,
}: {
  label: string
  fontClass: string
}) {
  return (
    <section className="border-t border-fore-subtle/20 pt-8 pb-12">
      <div className="text-xs uppercase tracking-[.2em] text-fore-subtle mb-6">
        {label}
      </div>

      {/* Standalone digit row */}
      <div className="flex gap-12 mb-10">
        {numbers.map((n) => (
          <span
            key={n}
            className={`${fontClass} text-6xl text-fore-subtle leading-none`}
          >
            {n}
          </span>
        ))}
      </div>

      {/* In-context row: pillar 01 with that font */}
      <article className="grid grid-cols-[auto_1fr] gap-6 md:gap-10">
        <div
          className={`${fontClass} text-4xl md:text-5xl text-fore-subtle leading-none`}
        >
          01
        </div>
        <div>
          <h3 className="text-xl font-semibold text-fore-primary mb-2">
            {samplePillar.title}
          </h3>
          <p className="text-base text-fore-secondary leading-relaxed">
            {samplePillar.description}
          </p>
        </div>
      </article>
    </section>
  )
}

export default function FontTestPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Pillar serif A/B</h1>
      <p className="text-fore-secondary">
        Three candidates rendered standalone (large) and in the actual pillar context.
        Pick the one that feels right for the 01/02/03 numbers on the homepage.
      </p>

      <FontRow label="A · Fraunces" fontClass="font-serif-fraunces" />
      <FontRow label="B · Libre Caslon Text" fontClass="font-serif-caslon" />
      <FontRow label="C · Source Serif 4" fontClass="font-serif-source" />
    </div>
  )
}
