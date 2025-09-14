// src/app/robots.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://url-targeting-lp.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // 任意: 触られたくないパスがあれば disallow を追加
      // disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
