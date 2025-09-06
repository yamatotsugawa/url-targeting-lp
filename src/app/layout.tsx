export const metadata = {
  title: "Adaim | URLターゲティング広告",
  description:
    "スライドそのままのトーンで、シンプルに要点だけ。最後はお問い合わせで完結するLP。",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="antialiased bg-amber-50 text-stone-800">{children}</body>
    </html>
  );
}
