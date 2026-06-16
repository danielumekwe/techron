import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const serviceLabel: Record<string, string> = {
    epcic: "EPCIC",
    imr: "Inspection, Maintenance and Repairs",
    subsea: "Subsea Services",
    marine: "Marine Support",
    construction: "Construction and Infrastructure",
  };

  const { error } = await resend.emails.send({
    from: "Techron Contact Form <onboarding@resend.dev>",
    to: "info@techronintegrated.com",
    replyTo: email,
    subject: `New Enquiry from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#0B1F3A;margin-bottom:4px">New Contact Form Submission</h2>
        <p style="color:#666;margin-top:0;margin-bottom:24px">Received via techronintegrated.com</p>

        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;width:140px;font-size:13px">Full Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#0B1F3A;font-weight:600">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:13px">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#0B1F3A;font-weight:600">${email}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:13px">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#0B1F3A;font-weight:600">${phone}</td>
          </tr>` : ""}
          ${service ? `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#888;font-size:13px">Service Interest</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee;color:#0B1F3A;font-weight:600">${serviceLabel[service] ?? service}</td>
          </tr>` : ""}
          <tr>
            <td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top">Message</td>
            <td style="padding:10px 0;color:#0B1F3A;white-space:pre-wrap">${message}</td>
          </tr>
        </table>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
