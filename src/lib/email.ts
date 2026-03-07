import nodemailer from "nodemailer";

// ─── Contact Form Email (SendGrid / ZeptoMail) ──────────────────────────────

interface ContactEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendContactEmail(opts: ContactEmailOptions): Promise<void> {
  const provider = process.env.EMAIL_PROVIDER ?? "sendgrid";

  if (provider === "zeptomail") {
    const { SendMailClient } = await import("zeptomail");
    const client = new SendMailClient({
      url: "api.zeptomail.com/",
      token: process.env.ZEPTOMAIL_API_KEY!,
    });
    await client.sendMail({
      from: { address: process.env.ZEPTOMAIL_FROM_EMAIL!, name: "Telaven Technologies" },
      to: [{ email_address: { address: opts.to, name: "" } }],
      subject: opts.subject,
      htmlbody: opts.html,
      ...(opts.replyTo ? { reply_to: [{ address: opts.replyTo, name: "" }] } : {}),
    });
  } else {
    // default: sendgrid
    const sgMail = (await import("@sendgrid/mail")).default;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
    await sgMail.send({
      to: opts.to,
      from: { email: process.env.SENDGRID_FROM_EMAIL!, name: "Telaven Technologies" },
      subject: opts.subject,
      html: opts.html,
      ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
    });
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.mailgun.org",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: SendEmailOptions) {
  const from = `${process.env.SENDER_NAME || "Telaven"} <${process.env.SENDER_EMAIL || "no-reply@annalytick.com"}>`;

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ""),
    });
    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}

// ─── Email Templates ────────────────────────────────────────────────────────
// Uses shadcn/ui default theme colors:
//   primary: #0a0a0a (oklch 0.205)  primary-foreground: #fafafa (oklch 0.985)
//   muted: #f5f5f5 (oklch 0.97)     muted-foreground: #737373 (oklch 0.556)
//   border: #e5e5e5 (oklch 0.922)   background: #ffffff  foreground: #0a0a0a
//   radius: 0.625rem (10px)

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

function fullWidthButton(text: string, url: string): string {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
      <tr>
        <td>
          <a href="${url}" style="display: block; width: 100%; background-color: #0a0a0a; color: #fafafa !important; text-decoration: none; padding: 14px 24px; border-radius: 10px; font-size: 14px; font-weight: 600; text-align: center; box-sizing: border-box;">${text}</a>
        </td>
      </tr>
    </table>
  `;
}

function fallbackLink(url: string): string {
  return `<p style="font-size: 12px; line-height: 1.5; color: #a3a3a3; margin: 24px 0 0; word-break: break-all;">If the button doesn&rsquo;t work, copy and paste this link into your browser:<br><a href="${url}" style="color: #737373;">${url}</a></p>`;
}

function divider(): string {
  return `<hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;">`;
}

export function verificationEmail(url: string): string {
  return baseTemplate(`
    <h1 style="font-size: 22px; font-weight: 700; color: #0a0a0a; margin: 0 0 12px; line-height: 1.3;">Verify your email address</h1>
    <p style="font-size: 15px; line-height: 1.6; color: #525252; margin: 0 0 4px;">Thanks for signing up! Please verify your email to activate your account and get started.</p>
    ${fullWidthButton("Verify Email Address", url)}
    <p style="font-size: 13px; line-height: 1.6; color: #737373; margin: 0;">If you didn&rsquo;t create an account, you can safely ignore this email.</p>
    ${fallbackLink(url)}
  `);
}

export function resetPasswordEmail(url: string): string {
  return baseTemplate(`
    <h1 style="font-size: 22px; font-weight: 700; color: #0a0a0a; margin: 0 0 12px; line-height: 1.3;">Reset your password</h1>
    <p style="font-size: 15px; line-height: 1.6; color: #525252; margin: 0 0 4px;">We received a request to reset your password. Click the button below to choose a new one.</p>
    ${fullWidthButton("Reset Password", url)}
    <p style="font-size: 13px; line-height: 1.6; color: #737373; margin: 0;">This link will expire in 1 hour. If you didn&rsquo;t request a password reset, you can safely ignore this email.</p>
    ${fallbackLink(url)}
  `);
}

export function inviteEmail(inviterName: string, businessName: string, url: string): string {
  return baseTemplate(`
    <h1 style="font-size: 22px; font-weight: 700; color: #0a0a0a; margin: 0 0 12px; line-height: 1.3;">You&rsquo;ve been invited!</h1>
    <p style="font-size: 15px; line-height: 1.6; color: #525252; margin: 0 0 4px;"><strong style="color: #0a0a0a;">${inviterName}</strong> has invited you to join <strong style="color: #0a0a0a;">${businessName}</strong> on Telaven.</p>
    <p style="font-size: 14px; line-height: 1.6; color: #737373; margin: 0 0 4px;">Create your account to start collaborating with your team — manage data, track insights, and more.</p>
    ${fullWidthButton("Accept Invitation", url)}
    <p style="font-size: 13px; line-height: 1.6; color: #737373; margin: 0;">This invitation will expire in 7 days. If you didn&rsquo;t expect this, you can safely ignore this email.</p>
    ${fallbackLink(url)}
  `);
}

export function welcomeEmail(userName: string, businessName: string): string {
  return baseTemplate(`
    <h1 style="font-size: 22px; font-weight: 700; color: #0a0a0a; margin: 0 0 12px; line-height: 1.3;">Welcome to Telaven, ${userName}! 🎉</h1>
    <p style="font-size: 15px; line-height: 1.6; color: #525252; margin: 0 0 16px;">Your account for <strong style="color: #0a0a0a;">${businessName}</strong> has been created successfully. We&rsquo;re excited to have you on board.</p>

    <div style="background-color: #f5f5f5; border-radius: 10px; padding: 20px 24px; margin: 0 0 20px;">
      <p style="font-size: 14px; font-weight: 600; color: #0a0a0a; margin: 0 0 12px;">Here&rsquo;s what you can do with Telaven:</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">📊&nbsp;&nbsp;Track and visualize your business data in real time</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">👥&nbsp;&nbsp;Invite team members and manage roles</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">🔑&nbsp;&nbsp;Generate API keys for programmatic access</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">📈&nbsp;&nbsp;Get actionable insights from your analytics</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 14px; line-height: 1.5; color: #525252;">⚙️&nbsp;&nbsp;Customize your workspace and integrations</td>
        </tr>
      </table>
    </div>

    ${divider()}

    <div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; padding: 16px 20px; margin: 0 0 20px;">
      <p style="font-size: 13px; font-weight: 600; color: #92400e; margin: 0 0 4px;">📬 Check your inbox for a verification email</p>
      <p style="font-size: 13px; line-height: 1.5; color: #a16207; margin: 0;">We&rsquo;ve also sent you a separate email to verify your address. Please click the link in that email to activate your account and access your dashboard.</p>
    </div>

    <p style="font-size: 14px; line-height: 1.6; color: #525252; margin: 0 0 4px;">Once verified, head to your dashboard to get started:</p>
    ${fullWidthButton("Go to Dashboard", (process.env.NEXT_PUBLIC_APP_URL || "http://app.localhost:3003") + "/dashboard")}
    <p style="font-size: 13px; line-height: 1.6; color: #737373; margin: 0;">Need help? Just reply to this email — we&rsquo;re here for you.</p>
  `);
}
