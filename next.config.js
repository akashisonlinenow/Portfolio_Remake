/** @type {import('next').NextConfig} */
const shouldAnalyzeBundles = process.env.ANALYZE === "true";

let nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer =
    require("next-bundle-analyzer")(/* options come there */);
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
