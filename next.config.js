/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.countryflags.com", "api.lorem.space"],
  },
};

module.exports = nextConfig;
