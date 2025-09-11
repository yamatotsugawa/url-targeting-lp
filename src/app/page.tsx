"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Page() {
  const formRef = useRef<HTMLDivElement>(null);
  const goContact = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      {/* Header */}
      <header className="border-b border-orange-200/70 bg-orange-50/70 backdrop-blur supports-[backdrop-filter]:bg-orange-50/50 sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500" />
            <p className="font-bold tracking-wide text-stone-700">URLターゲティング</p>
          </div>
          <button
            onClick={goContact}
            className="rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold shadow transition-colors"
          >
            無料相談
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center bg-gradient-to-b from-orange-50/50 to-white">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          URLターゲティング営業資料
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-stone-900 mb-4">
          短期で成果を出すために<br />
          <span className="text-orange-600">&ldquo;顕在化した顧客&rdquo;だけを狙い撃ち</span>
        </h1>
        <p className="mt-2 text-lg md:text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
          成果に直結する広告運用「URLターゲティング」のご提案資料
        </p>

        {/* プロセス図解 */}
        <div className="mt-10 flex justify-center items-center gap-4 max-w-5xl mx-auto">
          <ProcessCard icon="🔍" label="なんとなく調べる繁雑顧客ではなく" />
          <Arrow />
          <ProcessCard icon="🎯" label="意志の強い顕在顧客「だけ」に広告を表示" accent />
          <Arrow />
          <ProcessCard icon="📈" label="コンバージョン率向上 × 成果直結型広告" />
        </div>

        {/* Benefit KPIs */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <BenefitCard kpi="最大30件" label="競合URLの指定が可能" />
          <BenefitCard kpi="継続率90%" label="選ばれ続ける運用品質" accent />
          <BenefitCard kpi="400社" label="実績（多業種で活用）" />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goContact}
            className="rounded-xl bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            無料相談を申し込む
          </button>
          <button
            onClick={() => document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-xl border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 font-semibold transition-colors"
          >
            サービス詳細を見る
          </button>
        </div>
      </section>

      {/* URLターゲティングとは */}
      <section id="concept" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">URLターゲティングとは</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* 従来の問題 */}
            <div className="bg-red-50 rounded-2xl p-8 ring-1 ring-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4 text-center">広告の本質的な問題</h3>
              <p className="text-center text-red-700 font-semibold mb-6">潜在顧客や非顧客にも届いている</p>
              <div className="flex items-center justify-center gap-2 text-red-600">
                <span>❌</span>
                <p className="text-sm">無駄な配信が多く、本当に必要な層に届いていない</p>
              </div>
            </div>

            {/* URLターゲティングの解決 */}
            <div className="bg-green-50 rounded-2xl p-8 ring-1 ring-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4 text-center">顕在顧客に直球で</h3>
              <p className="text-center text-green-700 font-semibold mb-6">ピンポイントで届く、新発想の広告配信</p>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <span>⭕</span>
                <p className="text-sm">顕在顧客に絞った広告配信、無駄打ちゼロ</p>
              </div>
            </div>
          </div>

          {/* レポートダッシュボード画像を大きく表示 */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">従来の広告との違い</h3>
            <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-orange-200 max-w-4xl mx-auto">
              <Image
                src="/report-dashboard.jpg"
                alt="従来の広告との違い"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* サービスの仕組み */}
      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">サービスの仕組み</h2>
          
          {/* about.png画像のみを表示 */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-orange-200 max-w-5xl mx-auto">
              <Image
                src="/about.png"
                alt="サービスの仕組み"
                width={1000}
                height={700}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 利用例セクション */}
      <UseCaseSection />

      {/* 料金体系 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">料金体系</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              tier="まずはお試し"
              clicks="1000クリック"
              price="¥150,000"
              features={[
                "初回バナー制作：無料",
                "サイト分析：無料", 
                "競合他社分析：無料",
                "初期設定費：約8万円",
                "広告表示回数/月：約10万回",
                "指定URL数：最大30個",
                "最低利用期間：6ヶ月"
              ]}
            />
            <PricingCard
              tier="成果を感じて頂けたら"
              clicks="2000クリック"
              price="¥250,000"
              features={[
                "初回バナー制作：無料",
                "サイト分析：無料",
                "競合他社分析：無料", 
                "初期設定費：約8万円",
                "広告表示回数/月：約10万回",
                "指定URL数：最大30個",
                "最低利用期間：6ヶ月"
              ]}
              accent
            />
            <PricingCard
              tier="最大限に効果を出す"
              clicks="3000クリック"
              price="¥350,000"
              features={[
                "初回バナー制作：無料",
                "サイト分析：無料",
                "競合他社分析：無料",
                "初期設定費：約8万円", 
                "広告表示回数/月：約10万回",
                "指定URL数：最大30個",
                "最低利用期間：6ヶ月"
              ]}
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-stone-600 mb-4">💰 その他オプションサービス</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-stone-700">
              <span>• LP制作：5万円〜</span>
              <span>• リアル営業お見積り（首都圏）</span>
              <span>• その他：相談ください</span>
            </div>
          </div>
        </div>
      </section>

      {/* 動画セクション */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">サービス説明動画</h2>
          <p className="text-stone-700 mb-8">URLターゲティングの仕組みと効果を分かりやすく解説</p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/65a5V-A0x48"
                title="URLターゲティングサービス説明動画"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 text-center mb-12">よくある質問</h2>
          <div className="space-y-6">
            <FAQItem
              question="最小予算はいくらから始められますか？"
              answer="月額15万円（1000クリック）から開始可能です。初期設定費として約8万円が別途必要となります。"
            />
            <FAQItem
              question="どのような業界でも利用できますか？"
              answer="BtoB/BtoCを問わず、競合他社が存在し比較検討が発生する業界で効果を発揮します。特に歯科、インバウンド、スポーツジム、採用分野で高い成果を上げています。"
            />
            <FAQItem
              question="効果はどのように測りますか？"
              answer="専用レポートで表示回数／CTR／クリック数を可視化。競合サイト別の効果も確認でき、施策の見直しや予算配分をデータで判断できます。"
            />
            <FAQItem
              question="競合URL以外のターゲティングは可能ですか？"
              answer="はい。特定のアプリ利用者や、地域・性別・年齢での絞り込みも併用可能です。最大30件までURL・アプリを指定できます。"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは無料相談から</h2>
          <p className="text-lg mb-8 opacity-90">
            競合URLの初期提案と、現状分析の結果をもとに最適な運用プランをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={goContact}
              className="rounded-xl bg-white text-orange-600 hover:bg-gray-50 px-8 py-4 font-semibold shadow-lg transition-all hover:shadow-xl"
            >
              今すぐ無料相談を申し込む
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} id="contact" className="mx-auto max-w-3xl px-5 py-14">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 text-center mb-4">無料相談申し込み</h2>
        <p className="text-stone-700 text-center mb-8">
          30分オンラインで、現状ヒアリングと配信の初期提案をいたします。<br />
          お気軽にお問い合わせください。
        </p>
        <div className="rounded-2xl bg-white shadow-lg ring-1 ring-orange-200/60 p-8">
          <ContactForm />
          <p className="mt-4 text-xs text-stone-500 text-center">
            送信先：info@yamato-ai.jp<br />
            株式会社やまと<br />
            ※ 送信いただいた情報は適切に管理し、営業目的以外では使用いたします。
          </p>
        </div>
      </section>

      <footer className="bg-stone-50 text-center text-sm text-stone-500 py-8">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500" />
            <p className="font-bold tracking-wide text-stone-700">URLターゲティング</p>
          </div>
          <p>© 2025年9月11日 株式会社やまと All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

/* ===== Components ===== */

function BenefitCard({ kpi, label, accent = false }: { kpi: string; label: string; accent?: boolean }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border ${accent ? "border-orange-300" : "border-orange-100"}`}>
      <div className={`text-3xl font-extrabold ${accent ? "text-orange-700" : "text-orange-600"} mb-1`}>{kpi}</div>
      <div className="text-stone-800 font-medium">{label}</div>
    </div>
  );
}

function ProcessCard({ icon, label, accent = false }: { icon: string; label: string; accent?: boolean }) {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-sm border text-center min-w-[200px] ${accent ? "border-orange-300 bg-orange-50" : "border-orange-100"}`}>
      <div className="text-2xl mb-2">{icon}</div>
      <div className={`text-sm font-medium ${accent ? "text-orange-800" : "text-stone-800"}`}>{label}</div>
    </div>
  );
}

function Arrow() {
  return <div className="text-orange-500 text-2xl">→</div>;
}

function UseCaseSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">活用事例</h2>
        
        <div className="space-y-16">
          {/* インバウンド事例1 */}
          <UseCaseCard
            title="インバウンド利用例1"
            imageName="inbound-case1.jpg"
            subtitle="訪日中の外国人観光客の「今、必要」に応える"
            description="海外旅行者の行動パターンをターゲティング"
            features={[
              "ホテル・旅館への予約誘導",
              "飲食店への来店促進", 
              "体験ツアーの事前予約"
            ]}
          />

          {/* インバウンド事例2 */}
          <UseCaseCard
            title="インバウンド利用例2"
            imageName="inbound-case2.jpg"
            subtitle="訪日中の外国人観光客の「今、必要」に応える"
            description="言語と地域を掛け合わせた精密ターゲティング"
            features={[
              "英語メニューレストラン",
              "外国人対応医療機関"
            ]}
          />

          {/* 歯医者事例 */}
          <UseCaseCard
            title="歯医者利用例"
            imageName="dental-case.jpg"
            subtitle="SEO1位HPやLINE公式ページを見ている本当に欲しい顧客だけにアプローチ"
            description="検索キーワード別に競合上位を特定"
            features={[
              "「埼玉 インプラント」川越歯科 矯正歯科のSEO1位をターゲティング",
              "競合のLINE登録者も獲得",
              "競合クリニックのLINE友達登録者を見ただけで広告を表示"
            ]}
          />

          {/* スポーツジム事例 */}
          <UseCaseCard
            title="スポーツジム利用例"
            imageName="gym-case.jpg"
            subtitle="競合ジムの解約意向ユーザーに直接アプローチし、新規顧客獲得"
            description="チョコザップや24hジムなどの解約ページを閲覧したユーザーだけを特定"
            features={[
              "ユーザーが競合ジムに不満",
              "解約ページを閲覧", 
              "このタイミングで貴社の広告を配信！"
            ]}
            metrics={{
              normal: "CVR: 0.5〜1.0%",
              urlTargeting: "CVR: 3.0〜5.0%"
            }}
          />

          {/* 採用事例 */}
          <UseCaseCard
            title="採用利用例"
            imageName="recruitment-case.jpg"
            subtitle="優秀な人材をピンポイントで獲得する革新的なアプローチ"
            description="競合他社や業界大手の採用ページを閲覧しているユーザーを特定"
            features={[
              "採用コスト削減",
              "応募者向上",
              "採用スピード向上"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({ 
  title, 
  imageName, 
  subtitle, 
  description, 
  features, 
  metrics 
}: { 
  title: string; 
  imageName: string; 
  subtitle: string; 
  description: string; 
  features: string[]; 
  metrics?: { normal: string; urlTargeting: string }; 
}) {
  return (
    <div className="text-center">
      {/* タイトルを画像の上に */}
      <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">{title}</h3>
      
      {/* 画像を大きく表示 */}
      <div className="mb-6">
        <Image
          src={`/${imageName}`}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-auto rounded-2xl shadow-lg ring-1 ring-orange-200 max-w-4xl mx-auto"
        />
      </div>
      
      {/* サブタイトルを画像の下に */}
      <p className="text-lg md:text-xl text-stone-700 font-semibold mb-8">{subtitle}</p>
      
      {/* 詳細情報 */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="text-left">
            <p className="text-stone-800 mb-4">{description}</p>
            
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-stone-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {metrics && (
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 gap-4 text-center">
                <div>
                  <p className="text-sm text-stone-600">通常広告</p>
                  <p className="font-bold text-stone-800 text-lg">{metrics.normal}</p>
                </div>
                <div className="text-2xl">↓</div>
                <div>
                  <p className="text-sm text-stone-600">URLターゲティング広告</p>
                  <p className="font-bold text-orange-600 text-xl">{metrics.urlTargeting}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PricingCard({ 
  tier, 
  clicks, 
  price, 
  features, 
  accent = false 
}: { 
  tier: string; 
  clicks: string; 
  price: string; 
  features: string[]; 
  accent?: boolean; 
}) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg ring-1 ${accent ? "ring-orange-300 bg-orange-50" : "ring-orange-200"}`}>
      <div className={`text-center mb-6 ${accent ? "text-white bg-orange-500" : "text-orange-600 bg-orange-100"} rounded-xl py-3`}>
        <h3 className="font-bold">{tier}</h3>
      </div>
      
      <div className="text-center mb-6">
        <div className="text-sm text-stone-600 mb-1">クリック数/月（目安）</div>
        <div className="text-2xl font-bold text-stone-900 mb-2">{clicks}</div>
        <div className="text-sm text-stone-600 mb-1">月額利用料（システム利用料、広告配信）</div>
        <div className="text-3xl font-extrabold text-orange-600">{price}</div>
      </div>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <span className="text-orange-500">⭕</span>
            <span className={`${feature.includes('無料') ? 'text-red-600 font-bold' : 'text-stone-700'}`}>
              {feature.includes('無料') ? (
                <span className="bg-red-100 px-2 py-1 rounded text-red-700 font-bold">
                  {feature}
                </span>
              ) : (
                feature
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 rounded-xl transition-colors"
      >
        <span className="font-medium text-stone-900">{question}</span>
        <span className={`text-orange-600 transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      {isOpen && <div className="px-6 pb-4 text-stone-700">{answer}</div>}
    </div>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      siteUrl: String(fd.get("siteUrl") ?? ""),
      message: String(fd.get("message") ?? ""),
      startedAt: String(fd.get("startedAt") ?? ""),
      fax: String(fd.get("fax") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j?.error ?? `Server Error (${res.status})`);
      }

      form.reset();
      setSent(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "送信に失敗しました。時間をおいて再度お試しください。"
      );
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="space-y-6 text-center">
        <div className="rounded-2xl bg-emerald-50 ring-1 ring-emerald-200 px-6 py-10">
          <h3 className="text-2xl font-extrabold text-emerald-800 mb-2">
            送信ありがとうございました！
          </h3>
          <p className="text-stone-700">
            担当より日程調整のご連絡を差し上げます。
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="fax" tabIndex={-1} autoComplete="off" className="hidden" />
      <input type="hidden" name="startedAt" value={String(Date.now())} />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-stone-700">お名前 *</label>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
            placeholder="山田太郎"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-stone-700">会社名</label>
          <input
            name="company"
            className="w-full rounded-lg border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
            placeholder="株式会社◯◯◯"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-stone-700">メールアドレス *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
            placeholder="example@company.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-stone-700">電話番号</label>
          <input
            type="tel"
            name="phone"
            className="w-full rounded-lg border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
            placeholder="03-1234-5678"
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-stone-700">HPのURL</label>
        <input
          type="url"
          name="siteUrl"
          placeholder="https://example.com"
          className="w-full rounded-lg border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all"
          autoComplete="url"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-stone-700">
          ご相談内容 <span className="text-stone-400 text-xs">(任意)</span>
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full rounded-lg border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition-all resize-none"
          placeholder="現状の課題や知りたいこと（空欄でもOK）"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        disabled={loading}
        className="w-full rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white px-6 py-4 font-semibold shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed"
      >
        {loading ? "送信中..." : "無料相談を申し込む"}
      </button>
    </form>
  );
}
