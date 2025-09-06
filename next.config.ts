import type { NextConfig } from "next";

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'page.gensparksite.com',
        port: '',
        pathname: '/v1/base64_upload/**',
      },
    ],
  },
}

module.exports = nextConfig
