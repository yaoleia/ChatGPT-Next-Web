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
    }); // 针对 SVG 的处理规则

    return config;
  }
};

if (process.env.DOCKER) {
  nextConfig.output = 'standalone'
}

module.exports = nextConfig;
