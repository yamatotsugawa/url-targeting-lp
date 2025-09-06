import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 画像最適化は使っていないが、将来 <Image> を使う場合にビルドを安定させるための保険
  images: {
    unoptimized: true,
  },

  // ビルドで ESLint/TS をちゃんと効かせたいので明示（必要に応じて true に変更可）
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
