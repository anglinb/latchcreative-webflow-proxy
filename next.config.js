/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => ({
    fallback: [
      {
        source: "/:path*",
        destination: `https://latch-creative-co.webflow.io/:path*`,
      },
    ]
  })
}

module.exports = nextConfig
