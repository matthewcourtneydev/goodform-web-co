
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  business: z.string().trim().max(150).optional().default(""),
  service: z.enum([
    "website",
    "redesign",
    "branding",
    "maintenance",
    "other",
  ]),
  description: z.string().trim().min(10).max(5000),
  budget: z
    .enum([
      "under-1000",
      "1000-2500",
      "2500-5000",
      "5000-plus",
      "unsure",
      "",
    ])
    .optional()
    .default(""),
  timeline: z
    .enum([
      "asap",
      "1-month",
      "1-3-months",
      "3-plus-months",
      "flexible",
      "",
    ])
    .optional()
    .default(""),
  source: z
    .enum(["contact-page", "homepage"])
    .optional()
    .default("contact-page"),
  website: z.string().max(500).optional().default(""),
  turnstileToken: z.string().min(1).max(4096),
});

const serviceLabels = {
  website: "Website Design & Development",
  redesign: "Website Redesign",
  branding: "Branding & Identity",
  maintenance: "Website Maintenance",
  other: "Something Else",
};

const budgetLabels = {
  "under-1000": "Under $1,000",
  "1000-2500": "$1,000 – $2,500",
  "2500-5000": "$2,500 – $5,000",
  "5000-plus": "$5,000+",
  unsure: "Not Sure Yet",
};

const timelineLabels = {
  asap: "As Soon As Possible",
  "1-month": "Within 1 Month",
  "1-3-months": "1–3 Months",
  "3-plus-months": "3+ Months",
  flexible: "Flexible / Just Exploring",
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

async function verifyTurnstile(token) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("Turnstile secret is missing.");
    return false;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret,
          response: token,
        }),
        signal: AbortSignal.timeout(8000),
      }
    );

    if (!response.ok) return false;

    const result = await response.json();

    if (result.success !== true) return false;

    const allowedHostnames = [
      "goodformwebco.com",
      "www.goodformwebco.com",
      "localhost",
    ];

    return allowedHostnames.includes(result.hostname);
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

function buildConfirmationEmail(name) {
  const firstName = escapeHtml(name.trim().split(/\s+/)[0]);

  const logoUrl = process.env.CONTACT_SIGNATURE_LOGO_URL;

  const logoHtml = logoUrl
    ? `
      <img
        src="${escapeHtml(logoUrl)}"
        alt="Goodform Web Co."
        width="200"
        style="
          display: block;
          width: 200px;
          max-width: 100%;
          height: auto;
          border: 0;
        "
      />
    `
    : `
      <strong style="
        color: #173F34;
        font-size: 20px;
        font-weight: 700;
      ">
        Goodform Web Co.
      </strong>
    `;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thanks for reaching out!</title>
      </head>

      <body style="
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        font-family: Arial, Helvetica, sans-serif;
        color: #242424;
      ">
        <table
          role="presentation"
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          style="background-color: #ffffff;"
        >
          <tr>
            <td align="center" style="padding: 32px 20px;">
              <table
                role="presentation"
                cellpadding="0"
                cellspacing="0"
                border="0"
                width="100%"
                style="max-width: 600px;"
              >
                <tr>
                  <td style="
                    font-size: 15px;
                    line-height: 1.75;
                    color: #242424;
                  ">
                    <p style="margin: 0 0 20px;">
                      Hi ${firstName},
                    </p>

                    <p style="margin: 0 0 20px;">
                      Thanks for reaching out to Goodform Web Co.!
                      We've received your project inquiry and
                      appreciate you considering us.
                    </p>

                    <p style="margin: 0 0 20px;">
                      We'll take a look at the details you shared
                      and get back to you as soon as we can.
                    </p>

                    <p style="margin: 0 0 20px;">
                      In the meantime, feel free to reply to this
                      email if there's anything else you'd like
                      us to know.
                    </p>

                    <p style="margin: 0 0 24px;">
                      Talk soon,
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <table
                      role="presentation"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      width="100%"
                    >
                      <tr>
                        <td
                          width="3"
                          style="
                            width: 3px;
                            background-color: #A4B8A6;
                          "
                        ></td>

                        <td style="padding: 0 0 0 16px;">
                          <p style="
                            margin: 0 0 4px;
                            font-size: 20px;
                            line-height: 1.3;
                            font-weight: 700;
                            color: #173F34;
                          ">
                            Matthew Courtney
                          </p>

                          <p style="
                            margin: 0 0 18px;
                            font-size: 10px;
                            line-height: 1.5;
                            font-weight: 700;
                            letter-spacing: 1.1px;
                            color: #52675E;
                          ">
                            FOUNDER &amp; WEB DEVELOPER
                          </p>

                          <p style="
                            margin: 0 0 4px;
                            font-size: 12px;
                            line-height: 1.6;
                          ">
                            <a
                              href="mailto:hello@goodformwebco.com"
                              style="
                                color: #173F34;
                                text-decoration: none;
                              "
                            >
                              hello@goodformwebco.com
                            </a>
                          </p>

                          <p style="
                            margin: 0 0 14px;
                            font-size: 12px;
                            line-height: 1.6;
                          ">
                            <a
                              href="https://www.goodformwebco.com"
                              style="
                                color: #173F34;
                                text-decoration: none;
                              "
                            >
                              www.goodformwebco.com
                            </a>
                          </p>

                          <p style="
                            margin: 0 0 18px;
                            font-size: 12px;
                            line-height: 1.6;
                            color: #66796D;
                          ">
                            Thoughtful websites for small businesses.
                          </p>

                          ${logoHtml}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    const contentType =
      request.headers.get("content-type") || "";

    if (
      !contentType
        .toLowerCase()
        .includes("application/json")
    ) {
      return NextResponse.json(
        { error: "Invalid content type." },
        { status: 415 }
      );
    }

    const contentLength = Number(
      request.headers.get("content-length") || 0
    );

    if (contentLength > 12000) {
      return NextResponse.json(
        { error: "Submission is too large." },
        { status: 413 }
      );
    }

    const rawBody = await request.text();

    if (
      new TextEncoder().encode(rawBody).length > 12000
    ) {
      return NextResponse.json(
        { error: "Submission is too large." },
        { status: 413 }
      );
    }

    let body;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: "Invalid submission." },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check your form fields." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Silently discard honeypot submissions.
    if (data.website.trim()) {
      return NextResponse.json(
        {
          success: true,
          message: "Your message was received.",
        },
        { status: 200 }
      );
    }

    const verified = await verifyTurnstile(
      data.turnstileToken
    );

    if (!verified) {
      return NextResponse.json(
        {
          error:
            "Security verification failed. Please try again.",
        },
        { status: 403 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error(
        "Contact email configuration is missing."
      );

      return NextResponse.json(
        { error: "Contact service is unavailable." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const sourceLabel =
      data.source === "homepage"
        ? "Homepage Contact CTA"
        : "Contact Page";

    // Send the project inquiry to Goodform.
    const { error: inquiryError } = await resend.emails.send({
      from: `Goodform Web Co. <${from}>`,
      to: [to],
      replyTo: data.email,
      subject: `New Project Inquiry — ${data.name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Source:</strong> ${sourceLabel}</p>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Business:</strong> ${escapeHtml(data.business || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(serviceLabels[data.service])}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budgetLabels[data.budget] || "Not provided")}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(timelineLabels[data.timeline] || "Not provided")}</p>
        <h3>Project Description</h3>
        <p style="white-space: pre-wrap;">${escapeHtml(data.description)}</p>
      `,
    });

    if (inquiryError) {
      console.error("Resend inquiry error:", inquiryError);

      return NextResponse.json(
        { error: "Unable to send your message." },
        { status: 502 }
      );
    }

    // Send an automatic confirmation to the visitor.
    // A confirmation failure does not invalidate the inquiry.
    try {
      const { error: confirmationError } =
        await resend.emails.send({
          from: `Goodform Web Co. <${from}>`,
          to: [data.email],
          replyTo: "hello@goodformwebco.com",
          subject:
            "Thanks for reaching out! | Goodform Web Co.",
          html: buildConfirmationEmail(data.name),
        });

      if (confirmationError) {
        console.error(
          "Resend confirmation error:",
          confirmationError
        );
      }
    } catch (confirmationError) {
      console.error(
        "Confirmation email failed:",
        confirmationError
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message was sent.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
