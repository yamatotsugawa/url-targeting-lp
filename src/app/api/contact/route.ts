import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Body = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  siteUrl?: string;
  message: string;
};

const must = (k: string) => {
  const v = process.env[k];
  if (!v) throw new Error(`ENV_MISSING:${k}`);
  return v;
};

export async function POST(req: Request) {
  try {
    const d = (await req.json()) as Body;
    if (!d.name || !d.email || !d.message) {
      return NextResponse.json({ ok: false, error: "必須項目が不足しています" }, { status: 400 });
    }

    const host = must("SMTP_HOST");
    const port = Number(must("SMTP_PORT"));
    const user = must("SMTP_USER");
    const pass = must("SMTP_PASS");
    const to = process.env.SMTP_TO || "info@yamato-ai.jp";
    const fromHeader = process.env.SMTP_FROM || `Adaim LP <${user}>`;

    const isSSL = port === 465;
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: isSSL,                 // 465=SSL / 587=STARTTLS
      auth: { user, pass },
      authMethod: "LOGIN",
      requireTLS: !isSSL,
      tls: !isSSL ? { minVersion: "TLSv1.2" } : undefined,
    });

    // 接続・認証の事前検証
    await transporter.verify();

    // 管理者向け通知メール（あなたに届く方）
    const adminText = `【Adaim LP お問い合わせ】
お名前: ${d.name}
会社名: ${d.company || "-"}
メール: ${d.email}
電話  : ${d.phone || "-"}
HP   : ${d.siteUrl || "-"}
--- メッセージ ---
${d.message}
`;
    await transporter.sendMail({
      from: fromHeader,
      to,
      subject: `Adaim LP: お問い合わせ - ${d.name}`,
      text: adminText,
      replyTo: d.email,
      envelope: { from: user, to },   // 実送信者は認証ユーザー
    });

    // 自動返信（OFFにしたい場合は、ENVに SMTP_AUTOREPLY=off を設定）
    if (process.env.SMTP_AUTOREPLY !== "off") {
      const autoText = `${d.name} 様

この度は Adaim（URLターゲティング）にお問い合わせいただき、ありがとうございます。
担当より打ち合わせ日程の調整についてご連絡いたします。

お急ぎ・即日での調整をご希望の場合は、下記の予約ページから
ご都合の良い日時を直接ご指定ください。
https://meeting.eeasy.jp/tetsugakuman/url-targeting

―― お問い合わせ控え ――
お名前: ${d.name}
会社名: ${d.company || "-"}
メール: ${d.email}
電話  : ${d.phone || "-"}
HP   : ${d.siteUrl || "-"}
--- ご相談内容 ---
${d.message}

Adaim サポート
info@yamato-ai.jp
`;
      await transporter.sendMail({
        from: fromHeader,
        to: d.email,
        subject: "【Adaim】お問い合わせありがとうございます",
        text: autoText,
        replyTo: user,                     // 返信は運用窓口へ
        envelope: { from: user, to: d.email },
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
