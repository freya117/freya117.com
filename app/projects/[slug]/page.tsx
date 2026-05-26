import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjectSlugs } from '../../../lib/projects'
import { getMDXComponent } from 'mdx-bundler/client'

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  try {
    const { frontmatter } = await getProjectBySlug(params.slug)
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    }
  } catch {
    return {}
  }
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const { code, frontmatter } = await getProjectBySlug(params.slug)
  const Component = getMDXComponent(code)

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-fore-primary mb-2">
          {frontmatter.title}
        </h1>
        <p className="text-sm text-fore-subtle">
          {frontmatter.year}
          {frontmatter.tags?.length ? ' · ' + frontmatter.tags.join(' · ') : ''}
        </p>
        {frontmatter.description && (
          <p className="mt-3 text-fore-secondary">{frontmatter.description}</p>
        )}
      </header>

      {frontmatter.thumbnail && (
        <div className="mb-8 relative w-full aspect-[16/9] rounded overflow-hidden">
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none text-fore-primary">
        <Component />
      </div>

      <div className="mt-12 pt-8 border-t border-fore-subtle/20 text-sm">
        <a
          href="/research"
          className="text-accent hover:text-accent-hover hover:underline"
        >
          ← Back to research
        </a>
      </div>
    </article>
  )
}
