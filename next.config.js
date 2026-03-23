/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/project.html',
      },
    ]
  },
}

module.exports = nextConfig
