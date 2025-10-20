/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // or 'export' if you want fully static
  trailingSlash: true,
  images: {
    unoptimized: true, // if you're using next/image
  },
}

module.exports = nextConfig