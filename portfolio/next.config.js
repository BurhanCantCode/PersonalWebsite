/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'prod.spline.design'],
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@splinetool/react-spline'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@splinetool/runtime': '@splinetool/runtime'
    };
    return config;
  }
};

module.exports = nextConfig; 