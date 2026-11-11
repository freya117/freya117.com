/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16 only serves image qualities listed here (default [75]).
  // Portrait on the homepage uses quality={85}.
  images: { qualities: [75, 85] },
  async redirects() {
    return [
      // Old Jekyll URLs → new IA
      { source: '/about', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      // /research existed transiently during Stage 4 (merged publications + projects).
      // Now publications and projects are separate; /research redirects to projects.
      { source: '/research', destination: '/projects', permanent: true },
    ]
  },
}

module.exports = nextConfig
