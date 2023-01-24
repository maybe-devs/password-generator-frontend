/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PASSWORD_URL: process.env.PASSWORD_URL,
  },
};

module.exports = nextConfig;
