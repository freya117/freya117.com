/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old Jekyll URL → new IA
      { source: '/about', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/publications', destination: '/research', permanent: true },
    ]
  },
}

module.exports = nextConfig
