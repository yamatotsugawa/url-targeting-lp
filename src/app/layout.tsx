import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://url-targeting-lp.vercel.app";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-B89SN5NFDV";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Adaim｜URLターゲティング – ライバルの顧客、堂々と取りにいく。",
    template: "%s | Adaim",
  },
  description:
    "競合サイトや特定アプリの利用者“だけ”へ配信。最大30件のURL指定×場所・性別・年齢の精密ターゲティング。継続率90%、導入400社超。",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Adaim",
    title: "Adaim｜URLターゲティング",
    description:
      "ライバルの顧客、堂々と取りにいく。競合URL閲覧者だけに配信する新しい広告。",
    images: [
      {
        url: "/ogp.jpg", // /public/ogp.jpg を用意してください
        width: 1200,
        height: 630,
        alt: "Adaim（URLターゲティング）",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adaim｜URLターゲティング",
    description:
      "ライバルの顧客、堂々と取りにいく。競合URL閲覧者だけに配信する新しい広告。",
    images: ["/ogp.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: { icon: "/favicon.ico" },
  viewport: {
    width: "device-width",
    initialScale: 1,
    themeColor: "#f59e0b", // amber-500
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Adaim（URLターゲティング）",
    url: SITE_URL,
    description:
      "競合URL・特定アプリ閲覧者だけに配信。継続率90%、導入400社超。",
    provider: { "@type": "Organization", name: "Adaim" },
    areaServed: "JP",
  };

  return (
    <html lang="ja">
      <body className="bg-amber-50 text-stone-800">
        {/* GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* JSON-LD（構造化データ） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
      </body>
    </html>
  );
}
