import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(1),
  phone: z.string().min(5),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
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
  const to = process.env.CONTACT_TO_EMAIL;

  if (!to) {
    console.error("CONTACT_TO_EMAIL is not set");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0a0a0a;">
      <h2 style="font-size: 20px; font-weight: 700; margin: 0 0 24px; border-bottom: 1px solid #e5e5e5; padding-bottom: 16px;">
        New Contact Form Submission
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: 600; width: 120px; color: #525252;">Name</td>
          <td style="padding: 8px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #525252;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0a0a0a;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #525252;">Country</td>
          <td style="padding: 8px 0;">${country}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #525252;">Phone</td>
          <td style="padding: 8px 0;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #525252;">Subject</td>
          <td style="padding: 8px 0;">${subject}</td>
        </tr>
      </table>
      <div style="margin-top: 24px; border-top: 1px solid #e5e5e5; padding-top: 16px;">
        <p style="font-weight: 600; color: #525252; margin: 0 0 8px;">Message</p>
        <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
      </div>
    </div>
  `;

  try {
    await sendContactEmail({
      to,
      subject: `[Contact Form] ${subject}`,
      html,
      replyTo: email,
    });
    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
