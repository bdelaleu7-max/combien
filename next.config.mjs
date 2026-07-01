/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // En prod : autorise les images des flux d'affiliation (Amazon, Jumia, etc.).
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};
export default nextConfig;
