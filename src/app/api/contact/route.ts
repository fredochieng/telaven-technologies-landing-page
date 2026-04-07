import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail, contactAutoReplyEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(1),
  phone: z.string().min(5),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  // Rate limit: 5 submissions per 15 minutes per IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim()
    ?? req.headers.get("x-real-ip")
    ?? "unknown";

  const { success, remaining, resetAt } = rateLimit(`contact:${ip}`, {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  });

  if (!success) {
    const retryAfterSecs = Math.ceil((resetAt - Date.now()) / 1000);
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSecs),
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(Math.ceil(resetAt / 1000)),
        },
      }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data.", details: parsed.error.flatten() }, { status: 422 });
  }

  const { name, email, country, phone, subject, message } = parsed.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCountry = escapeHtml(country);
  const safePhone = escapeHtml(phone);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@telaven.com";

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0a0a0a;">
      <h2 style="font-size: 20px; font-weight: 700; margin: 0 0 24px; border-bottom: 1px solid #e5e5e5; padding-bottom: 16px;">
        New Contact Form Submission
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: 600; width: 120px; color: #525252;">Name</td>
          <td style="padding: 8px 0;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #525252;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #0a0a0a;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #525252;">Country</td>
          <td style="padding: 8px 0;">${safeCountry}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #525252;">Phone</td>
          <td style="padding: 8px 0;">${safePhone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #525252;">Subject</td>
          <td style="padding: 8px 0;">${safeSubject}</td>
        </tr>
      </table>
      <div style="margin-top: 24px; border-top: 1px solid #e5e5e5; padding-top: 16px;">
        <p style="font-weight: 600; color: #525252; margin: 0 0 8px;">Message</p>
        <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${safeMessage}</p>
      </div>
    </div>
  `;

  try {
    await Promise.all([
      // Notification to the team
      sendContactEmail({
        to,
        subject: `[Contact Form] ${safeSubject}`,
        html,
        replyTo: email,
      }),
      // Auto-reply to the sender
      sendContactEmail({
        to: email,
        subject: `We've received your message — Telaven`,
        html: contactAutoReplyEmail(safeName, safeSubject),
        replyTo: to,
      }),
    ]);
    return NextResponse.json(
      { message: "Message sent successfully!" },
      {
        headers: {
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": String(remaining),
        },
      }
    );
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
