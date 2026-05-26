import { publications, Publication } from './publications'

// Homepage Selected Publications (3 chosen 2026-05-26):
//   MINGLE · Beyond Prompts · Automated urban archetypes
// (GeoSense-LLM excluded — manuscript not yet at publishable maturity)
const SELECTED_TITLES = [
  'MINGLE: VLMs for Semantically Complex Region Detection in Urban Scenes',
  'Beyond Prompts: A reference-based interaction framework for generative AI in design fields',
  'Automated urban archetypes: Integrating urban morphology and topology for scalable urban building energy modeling',
]

export const selectedPublications: Publication[] = SELECTED_TITLES.map(
  (title) => {
    const found = publications.find((p) => p.title === title)
    if (!found) {
      throw new Error(`Selected publication not found in data/publications.ts: ${title}`)
    }
    return found
  }
)
