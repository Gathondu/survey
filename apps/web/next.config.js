/** @type {import('next').NextConfig} */
const { parsed: surveyEnvs } = require("dotenv").config({
  path: "../../.env.local",
});
const webpack = require("webpack");
const nextConfig = {
  experimental: {
    externalDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(surveyEnvs));
    return config;
  },
};

module.exports = nextConfig;
