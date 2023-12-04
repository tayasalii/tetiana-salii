/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  eslint: {
    dirs: ['src'], // Only run ESLint on the 'src' directory during production builds (next build)
  },
};

module.exports = nextConfig;
