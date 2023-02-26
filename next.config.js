/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  env: {
    GITHUB_USERNAME: "KingBael09",
    GITHUB_REPO_NAME: "Portfolio_Remake",
    FIRST_NAME: "Jayesh",
    LAST_NAME: "Singh",
    LOCATION: "India",
  },
};

module.exports = nextConfig;
