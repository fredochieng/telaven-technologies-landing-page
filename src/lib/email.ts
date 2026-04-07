import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER!,
    pass: process.env.BREVO_SMTP_KEY!,
  },
});

interface ContactEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendContactEmail(opts: ContactEmailOptions): Promise<void> {
  await transporter.sendMail({
    from: `"Telaven Solutions" <${process.env.BREVO_FROM_EMAIL!}>`,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
    ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
  });
}

// ─── Email Templates ────────────────────────────────────────────────────────

function baseTemplate(content: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; color: #0a0a0a;">
      <div style="max-width: 560px; margin: 0 auto; padding: 48px 20px;">
        <!-- Logo -->
        <div style="text-align: center; margin-bottom: 32px;">
          <span style="font-size: 28px; font-weight: 700; color: #0a0a0a; letter-spacing: -0.5px;">Telaven</span>
        </div>

        <!-- Card -->
        <div style="background: #ffffff; border-radius: 10px; padding: 40px 32px; border: 1px solid #e5e5e5;">
          ${content}
        </div>

        <!-- Footer -->
        <div style="text-align: center; margin-top: 32px; padding: 0 20px;">
          <p style="font-size: 12px; line-height: 1.5; color: #737373; margin: 0 0 8px;">&copy; ${new Date().getFullYear()} Telaven. All rights reserved.</p>
          <p style="font-size: 11px; line-height: 1.5; color: #a3a3a3; margin: 0;">You received this email because you have an account with Telaven or were invited to join.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function divider(): string {
  return `<hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;">`;
}

export function contactAutoReplyEmail(name: string, subject: string): string {
  return baseTemplate(`
    <h1 style="font-size: 22px; font-weight: 700; color: #0a0a0a; margin: 0 0 12px; line-height: 1.3;">Thanks for reaching out, ${name}!</h1>
    <p style="font-size: 15px; line-height: 1.6; color: #525252; margin: 0 0 16px;">
      We've received your message about <strong style="color: #0a0a0a;">"${subject}"</strong> and will get back to you within <strong style="color: #0a0a0a;">1–2 business days</strong>.
    </p>

    <div style="background-color: #f5f5f5; border-radius: 10px; padding: 20px 24px; margin: 0 0 20px;">
      <p style="font-size: 14px; font-weight: 600; color: #0a0a0a; margin: 0 0 12px;">While you wait, explore what we do:</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">🛠️&nbsp;&nbsp;Custom enterprise software built for your business</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">🤖&nbsp;&nbsp;AI &amp; ML solutions that automate and predict</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">📊&nbsp;&nbsp;Data analytics &amp; business intelligence dashboards</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">📱&nbsp;&nbsp;Mobile &amp; web apps designed to convert</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">📡&nbsp;&nbsp;Bulk SMS, WhatsApp API &amp; email marketing</td>
        </tr>
      </table>
    </div>

    ${divider()}

    <p style="font-size: 14px; line-height: 1.6; color: #525252; margin: 0 0 4px;">
      In the meantime, feel free to browse our services or follow us on social media.
    </p>
    <p style="font-size: 13px; line-height: 1.6; color: #737373; margin: 16px 0 0;">
      If your enquiry is urgent, you can reply directly to this email and we'll prioritise it.
    </p>
  `);
}
