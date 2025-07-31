/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure basePath if your portfolio is not deployed at the root of the domain
  // basePath: '/portfolio',
};

export default nextConfig;
