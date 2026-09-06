import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → apex, permanent, keeping the path. Avoids duplicate content for SEO.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.israelvieira.com' }],
        destination: 'https://israelvieira.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
