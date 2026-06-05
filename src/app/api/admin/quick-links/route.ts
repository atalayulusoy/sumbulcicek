import { NextResponse } from "next/server";

import { readDashboard, writeDashboard } from "@/lib/github-store";
import { sanitizeText } from "@/lib/sanitizers";
import { quickLinksSchema } from "@/lib/validators";
import type { QuickLink } from "@/lib/types";

const storageErrorResponse = () =>
  NextResponse.json(
    {
      error:
        "Kalici kayit alani ayarlanmamis. Vercel Environment Variables icin GITHUB_REPOSITORY + GITHUB_PAT ekleyin.",
    },
    { status: 500 },
  );

export async function GET() {
  const dashboard = await readDashboard();
  return NextResponse.json({
    quickLinks: dashboard.quickLinks.sort((first, second) => first.order - second.order),
  });
}

export async function PATCH(request: Request) {
  const json = (await request.json()) as unknown;
  const parsed = quickLinksSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  const dashboard = await readDashboard();
  const quickLinks: QuickLink[] = parsed.data
    .map((quickLink) => ({
      id: sanitizeText(quickLink.id),
      title: sanitizeText(quickLink.title),
      href: quickLink.href.trim(),
      image: quickLink.image.trim(),
      order: quickLink.order,
      isActive: quickLink.isActive,
      createdAt: quickLink.createdAt ?? new Date().toISOString(),
    }))
    .sort((first, second) => first.order - second.order);

  dashboard.quickLinks = quickLinks;

  const persisted = await writeDashboard(dashboard, "Update homepage quick links");
  if (!persisted) {
    return storageErrorResponse();
  }

  return NextResponse.json({ quickLinks });
}
