/** @type {import('next').NextConfig} */

const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

const nextConfig = {
  filename: "static/chunks/remoteEntry.js",
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};

module.exports = withFederatedSidecar(nextConfig);
