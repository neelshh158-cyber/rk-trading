/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.image2url.com",
      },
    ],
  },
};

export default nextConfig;