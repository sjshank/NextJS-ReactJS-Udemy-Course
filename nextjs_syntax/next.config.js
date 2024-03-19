/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  // basePath: '/nextjs',
  async redirects() {
    return [
      {
        source: "/services/:path",
        destination: "/",
        permanent: true,
      },
    ];
  },
  experimental: {
    typedRoutes: true,
    // serverActions: {
    //   allowedOrigins: ["facebook.com"],
    // },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
    ],
  },
  devIndicators: {
    buildActivityPosition: "top-right",
    buildActivity: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
};

module.exports = nextConfig;
