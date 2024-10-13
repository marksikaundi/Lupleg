import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io", "www.lupleg.org"],
  },
};

export default withNextVideo(nextConfig);