// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://url-targeting-lp.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/thanks`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // 追加の公開ページがあればここに追記
  ];
}
