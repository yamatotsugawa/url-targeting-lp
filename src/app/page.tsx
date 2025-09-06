/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Page() {
  const formRef = useRef<HTMLDivElement>(null);
  const goContact = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      {/* Header */}
      <header className="border-b border-amber-200/70 bg-amber-50/70 backdrop-blur supports-[backdrop-filter]:bg-amber-50/50 sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500" />
            <p className="font-bold tracking-wide text-stone-700">Adaim | URLターゲティング</p>
          </div>
          <button
            onClick={goContact}
            className="rounded-xl bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 text-sm font-semibold shadow transition-colors"
          >
            無料相談
          </button>
        </div>
      </header>

      {/* Hero（挑戦的コピー） */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center bg-gradient-to-b from-amber-50/50 to-white">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          顧客奪取を直球で
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-stone-900 mb-4">
          ライバルの顧客、<span className="text-amber-600">堂々と取りにいく。</span>
        </h1>
        <p className="mt-2 text-lg md:text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed">
          競合サイトや特定アプリの利用者<span className="font-bold">“だけ”</span>へ配信。成果に直結する広告運用。
        </p>

        {/* Benefit KPIs */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <BenefitCard kpi="最大30件" label="競合URLの指定が可能" />
          <BenefitCard kpi="継続率90%" label="選ばれ続ける運用品質" accent />
          <BenefitCard kpi="400社以上" label="導入実績（多業種で活用）" />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goContact}
            className="rounded-xl bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            無料診断を申し込む
          </button>
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-xl border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-4 font-semibold transition-colors"
          >
            詳細を見る
          </button>
        </div>
      </section>

      {/* ★ 事例（2カード） */}
      <UseCases onContact={goContact} />

      {/* お悩み → 解決提示（ニーズ喚起） */}
      <section className="bg-stone-50 py-14">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 text-center mb-8">こんなお悩みはありませんか？</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <PainCard
              emoji="💸"
              title="毎月の広告費で10万円以上使っているが反応がイマイチ"
              desc="配信の“無駄打ち”が多く、CVに結びつかない。"
            />
            <PainCard
              emoji="📉"
              title="SEOで全然勝てない"
              desc="指名・比較の場で上位に出られず、見込み顧客を取り逃がしている。"
            />
          </div>

          {/* 解決ボックス */}
          <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm ring-1 ring-amber-200/70">
            <h3 className="text-xl font-bold text-stone-900 mb-2 text-center">その不満、Adaimが解決します。</h3>
            <ul className="grid md:grid-cols-3 gap-3 text-stone-700">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-500" /> 顕在層（競合URL閲覧者・特定アプリ利用者）だけに配信</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-500" /> URL最大30件＋場所×性別×年齢の精密ターゲティング</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-amber-500" /> レポートで可視化し、無駄配信を継続的に削減</li>
            </ul>
          </div>
        </div>
      </section>

      {/* スライド（画像4枚） */}
      <section id="features" className="py-12">
        <SlideBlock
          src="/slide-service.png"
          alt="Adaimサービス紹介"
          title="今使っている広告、本当に“届けたい人だけ”に届いていますか？"
          desc="“広く”ではなく、比較検討中の顧客（顕在層）だけへ。"
        />
        <SlideBlock
          src="/slide-feature.png"
          alt="Adaimの特徴"
          title="競合URL／特定アプリの利用者だけをターゲティング"
          desc="URLやアプリを最大30件まで指定。場所×性別×年齢も掛け合わせ可能。"
        />
        <SlideBlock
          src="/slide-analytics.png"
          alt="解析ツール"
          title="効果をレポートで即可視化"
          desc="表示回数／CTR／クリック数をレポートで確認。改善の判断が速くなります。"
        />
        <SlideBlock
          src="/slide-pricing.png"
          alt="料金"
          title="明確な料金体系"
          desc="はじめやすいクリック課金。詳細はご相談時にご案内します。"
        />
      </section>

      {/* おすすめ業種・事業者 */}
      <section className="py-12 bg-amber-50" id="recommended">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 text-center">
            こんな業種・事業者におすすめ
          </h2>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* 直接的な顧客 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-amber-200/60 flex flex-col h-full">
              <h3 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-stone-900" /> 直接的な顧客
              </h3>
              <p className="text-stone-800 mb-4 leading-relaxed">
                <u>月間30万円以上の広告費</u> を使って「集客・求人」をしている企業・個人
              </p>
              <div className="grid gap-4 text-stone-800">
                <div>
                  <div className="font-semibold text-stone-900 mb-1">（国内向け広告）</div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>フィットネス・ジム、外壁・リフォーム、インドアゴルフ</li>
                    <li>エアコン／洗濯機クリーニング、不動産（売買・賃貸）</li>
                    <li>エステ、運送、美容室、歯科</li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold text-stone-900 mb-1">（海外向け広告）</div>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>インバウンド向け全般（ホテル、旅館、料亭、着物レンタル、日本酒、医療）</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-100 text-sm text-stone-600">
                ※ 指名・比較の局面で取りこぼしが多いと感じる場合に特に効果的です。
              </div>
            </div>

            {/* 協業系 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-amber-200/60 flex flex-col h-full">
              <h3 className="text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-stone-900" /> 協業系
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-stone-800 flex-1">
                <li>各種コンサル</li>
                <li>WEB制作・WEBマーケティング</li>
                <li>求人代行</li>
                <li>ポスティング業者</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-amber-100 text-sm text-stone-600">
                共同提案・下請け対応も可能です。代理店スキームのご相談も歓迎します。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8">選ばれる理由</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <MetricCard kpi="400社+" label="導入実績" note="多業種・多エリアで活用" />
            <MetricCard kpi="可視化" label="専用レポートで即改善" note="数字で判断できる" />
            <MetricCard kpi="継続率90%" label="継続利用の高さ" note="成果に直結する運用" accent />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 text-center mb-12">よくある質問</h2>
          <div className="space-y-6">
            <FAQItem
              question="無料診断では何をしてくれますか？"
              answer="HP採点（ファーストビュー／導線／速度など）と、URLターゲティングで指定すべき競合URLの初期リストをご提案します。"
            />
            <FAQItem
              question="初期設定は大変ですか？"
              answer="初期のサイト分析・競合分析・配信設計は当方で実施します。配信要件とURL候補の共有だけで開始できます。"
            />
            <FAQItem
              question="どのような業界でも利用できますか？"
              answer="BtoB/BtoCを問わず、比較検討が発生する業界で効果を発揮します。"
            />
            <FAQItem
              question="効果はどのように測りますか？"
              answer="専用レポートで表示回数／CTR／クリック数を可視化。施策の見直しや予算配分をデータで判断できます。"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは無料診断から。</h2>
        <p className="text-lg mb-8 opacity-90">
            競合URLの初期提案と、HP採点の結果をもとに最短ルートをご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={goContact}
              className="rounded-xl bg-white text-amber-600 hover:bg-gray-50 px-8 py-4 font-semibold shadow-lg transition-all hover:shadow-xl"
            >
              今すぐ申し込む（無料）
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={formRef} id="contact" className="mx-auto max-w-3xl px-5 py-14">
        <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 text-center mb-4">無料相談</h2>
        <p className="text-stone-700 text-center mb-8">
          30分オンラインで、現状ヒアリングと配信の初期提案をいたします。<br />
          お気軽にお問い合わせください。
        </p>
        <div className="rounded-2xl bg-white shadow-lg ring-1 ring-amber-200/60 p-8">
          <ContactForm />
          <p className="mt-4 text-xs text-stone-500 text-center">
            送信先：info@yamato-ai.com<br />
            ※ 送信いただいた情報は適切に管理し、営業目的以外では使用いたしません。
          </p>
        </div>
      </section>

      <footer className="bg-stone-50 text-center text-sm text-stone-500 py-8">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500" />
            <p className="font-bold tracking-wide text-stone-700">Adaim</p>
          </div>
          <p>© {new Date().getFullYear()} Adaim. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

/* ===== Components ===== */

function BenefitCard({ kpi, label, accent = false }: { kpi: string; label: string; accent?: boolean }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border ${accent ? "border-amber-300" : "border-amber-100"}`}>
      <div className={`text-3xl font-extrabold ${accent ? "text-amber-700" : "text-amber-600"} mb-1`}>{kpi}</div>
      <div className="text-stone-800 font-medium">{label}</div>
    </div>
  );
}

function PainCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-stone-200/60">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="font-bold text-stone-900 mb-1">{title}</h3>
      <p className="text-stone-700">{desc}</p>
    </div>
  );
}

function SlideBlock({ src, alt, title, desc }: { src: string; alt: string; title: string; desc: string }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-2">{title}</h3>
        <p className="text-stone-700 max-w-3xl mx-auto">{desc}</p>
      </div>
      <div className="rounded-2xl bg-white shadow-lg ring-1 ring-amber-200/60 p-4">
        <figure>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-lg"
          />
        </figure>
      </div>
    </section>
  );
}

function MetricCard({ kpi, label, note, accent = false }: { kpi: string; label: string; note?: string; accent?: boolean }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border ${accent ? "border-amber-300" : "border-amber-100"}`}>
      <div className={`text-2xl font-extrabold ${accent ? "text-amber-700" : "text-amber-600"} mb-1`}>{kpi}</div>
      <div className="text-stone-900 font-medium mb-1">{label}</div>
      {note && <div className="text-sm text-stone-700">{note}</div>}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 rounded-xl transition-colors"
      >
        <span className="font-medium text-stone-900">{question}</span>
        <span className={`text-amber-600 transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      {isOpen && <div className="px-6 pb-4 text-stone-700">{answer}</div>}
    </div>
  );
}

/* Contact Form */
function ContactForm() {
  const [loading, setLoading] = useState(false);

  type ContactPayload = {
    name: string;
    company?: string;
    email: string;
    phone?: string;
    siteUrl?: string;
    message: string;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const data: ContactPayload = {
      name: String(fd.get("name") ?? ""),
      company: fd.get("company") ? String(fd.get("company")) : undefined,
      email: String(fd.get("email") ?? ""),
      phone: fd.get("phone") ? String(fd.get("phone")) : undefined,
      siteUrl: fd.get("siteUrl") ? String(fd.get("siteUrl")) : undefined,
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert("送信しました。折り返しご連絡します。");
        form.reset();
      } else {
        const body = (await res.json().catch(() => ({}))) as { error?: string; hint?: string };
        alert(`送信に失敗しました。\n${body?.error ?? ""}${body?.hint ? `\nヒント: ${body.hint}` : ""}`);
      }
    } catch {
      alert("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <FormField name="name" label="お名前 *" placeholder="山田太郎" required />
        <FormField name="company" label="会社名" placeholder="株式会社◯◯◯" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <FormField type="email" name="email" label="メールアドレス *" placeholder="example@company.com" required />
        <FormField type="tel" name="phone" label="電話番号" placeholder="03-1234-5678" />
      </div>
      <FormField type="url" name="siteUrl" label="HPのURL" placeholder="https://example.com" />
      <div>
        <label className="block text-sm font-medium mb-2 text-stone-900">ご相談内容 *</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all resize-none"
          placeholder="現在の広告運用の課題や、Adaimについて知りたいことをお聞かせください。"
        />
      </div>
      <button
        disabled={loading}
        className="w-full rounded-xl bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white px-6 py-4 font-semibold shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed"
      >
        {loading ? "送信中..." : "無料相談を申し込む"}
      </button>
    </form>
  );
}

function FormField({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-stone-900">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-stone-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all"
      />
    </div>
  );
}

/* =========================
 * 事例セクション（2カード）
 * ========================= */
function UseCases({ onContact }: { onContact: () => void }) {
  return (
    <section id="usecases" className="bg-amber-50/60 border-y border-amber-100 py-14">
      <div className="mx-auto max-w-6xl px-5">
        {/* 見出し */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-4 py-1.5 text-sm font-semibold">
            まずは「勝てる」使い方から
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
            すぐ始められる<strong className="text-amber-600">2つの勝ち筋</strong>
          </h2>
          <p className="mt-3 text-stone-600">
            競合の流入を“そのまま”刈り取る。無駄打ちゼロで、顕在層だけに届けます。
          </p>
        </div>

        {/* 2カード */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 宿泊・飲食向け */}
          <article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-amber-200/70 shadow-sm transition hover:shadow-md">
            <div className="relative">
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-amber-100 to-white">
                <Image
                  src="/usecase-travel.jpg"
                  alt="旅行計画ユーザーに日本の宿・飲食を先出し"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-amber-600 text-white text-xs font-bold px-3 py-1 shadow">
                宿泊・飲食 向け
              </span>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-stone-900">
                海外で旅行計画中の人に、<span className="text-amber-600">日本の宿・飲食を先出し</span>
              </h3>

              <ol className="space-y-2 text-stone-700">
                <li className="flex items-start gap-2">
                  <StepBadge>1</StepBadge>
                  <span>
                    海外にいる段階で<strong>大手旅行サイト</strong>（例：
                    <Tag>booking.com</Tag> <Tag>expedia.com</Tag> <Tag>agoda.com</Tag> <Tag>trip.com</Tag> など）を閲覧しているユーザーを指定
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <StepBadge>2</StepBadge>
                  <span>その閲覧者<strong>“だけ”</strong>に、日本のホテル・旅館・飲食店の広告を配信</span>
                </li>
                <li className="flex items-start gap-2">
                  <StepBadge>3</StepBadge>
                  <span>海外段階での想起獲得 → <strong>旅程に組み込み</strong>やすく、予約・来店に直結</span>
                </li>
              </ol>

              <ul className="text-sm text-stone-600 list-disc ps-5">
                <li>海外配信はまだ競合が少なく<strong>クリック単価が安定</strong>しやすい</li>
                <li>渡航前に情報を抑えるため<strong>予約率が高い</strong></li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={onContact}
                  className="rounded-xl bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 font-semibold shadow transition"
                >
                  このパターンで無料相談
                </button>
              </div>
            </div>
          </article>

          {/* 歯医者向け */}
          <article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-amber-200/70 shadow-sm transition hover:shadow-md">
            <div className="relative">
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-amber-100 to-white">
                <Image
                  src="/usecase-dentist.jpg"
                  alt="SEO1位の閲覧者だけに配信する歯科事例"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-amber-600 text-white text-xs font-bold px-3 py-1 shadow">
                歯医者 向け
              </span>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-stone-900">
                <span className="text-amber-600">SEO1位の閲覧者</span>“だけ”に配信。最小予算で<strong>顕在層</strong>を刈り取る
              </h3>

              <ol className="space-y-2 text-stone-700">
                <li className="flex items-start gap-2">
                  <StepBadge>1</StepBadge>
                  <span>例：「<strong>埼玉 歯医者</strong>」「<strong>埼玉 インプラント</strong>」で<strong>1位のサイトURL</strong>をターゲットに設定</span>
                </li>
                <li className="flex items-start gap-2">
                  <StepBadge>2</StepBadge>
                  <span>その<strong>閲覧者のみ</strong>に広告を出し、来院意欲の高い顧客へダイレクトに到達</span>
                </li>
                <li className="flex items-start gap-2">
                  <StepBadge>3</StepBadge>
                  <span>相手が投資した<strong>SEOや広告の流入</strong>を、<strong>最小予算</strong>で奪取</span>
                </li>
              </ol>

              <ul className="text-sm text-stone-600 list-disc ps-5">
                <li>「治療名 × 地域」などで<strong>自費比率の高いキーワード</strong>にも対応</li>
                <li>URLは実在の上位サイトを運用開始時にヒアリングし<strong>30件まで指定</strong>可能</li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={onContact}
                  className="rounded-xl bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 font-semibold shadow transition"
                >
                  このパターンで無料相談
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* 小さなUIパーツ */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 text-[12px] font-medium">
      {children}
    </span>
  );
}
function StepBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-bold">
      {children}
    </span>
  );
}
