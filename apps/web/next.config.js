/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
