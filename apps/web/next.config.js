/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: ['ui', 'utils'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
