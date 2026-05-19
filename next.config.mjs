/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === "1";

const nextConfig = {
  ...(isVercel ? {} : { distDir: ".next-local" }),
  images: {
    formats: ["image/avif", "image/webp"]
  }
};
export default nextConfig;
