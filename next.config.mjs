/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            "key": "Cache-Control",
            "value": "private, no-cache, no-store, max-age=0, must-revalidate"
          },
          {
            "key": "Expires",
            "value": "0"
          }
        ],
      },
    ]
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    const ret = [];

    const apiUrl = process.env.API_URL;
    if (apiUrl) {
      console.log("[Next] using api url ", apiUrl);
      ret.push({
        source: "/api/:path*",
        destination: `${apiUrl}/:path*`,
      });
    }

    return ret;
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: "standalone",
};

export default nextConfig;
