import { NextRequest, NextResponse } from "next/server";

type InterestPayload = {
  name?: unknown;
  email?: unknown;
  company_role?: unknown;
  company?: unknown;
  role?: unknown;
  team_size?: unknown;
  business_type?: unknown;
  workflow?: unknown;
  ai_concern?: unknown;
  interest_type?: unknown;
  page_path?: unknown;
};

const BUTTONDOWN_SUBSCRIBERS_URL =
  "https://api.buttondown.com/v1/subscribers";
const RESEND_EMAILS_URL = "https://api.resend.com/emails";
const NOTIFICATION_TO = "meetwudi@gmail.com";
const DEFAULT_FROM = "Future of Work initiative <onboarding@resend.dev>";

function stringValue(value: unknown, maxLength = 1000) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function arrayValue(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function requestIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }

  return request.headers.get("x-real-ip") ?? undefined;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function submissionText(
  email: string,
  submission: ReturnType<typeof createSubmission>,
) {
  return [
    "New Future of Work initiative interest",
    "",
    `Name: ${submission.name || "-"}`,
    `Email: ${email}`,
    `Company / role: ${submission.company_role || "-"}`,
    `Company: ${submission.company || "-"}`,
    `Role: ${submission.role || "-"}`,
    `Team size: ${submission.team_size || "-"}`,
    `Business type: ${submission.business_type || "-"}`,
    `Interest type: ${submission.interest_type.join(", ") || "-"}`,
    "",
    "Workflow:",
    submission.workflow,
    "",
    "Concern:",
    submission.ai_concern || "-",
    "",
    `Page: ${submission.page_path || "-"}`,
    `Submitted: ${submission.submitted_at}`,
  ].join("\n");
}

function submissionHtml(
  email: string,
  submission: ReturnType<typeof createSubmission>,
) {
  const rows = [
    ["Name", submission.name || "-"],
    ["Email", email],
    ["Company / role", submission.company_role || "-"],
    ["Company", submission.company || "-"],
    ["Role", submission.role || "-"],
    ["Team size", submission.team_size || "-"],
    ["Business type", submission.business_type || "-"],
    ["Interest type", submission.interest_type.join(", ") || "-"],
    ["Workflow", submission.workflow],
    ["Concern", submission.ai_concern || "-"],
    ["Page", submission.page_path || "-"],
    ["Submitted", submission.submitted_at],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #181d26; line-height: 1.5;">
      <h1 style="font-size: 22px;">New Future of Work initiative interest</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th align="left" valign="top" style="border-top: 1px solid #e0e2e6; width: 150px;">${escapeHtml(label)}</th>
                  <td style="border-top: 1px solid #e0e2e6; white-space: pre-wrap;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function createSubmission(body: InterestPayload) {
  return {
    name: stringValue(body.name, 200),
    company_role: stringValue(body.company_role, 300),
    company: stringValue(body.company, 200),
    role: stringValue(body.role, 200),
    team_size: stringValue(body.team_size, 80),
    business_type: stringValue(body.business_type, 300),
    workflow: stringValue(body.workflow, 2000),
    ai_concern: stringValue(body.ai_concern, 2000),
    interest_type: arrayValue(body.interest_type),
    page_path: stringValue(body.page_path, 300),
    submitted_at: new Date().toISOString(),
  };
}

async function saveToButtondown(
  email: string,
  submission: ReturnType<typeof createSubmission>,
  ipAddress: string | undefined,
) {
  const apiKey = process.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    return { skipped: true, reason: "BUTTONDOWN_API_KEY is not configured." };
  }

  const response = await fetch(BUTTONDOWN_SUBSCRIBERS_URL, {
    method: "POST",
    headers: {
      Authorization: `Token ${apiKey}`,
      "Content-Type": "application/json",
      "X-Buttondown-Collision-Behavior": "add",
    },
    body: JSON.stringify({
      email_address: email,
      ip_address: ipAddress,
      referrer_url: submission.page_path,
      tags: ["future-of-work-interest"],
      metadata: {
        fow_interest: submission,
      },
      notes: [
        "Future of Work initiative interest",
        submission.name && `Name: ${submission.name}`,
        submission.company_role && `Company / role: ${submission.company_role}`,
        submission.company && `Company: ${submission.company}`,
        submission.workflow && `Workflow: ${submission.workflow}`,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();

    return { ok: false, reason: `Buttondown rejected the submission: ${detail}` };
  }

  return { ok: true };
}

async function sendNotification(
  email: string,
  submission: ReturnType<typeof createSubmission>,
) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return { skipped: true, reason: "RESEND_API_KEY is not configured." };
  }

  const response = await fetch(RESEND_EMAILS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM,
      to: [process.env.FOW_INTEREST_TO_EMAIL ?? NOTIFICATION_TO],
      reply_to: email,
      subject: `FOW interest: ${submission.company || submission.name || email}`,
      text: submissionText(email, submission),
      html: submissionHtml(email, submission),
      tags: [
        {
          name: "source",
          value: "future-of-work-interest",
        },
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();

    return { ok: false, reason: `Resend rejected the notification: ${detail}` };
  }

  return { ok: true };
}

export async function POST(request: NextRequest) {
  let body: InterestPayload;

  try {
    body = (await request.json()) as InterestPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const email = stringValue(body.email, 320).toLowerCase();
  const submission = createSubmission(body);

  if (!isValidEmail(email) || !submission.workflow) {
    return NextResponse.json(
      { error: "A valid email and workflow are required." },
      { status: 400 },
    );
  }

  const [buttondown, notification] = await Promise.all([
    saveToButtondown(email, submission, requestIp(request)),
    sendNotification(email, submission),
  ]);

  const saved = "ok" in buttondown && buttondown.ok;
  const notified = "ok" in notification && notification.ok;

  if (!saved && !notified) {
    return NextResponse.json(
      {
        error: "Submission was not saved or emailed.",
        details: [buttondown.reason, notification.reason].filter(Boolean),
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    saved,
    notified,
    warnings: [buttondown.reason, notification.reason].filter(Boolean),
  });
}
