import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Add cache-control headers only in production
  async headers() {
    // Only apply caching headers in production
    if (process.env.NODE_ENV === "production") {
      return [
        {
          // Apply these headers to all routes in the application
          source: "/:path*",
          headers: [
            {
              key: "X-DNS-Prefetch-Control",
              value: "on",
            },
            {
              key: "X-XSS-Protection",
              value: "1; mode=block",
            },
            {
              key: "X-Frame-Options",
              value: "SAMEORIGIN",
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
          ],
        },
        {
          // Apply these headers to static assets in production only
          source: "/:path(.+\\.(?:jpg|jpeg|png|svg|webp|avif|ico|css|js))",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
    }

    // Return empty headers array for development to avoid caching
    return [];
  },
};

export default nextConfig;
