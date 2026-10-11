import path from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: projectRoot,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'shribi.com' }],
        destination: 'https://www.shribi.com/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'shribi.com' }],
        destination: 'https://www.shribi.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
