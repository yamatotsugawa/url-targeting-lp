// src/app/robots.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://url-targeting-lp.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
