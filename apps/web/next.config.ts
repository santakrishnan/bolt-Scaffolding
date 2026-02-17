/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "utils"],
  images: {
    domains: ['www.figma.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "ui": "../packages/ui/src",
        "utils": "../packages/utils/src",
      },
    },
  },
};

export default nextConfig;
