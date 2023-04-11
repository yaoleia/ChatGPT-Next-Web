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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: "standalone",
};

module.exports = nextConfig;
