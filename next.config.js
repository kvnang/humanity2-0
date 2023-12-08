/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/2023-forum",
        destination: "/forum/2023",
        permanent: true,
      },
      {
        source: "/2022-forum",
        destination: "/forum/2022",
        permanent: true,
      },
      {
        source: "/2019-forum",
        destination: "/forum/2019",
        permanent: true,
      },
      {
        source: "/2018-forum",
        destination: "/forum/2018",
        permanent: true,
      },
    ];
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
