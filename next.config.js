const { parsed: localEnv } = require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PASSWORD_API: process.env.PASSWORD_API,
  },
};

module.exports = nextConfig;
