import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// 受信するJSONの型（messageは任意）
type Body = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  siteUrl?: string;
  message?: string; // ← 任意化
};

// ヘッダーインジェクション等の簡易サニタイズ
const clean = (v: unknown, max = 4000) =>
  String(v ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);

const must = (k: string) => {
  const v = process.env[k];
  if (!v) throw new Error(`ENV_MISSING:${k}`);
  return v;
};

export async function POST(req: Request) {
  try {
    const json = (await req.json()) as Body;

    // 受取値の正規化（未入力でも安全に文字列化）
    const name = clean(json.name, 200);
    const email = clean(json.email, 320);
    const company = clean(json.company, 200);
    const phone = clean(json.phone, 100);
    const siteUrl = clean(json.siteUrl, 500);
    const rawMessage = clean(json.message, 4000);
    const safeMessage = rawMessage || "（未入力）"; // ← 空のときのフォールバック

    // 必須は name と email のみ
    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "必須項目（お名前・メールアドレス）が不足しています" },
        { status: 400 }
      );
    }

    const host = must("SMTP_HOST");
    const port = Number(must("SMTP_PORT"));
    const user = must("SMTP_USER");
    const pass = must("SMTP_PASS");
    const to = process.env.SMTP_TO || "info@yamato-ai.jp";
    const fromHeader = process.env.SMTP_FROM || `URL Targeting LP <${user}>`;

    const isSSL = port === 465;
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: isSSL, // 465=SSL
      auth: { user, pass },
      authMethod: "LOGIN",
      requireTLS: !isSSL, // 587等はSTARTTLS
      tls: !isSSL ? { minVersion: "TLSv1.2" } : undefined,
    });

    // SMTP接続・認証の事前確認
    await transporter.verify();

    // 管理者向け通知メール
    const adminText = `【URL Targeting LP お問い合わせ】
お名前: ${name}
会社名: ${company || "-"}
メール: ${email}
電話  : ${phone || "-"}
HP   : ${siteUrl || "-"}
--- メッセージ ---
${safeMessage}
`;

    await transporter.sendMail({
      from: fromHeader,
      to,
      subject: `URL Targeting LP: お問い合わせ - ${name}`,
      text: adminText,
      replyTo: { name, address: email },
      envelope: { from: user, to }, // 実送信者は認証ユーザー
    });

    // 自動返信（OFFにしたい場合は SMTP_AUTOREPLY=off）
    if (process.env.SMTP_AUTOREPLY !== "off") {
      const autoText = `${name} 様

この度はURLターゲティングにお問い合わせいただき、ありがとうございます。
担当より打ち合わせ日程の調整についてご連絡いたします。

お急ぎ・即日での調整をご希望の場合は、下記の予約ページから
ご都合の良い日時を直接ご指定ください。
https://meeting.eeasy.jp/tetsugakuman/url-targeting

―― お問い合わせ控え ――
お名前: ${name}
会社名: ${company || "-"}
メール: ${email}
電話  : ${phone || "-"}
HP   : ${siteUrl || "-"}
--- ご相談内容 ---
${safeMessage}

URL Targeting サポート
info@yamato-ai.jp
`;

      await transporter.sendMail({
        from: fromHeader,
        to: email,
        subject: "【URL Targeting】お問い合わせありがとうございます",
        text: autoText,
        replyTo: user,
        envelope: { from: user, to: email },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    let hint = "";
    if (/ENOTFOUND|getaddrinfo/i.test(msg)) hint = "SMTP_HOSTが誤っている可能性";
    else if (/ECONNREFUSED|ETIMEDOUT|timeout/i.test(msg)) hint = "ポート/暗号化の不一致（465=SSL / 587=STARTTLS）";
    else if (/Invalid login|535|Authentication/i.test(msg)) hint = "SMTP_USER/PASSの不整合（ユーザーはメールアドレス）";
    else if (/sender|from address|unauthorized|550/i.test(msg)) hint = "エンベロープFromと認証ユーザーの不一致 or 宛先が存在しない";

    console.error("CONTACT_ERROR:", msg);
    return NextResponse.json({ ok: false, error: msg, hint }, { status: 500 });
  }
}
