/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com", "ichef.bbci.co.uk"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
