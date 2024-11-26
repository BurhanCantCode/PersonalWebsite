/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'prod.spline.design'],
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@splinetool/react-spline'],
};

module.exports = nextConfig; 