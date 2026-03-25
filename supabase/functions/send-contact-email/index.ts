import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  inquiryType: string | null;
  name: string;
  email: string;
  company: string;
  country: string;
  teamSize: string;
  startDate: string;
  message: string;
}

// Simple in-memory rate limiter: max 5 requests per IP per 15 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const data: ContactFormData = await req.json();

    // Validate required fields
    if (!data.name?.trim() || !data.email?.trim()) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/Lisbon",
      dateStyle: "full",
      timeStyle: "short",
    });

    const allowedInquiryTypes: Record<string, string> = {
      "staff-aug": "Staff Augmentation",
      "dedicated-team": "Dedicated Team",
      "project": "Nearshore Project",
      "consulting": "Consulting",
    };
    const inquiryLabel = data.inquiryType
      ? allowedInquiryTypes[data.inquiryType] ?? escapeHtml(data.inquiryType)
      : "Not specified";

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a2e; margin: 0; padding: 0; background: #f4f4f8; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; }
    .header { background: #1a1a2e; color: #ffffff; padding: 24px 32px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #a0a0b8; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #1a1a2e; line-height: 1.5; }
    .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; margin-top: 4px; }
    .footer { padding: 20px 32px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  </style>
</head>
<body>
  <div style="padding: 24px;">
    <div class="container">
      <div class="header">
        <h1>New Website Inquiry</h1>
        <p>${timestamp} · Komodo Consulting Website Contact Form</p>
      </div>
      <div class="body">
        <div class="field">
          <div class="field-label">Inquiry Type</div>
          <div class="field-value">${inquiryLabel}</div>
        </div>
        <div class="grid">
          <div class="field">
            <div class="field-label">Name</div>
            <div class="field-value">${escapeHtml(data.name)}</div>
          </div>
          <div class="field">
            <div class="field-label">Work Email</div>
            <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color: #3b82f6;">${escapeHtml(data.email)}</a></div>
          </div>
        </div>
        <div class="grid">
          <div class="field">
            <div class="field-label">Company's Website</div>
            <div class="field-value">${data.company?.trim() ? `<a href="${escapeHtml(data.company)}" style="color: #3b82f6;">${escapeHtml(data.company)}</a>` : "—"}</div>
          </div>
          <div class="field">
            <div class="field-label">Country</div>
            <div class="field-value">${escapeHtml(data.country) || "—"}</div>
          </div>
        </div>
        <div class="grid">
          <div class="field">
            <div class="field-label">Team Size / Roles</div>
            <div class="field-value">${escapeHtml(data.teamSize) || "—"}</div>
          </div>
          <div class="field">
            <div class="field-label">Desired Start</div>
            <div class="field-value">${escapeHtml(data.startDate) || "—"}</div>
          </div>
        </div>
        ${data.message?.trim() ? `
        <div class="field">
          <div class="field-label">Message</div>
          <div class="message-box">
            <div class="field-value">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        ` : ""}
      </div>
      <div class="footer">
        This inquiry was submitted via the Komodo Consulting website contact form.
      </div>
    </div>
  </div>
</body>
</html>`;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Komodo Consulting Website <onboarding@resend.dev>",
        to: ["paulo.bartolomeu@komodo-consulting.pt"],
        subject: "New Komodo Consulting website inquiry",
        html: htmlBody,
        reply_to: data.email,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend error:", resendData);
      throw new Error(resendData.message || "Failed to send email");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send inquiry. Please try again later." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
