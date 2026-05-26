import fs from 'fs'
import path from 'path'
import globby from 'globby'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

const PROJECTS_DIR = 'content/projects'

export type ProjectFrontmatter = {
  title: string
  slug: string
  year: number
  tags: string[]
  featured?: boolean
  thumbnail?: string
  description?: string // 1-line summary used in grid cards
  links?: {
    github?: string
    paper?: string
    demo?: string
    project?: string // external project page
  }
}

export type ProjectMdx = {
  code: string
  frontmatter: ProjectFrontmatter
}

function readProjectFile(slug: string) {
  return fs.readFileSync(
    path.join(process.cwd(), PROJECTS_DIR, `${slug}.mdx`),
    'utf8'
  )
}

export async function getProjectBySlug(slug: string): Promise<ProjectMdx> {
  const source = readProjectFile(slug)
  // mdx-bundler ^4.0 in this project uses positional (source, options) signature
  // (matches the pattern in lib/mdx.ts that Chaoran wrote).
  const { code, frontmatter } = await bundleMDX(source as any)
  return {
    code,
    frontmatter: {
      ...(frontmatter as Omit<ProjectFrontmatter, 'slug'>),
      slug,
    },
  }
}

export async function getAllProjects(): Promise<ProjectFrontmatter[]> {
  const paths = await globby([`${PROJECTS_DIR}/**/*.mdx`])
  const items = paths.map((filePath) => {
    const source = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(source)
    const slug = path.basename(filePath).replace('.mdx', '')
    return { ...(data as Omit<ProjectFrontmatter, 'slug'>), slug }
  })
  return items.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
}

export async function getProjectSlugs(): Promise<string[]> {
  const paths = await globby([`${PROJECTS_DIR}/**/*.mdx`])
  return paths.map((p) => path.basename(p).replace('.mdx', ''))
}
