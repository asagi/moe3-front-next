/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'prefixIds',
                active: false
              }
            ]
          }
        }
      }
    });
    return config;
  }
};

module.exports = nextConfig;
