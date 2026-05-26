import type { MetadataRoute } from 'next'

const BASE_URL = 'https://freya117-com.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  // Static routes for Stage 1. Dynamic project routes are added in Stage 6 (Task 6.4)
  // when the MDX content collection lands.
  return [
    { url: `${BASE_URL}/`, lastModified: now, priority: 1.0 },
    { url: `${BASE_URL}/research`, lastModified: now, priority: 0.8 },
    { url: `${BASE_URL}/teaching`, lastModified: now, priority: 0.6 },
    { url: `${BASE_URL}/cv`, lastModified: now, priority: 0.6 },
    { url: `${BASE_URL}/news`, lastModified: now, priority: 0.5 },
  ]
}
