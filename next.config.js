/** @type {import('next').NextConfig} */
const nextConfig = {
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
