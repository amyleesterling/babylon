import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/babylon',
  assetPrefix: '/babylon',
  turbopack: { root: process.cwd() },
};

export default nextConfig;
