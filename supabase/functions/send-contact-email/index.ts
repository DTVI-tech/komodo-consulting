import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://komodo-consulting.lovable.app",
  "https://www.komodo-consulting.pt",
  "https://komodo-consulting.pt",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
  };
}

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

const ALLOWED_INQUIRY_TYPES: Record<string, string> = {
  "staff-aug": "Staff Augmentation",
  "dedicated-team": "Dedicated Team",
  "project": "Nearshore Project",
  "consulting": "Consulting",
};

const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MINUTES = 15;

function getSupabaseAdmin() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );
}

async function isRateLimited(ip: string): Promise<boolean> {
  const supabaseAdmin = getSupabaseAdmin();
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();

  // Count recent submissions from this IP
  const { count, error } = await supabaseAdmin
    .from("contact_rate_limit")
    .select("*", { count: "exact", head: true })
    .eq("client_ip", ip)
    .gte("created_at", windowStart);

  if (error) {
    console.error("Rate limit check error:", error);
    return false; // fail open to not block legitimate users
  }

  return (count ?? 0) >= RATE_LIMIT_MAX;
}

async function recordSubmission(ip: string): Promise<void> {
  const supabaseAdmin = getSupabaseAdmin();
  await supabaseAdmin.from("contact_rate_limit").insert({ client_ip: ip });

  // Clean up old entries (older than the window)
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
  await supabaseAdmin.from("contact_rate_limit").delete().lt("created_at", windowStart);
}

function truncate(str: string | undefined | null, max: number): string {
  if (!str) return "";
  return str.length > max ? str.slice(0, max) : str;
}

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (await isRateLimited(clientIp)) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const data: ContactFormData = await req.json();

    // --- Server-side validation ---
    const name = truncate(data.name?.trim(), MAX_FIELD_LENGTH);
    const email = truncate(data.email?.trim(), 255);
    const company = truncate(data.company?.trim(), MAX_FIELD_LENGTH);
    const country = truncate(data.country?.trim(), MAX_FIELD_LENGTH);
    const teamSize = truncate(data.teamSize?.trim(), MAX_FIELD_LENGTH);
    const startDate = truncate(data.startDate?.trim(), MAX_FIELD_LENGTH);
    const message = truncate(data.message?.trim(), MAX_MESSAGE_LENGTH);

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate company URL scheme if provided
    if (company && !isValidUrl(company) && !isValidUrl(`https://${company}`)) {
      return new Response(
        JSON.stringify({ error: "Invalid company website URL" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Normalize company URL for safe href
    let safeCompanyUrl = "";
    if (company) {
      safeCompanyUrl = isValidUrl(company) ? company : `https://${company}`;
    }

    // Validate inquiry type
    if (data.inquiryType && !ALLOWED_INQUIRY_TYPES[data.inquiryType]) {
      return new Response(
        JSON.stringify({ error: "Invalid inquiry type" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const inquiryLabel = data.inquiryType
      ? ALLOWED_INQUIRY_TYPES[data.inquiryType]
      : "Not specified";

    const timestamp = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/Lisbon",
      dateStyle: "full",
      timeStyle: "short",
    });

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
            <div class="field-value">${escapeHtml(name)}</div>
          </div>
          <div class="field">
            <div class="field-label">Work Email</div>
            <div class="field-value"><a href="mailto:${escapeHtml(email)}" style="color: #3b82f6;">${escapeHtml(email)}</a></div>
          </div>
        </div>
        <div class="grid">
          <div class="field">
            <div class="field-label">Company's Website</div>
            <div class="field-value">${safeCompanyUrl ? `<a href="${escapeHtml(safeCompanyUrl)}" style="color: #3b82f6;">${escapeHtml(company)}</a>` : "—"}</div>
          </div>
          <div class="field">
            <div class="field-label">Country</div>
            <div class="field-value">${escapeHtml(country) || "—"}</div>
          </div>
        </div>
        <div class="grid">
          <div class="field">
            <div class="field-label">Team Size / Roles</div>
            <div class="field-value">${escapeHtml(teamSize) || "—"}</div>
          </div>
          <div class="field">
            <div class="field-label">Desired Start</div>
            <div class="field-value">${escapeHtml(startDate) || "—"}</div>
          </div>
        </div>
        ${message ? `
        <div class="field">
          <div class="field-label">Message</div>
          <div class="message-box">
            <div class="field-value">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
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
        reply_to: email,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend error:", resendData);
      throw new Error("Failed to send email");
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