
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

    const { error } = await resend.emails.send({
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
        <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(data.budget || "Not provided")}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(data.timeline || "Not provided")}</p>
        <h3>Project Description</h3>
        <p style="white-space: pre-wrap;">${escapeHtml(data.description)}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your message." },
        { status: 502 }
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
