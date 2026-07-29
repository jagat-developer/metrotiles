const allowedProjectTypes = new Set([
  "Tiles",
  "Flooring",
  "Furnishings",
  "Construction",
]);

const maxLengths = {
  name: 120,
  contact: 160,
  projectType: 40,
  message: 2000,
};

type QuotePayload = {
  name: string;
  contact: string;
  projectType: string;
  message: string;
};

export const runtime = "nodejs";

function cleanString(value: FormDataEntryValue | null, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function extractEmail(value: string) {
  return (
    value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? ""
  );
}

function wantsJson(request: Request) {
  return request.headers.get("accept")?.includes("application/json") ?? false;
}

function jsonResponse(
  body: { ok: boolean; error?: string; id?: string },
  status = 200
) {
  return Response.json(body, { status });
}

function failureResponse(request: Request, error: string, status = 400) {
  if (wantsJson(request)) {
    return jsonResponse({ ok: false, error }, status);
  }

  return Response.redirect(new URL("/quote/?error=quote", request.url), 303);
}

function successResponse(request: Request, id?: string) {
  if (wantsJson(request)) {
    return jsonResponse({ ok: true, id });
  }

  return Response.redirect(new URL("/thank-you/", request.url), 303);
}

function buildEmailHtml(payload: QuotePayload) {
  const rows = [
    ["Name", payload.name],
    ["Contact", payload.contact],
    ["Project type", payload.projectType],
    ["Message", payload.message || "No message provided."],
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1c1917">
      <h1 style="font-size:22px;margin:0 0 16px">New Metro Tiles & Flooring quote request</h1>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="border:1px solid #e7e5e4;background:#f5f5f4;padding:10px;text-align:left;vertical-align:top;width:160px">
                    ${escapeHtml(label)}
                  </th>
                  <td style="border:1px solid #e7e5e4;padding:10px;vertical-align:top;white-space:pre-wrap">
                    ${escapeHtml(value)}
                  </td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function buildEmailText(payload: QuotePayload) {
  return [
    "New Metro Tiles & Flooring quote request",
    "",
    `Name: ${payload.name}`,
    `Contact: ${payload.contact}`,
    `Project type: ${payload.projectType}`,
    "",
    "Message:",
    payload.message || "No message provided.",
  ].join("\n");
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !from || !to) {
    return failureResponse(
      request,
      "Quote email is not configured yet. Please call or email the showroom directly.",
      500
    );
  }

  const formData = await request.formData();
  const honeypot = cleanString(formData.get("companyWebsite"), 200);

  if (honeypot) {
    return successResponse(request);
  }

  const payload: QuotePayload = {
    name: cleanString(formData.get("name"), maxLengths.name),
    contact: cleanString(formData.get("contact"), maxLengths.contact),
    projectType: cleanString(
      formData.get("projectType"),
      maxLengths.projectType
    ),
    message: cleanString(formData.get("message"), maxLengths.message),
  };

  if (!payload.name || !payload.contact) {
    return failureResponse(
      request,
      "Please add your name and the best phone or email to reach you."
    );
  }

  if (!allowedProjectTypes.has(payload.projectType)) {
    payload.projectType = "General";
  }

  const replyTo = extractEmail(payload.contact);
  const resendPayload: Record<string, unknown> = {
    from,
    to: [to],
    subject: `New quote request from ${payload.name}`,
    html: buildEmailHtml(payload),
    text: buildEmailText(payload),
    tags: [
      {
        name: "source",
        value: "metro_quote_form",
      },
    ],
  };

  if (replyTo) {
    resendPayload.reply_to = [replyTo];
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify(resendPayload),
  });

  const result = (await response.json().catch(() => ({}))) as {
    id?: string;
    message?: string;
  };

  if (!response.ok) {
    console.error("Resend quote email failed", {
      status: response.status,
      message: result.message,
    });

    return failureResponse(
      request,
      "We could not send your request right now. Please call or email the showroom directly.",
      502
    );
  }

  return successResponse(request, result.id);
}
