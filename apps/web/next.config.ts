/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@arrow-ecommerce/ui", "@arrow-ecommerce/utils"],
  experimental: {
    turbo: {
      resolveAlias: {
        "@arrow-ecommerce/ui": "../packages/ui/src",
        "@arrow-ecommerce/utils": "../packages/utils/src",
      },
    },
  },
};

export default nextConfig;
