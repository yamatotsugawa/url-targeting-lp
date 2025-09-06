// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // nodemailer は Node ランタイムで

type Body = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  siteUrl?: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Body;

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ ok: false, error: "必須項目が不足しています" }, { status: 400 });
    }

    // ← ここで動的 import（クライアントに混ざらないように）
    const nodemailer = (await import("nodemailer")).default;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });

    const to = process.env.SMTP_TO || "info@yamato-ai.com";
    const from = process.env.SMTP_FROM || `Adaim LP <no-reply@${process.env.SMTP_HOST || "localhost"}>`;

    const text = `【Adaim LP お問い合わせ】

お名前: ${data.name}
会社名: ${data.company || "-"}
メール: ${data.email}
電話  : ${data.phone || "-"}
HP   : ${data.siteUrl || "-"}

--- メッセージ ---
${data.message}
`;

    // オーナー宛
    await transporter.sendMail({
      from,
      to,
      subject: `Adaim LP: お問い合わせ - ${data.name}`,
      text,
      replyTo: data.email,
    });

    // 自動返信（任意）
    if (process.env.SMTP_AUTOREPLY !== "off") {
      await transporter.sendMail({
        from,
        to: data.email,
        subject: "お問い合わせありがとうございます（Adaim）",
        text: `${data.name} 様

お問い合わせありがとうございます。内容を確認し、折り返しご連絡いたします。

--- お問い合わせ内容 ---
${data.message}

Adaim サポート
info@yamato-ai.com`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: err?.message || "メール送信に失敗しました" },
      { status: 500 }
    );
  }
}
