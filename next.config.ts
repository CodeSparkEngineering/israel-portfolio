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
  images: {
    remotePatterns: [
      // Decorative 3D props (About section)
      { protocol: 'https', hostname: 'shrug-person-78902957.figma.site' },
    ],
  },
}

export default nextConfig
