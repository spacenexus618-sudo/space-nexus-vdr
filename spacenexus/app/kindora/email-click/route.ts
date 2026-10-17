import { NextRequest, NextResponse } from "next/server";

const DEFAULT_GRAPHQL_URL = "https://spaceaiapp.com/backend/graphql";
const EMAIL_PATH = "/email/spacekindora";
const FALLBACK = "https://spacenexus.net/kindora";

const ALLOWED_HOSTS = new Set([
  "spacenexus.net",
  "www.spacenexus.net",
  "cal.com",
  "www.cal.com",
  "youtube.com",
  "www.youtube.com",
  "instagram.com",
  "www.instagram.com",
  "x.com",
  "www.x.com",
  "linkedin.com",
  "www.linkedin.com",
]);

function resolveTarget(raw: string | null): string | null {
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    if (!ALLOWED_HOSTS.has(url.hostname.toLowerCase())) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const destination = resolveTarget(params.get("to")) || FALLBACK;
  const cta = (params.get("n") || "unknown").slice(0, 80);

  const record = fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL || DEFAULT_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `mutation CreateAibizmodClick($input: CreateAibizmodClickInput!) {
        createAibizmodClick(input: $input) { _id }
      }`,
      variables: {
        input: {
          elementId: cta,
          elementText: cta,
          elementSelector: "spacekindora-email",
          isLogined: false,
          path: EMAIL_PATH,
          targetUrl: destination,
        },
      },
    }),
  }).catch(() => null);

  await Promise.race([record, new Promise((resolve) => setTimeout(resolve, 1500))]);

  return NextResponse.redirect(destination, { status: 302 });
}
