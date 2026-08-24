import type { NextConfig } from 'next';

const isGitHubPages =
  process.env.GITHUB_ACTIONS === 'true' ||
  process.env.BUILD_TARGET === 'github-pages';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      trailingSlash: true,
      basePath: '/babylon',
      assetPrefix: '/babylon',
      turbopack: { root: process.cwd() },
    }
  : { turbopack: { root: process.cwd() } };

export default nextConfig;
