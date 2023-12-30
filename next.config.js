/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables the new output file system that includes static HTML export.
  // Replace 'standalone' with 'export' if you want to mimic the behavior of `next export`.
  output: 'standalone',

  // Add any other custom Next.js configurations here.
  // For example, if you need to specify a base path or rewrites, you can do so.
  // basePath: '/your-base-path',
  // async rewrites() {
  //   return [
  //     // Your rewrite rules here
  //   ];
  // },
};

module.exports = nextConfig;
