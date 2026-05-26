import type { MetadataRoute } from 'next'

const BASE_URL = 'https://freya117-com.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  // Static routes for Stage 1. Dynamic project routes are added in Stage 6 (Task 6.4)
  // when the MDX content collection lands.
  return [
    { url: `${BASE_URL}/`, lastModified: now },
    { url: `${BASE_URL}/research`, lastModified: now },
    { url: `${BASE_URL}/teaching`, lastModified: now },
    { url: `${BASE_URL}/cv`, lastModified: now },
    { url: `${BASE_URL}/news`, lastModified: now },
  ]
}
