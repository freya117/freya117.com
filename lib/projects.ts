import fs from 'fs'
import path from 'path'
import globby from 'globby'
import matter from 'gray-matter'

const PROJECTS_DIR = 'content/projects'

export type ProjectFrontmatter = {
  title: string
  slug: string
  year: number              // used for sort order (desc)
  yearDisplay?: string      // optional override of the displayed label (e.g. '2025 – 2026')
  tags: string[]
  featured?: boolean
  hidden?: boolean // when true, excluded from /projects listing
  thumbnail?: string
  description?: string // 1-line summary used in grid cards
  links?: {
    github?: string
    paper?: string
    demo?: string
    project?: string // external project page
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
  return items
    .filter((p) => !p.hidden)
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
}
