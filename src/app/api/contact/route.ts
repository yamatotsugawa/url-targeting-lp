import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = "nodejs";

type Body = {
  name: string; email: string; company?: string; phone?: string; siteUrl?: string; message: string;
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
      secure: isSSL,              // 465=SSL / 587=STARTTLS
      auth: { user, pass },
      authMethod: "LOGIN",
      requireTLS: !isSSL,
      tls: !isSSL ? { minVersion: "TLSv1.2" } : undefined,
    });

    await transporter.verify();

    const text = `【Adaim LP お問い合わせ】
お名前: ${d.name}
会社名: ${d.company || "-"}
メール: ${d.email}
電話  : ${d.phone || "-"}
HP   : ${d.siteUrl || "-"}
--- メッセージ ---
${d.message}
`;

    await transporter.sendMail({
      from: fromHeader,                 // 表示用
      to,
      subject: `Adaim LP: お問い合わせ - ${d.name}`,
      text,
      replyTo: d.email,
      envelope: { from: user, to },     // サーバ検査用（実送信者）
    });

    if (process.env.SMTP_AUTOREPLY !== "off") {
      await transporter.sendMail({
        from: fromHeader,
        to: d.email,
        subject: "お問い合わせありがとうございます（Adaim）",
        text: `${d.name} 様\n\nお問い合わせありがとうございます。内容を確認し折り返しご連絡します。\n\n--- お問い合わせ内容 ---\n${d.message}\n`,
        envelope: { from: user, to: d.email },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    let hint = "";
    if (/ENOTFOUND|getaddrinfo/i.test(msg)) hint = "SMTP_HOSTが誤っている可能性";
    else if (/ECONNREFUSED|ETIMEDOUT|timeout/i.test(msg)) hint = "ポート/暗号化の不一致（465=SSL / 587=STARTTLS）";
    else if (/Invalid login|535|Authentication/i.test(msg)) hint = "SMTP_USER/PASS不整合（ユーザーはメールアドレス）";
    else if (/sender|from address|unauthorized|550/i.test(msg)) hint = "エンベロープFromと認証ユーザーの不一致 or 宛先が存在しない";
    console.error("CONTACT_ERROR:", msg);
    return NextResponse.json({ ok: false, error: msg, hint }, { status: 500 });
  }
}
