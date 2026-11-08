import { NextResponse } from "next/server";

const RESEND_URL = "https://api.resend.com/emails";

// Must match the options in components/ContactForm.tsx
const PROJECT_TYPES = [
  "Business website",
  "Online store",
  "Redesign of an existing site",
  "Something else",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Trim and cap the length of anything that comes from the browser.
const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

// Remove line breaks so a name can never inject extra email headers.
const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Spam trap: real visitors never see this field, so it is always empty for them.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = oneLine(clean(body.name, 100));
  const email = clean(body.email, 200);
  const projectType = clean(body.projectType, 100);
  const message = clean(body.message, 5000);

  if (
    !name ||
    !EMAIL_RE.test(email) ||
    !PROJECT_TYPES.includes(projectType) ||
    message.length < 10
  ) {
    return NextResponse.json(
      { error: "Please fill in every field correctly." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Portfolio contact <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return NextResponse.json({ error: "Email is not set up yet." }, { status: 500 });
  }

  try {
    const response = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New project enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error("Contact form: Resend error", response.status, await response.text());
      return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact form: request failed", error);
    return NextResponse.json({ error: "Could not send the message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
