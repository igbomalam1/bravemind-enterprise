/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
    imageSizes: [150, 300, 600, 800, 1200],
    domains: process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN
      ? [process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN]
      : [],
  },
  async headers() {
    return [
      {
        source: '/:all*(png|jpg|jpeg|svg|webp|avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
