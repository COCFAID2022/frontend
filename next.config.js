/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src/styles/mixins'),
      path.join(__dirname, 'src/styles/variables'),
    ],
  },
};

module.exports = nextConfig;
