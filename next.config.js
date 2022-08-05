const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

/** @type {import("next").NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  },
  images: {
    domains: ["tokens.1inch.io"]
  }
});
