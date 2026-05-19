/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next-local",
  images: {
    formats: ["image/avif", "image/webp"]
  }
};
export default nextConfig;
