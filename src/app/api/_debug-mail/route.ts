import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = "nodejs";

export async function GET() {
  try {
    const host = process.env.SMTP_HOST!;
    const port = Number(process.env.SMTP_PORT!);
    const user = process.env.SMTP_USER!;
    const pass = process.env.SMTP_PASS!;
    const isSSL = port === 465;

    const transporter = nodemailer.createTransport({
      host, port, secure: isSSL,
      auth: { user, pass }, authMethod: "LOGIN",
      requireTLS: !isSSL, tls: !isSSL ? { minVersion: "TLSv1.2" } : undefined,
    });

    await transporter.verify();
    return NextResponse.json({ ok: true, host, port, secure: isSSL });
  } catch (e: any) {
    const msg = e?.message || String(e);
    let hint = "";
    if (/ENOTFOUND|getaddrinfo/i.test(msg)) hint = "SMTP_HOSTが誤っている可能性";
    else if (/ECONNREFUSED|ETIMEDOUT|timeout/i.test(msg)) hint = "ポート/暗号化の不一致（465/587切替）";
    else if (/Invalid login|535|Authentication/i.test(msg)) hint = "SMTP_USER/PASS不整合（ユーザーはメールアドレス）";
    return NextResponse.json({ ok: false, error: msg, hint }, { status: 500 });
  }
}
