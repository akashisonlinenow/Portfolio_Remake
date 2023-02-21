/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  env: {
    gitUser: "KingBael09",
    fName: "Jayesh",
    lName: "Singh",
    location: "India",
    repo: "Portfolio_Remake",
  },
};

module.exports = nextConfig;
