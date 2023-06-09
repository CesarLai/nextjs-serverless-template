const isProd = process.env.NODE_ENV === "production";

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  env: {
    STATIC_URL: isProd ? process.env.STATIC_URL : "",
  },
  assetPrefix: isProd ? process.env.STATIC_URL : "",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};
