export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="text-3xl font-extrabold text-stone-900 mb-4">送信ありがとうございました</h1>
      <p className="text-stone-700 mb-8">担当より日程調整のご連絡を差し上げます。<br/>お急ぎの方は下記からも予約できます。</p>
      <a
        href="https://meeting.eeasy.jp/tetsugakuman/url-targeting"
        className="inline-block rounded-xl bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 font-semibold"
      >
        いますぐ日程を予約する
      </a>
    </main>
  );
}
