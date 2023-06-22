/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '172.18.6.114',
        port: '5005',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '172.18.44.10',
        port: '5005',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig