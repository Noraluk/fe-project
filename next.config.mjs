/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["raw.githubusercontent.com", "ichef.bbci.co.uk"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
