import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message, consent } = body as Record<string, string>;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    let toEmail = process.env.CONTACT_TO_EMAIL || smtpUser || "";

    let transporter: nodemailer.Transporter;
    let useEthereal = false;

    if (!smtpHost || !smtpUser || !smtpPass) {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
      toEmail = testAccount.user;
      useEthereal = true;
    } else {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });
    }

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Consent:</strong> ${consent ? "Yes" : "No"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    const info = await transporter.sendMail({
      from: `Website Contact <${smtpUser || "no-reply@example.com"}>`,
      to: toEmail,
      subject: `Contact form: ${name}`,
      replyTo: email,
      html,
    });

    const previewUrl = useEthereal ? nodemailer.getTestMessageUrl(info) : undefined;
    return NextResponse.json({ ok: true, previewUrl });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}


