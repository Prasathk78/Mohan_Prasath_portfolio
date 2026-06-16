import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";
const RECIPIENT = "mohanprasathk78@gmail.com";

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

function encodeBase64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function buildRawEmail(name: string, email: string, message: string): string {
  const safeName = name.replace(/[\r\n]/g, " ");
  const subject = `New Portfolio Message from ${safeName}`;
  const body = [
    `New message from your portfolio contact form.`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    ``,
    `Message:`,
    message,
  ].join("\r\n");

  const headers = [
    `To: ${RECIPIENT}`,
    `From: ${RECIPIENT}`,
    `Reply-To: ${email}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset="UTF-8"`,
  ].join("\r\n");

  return encodeBase64Url(`${headers}\r\n\r\n${body}`);
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactEmailRequest = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");
    const gmailApiKey = Deno.env.get("GOOGLE_MAIL_API_KEY");

    if (!lovableApiKey || !gmailApiKey) {
      console.error("Missing required keys for Gmail gateway");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const raw = buildRawEmail(name, email, message);

    const gmailResponse = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": gmailApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw }),
    });

    const responseText = await gmailResponse.text();

    if (!gmailResponse.ok) {
      console.error("Gmail gateway error", gmailResponse.status, responseText);
      return new Response(
        JSON.stringify({ error: "Failed to send email", status: gmailResponse.status, details: responseText }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    console.log("Email sent via Gmail:", responseText);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
