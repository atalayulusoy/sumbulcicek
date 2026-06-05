import { NextResponse } from "next/server";

import { readDashboard, writeDashboard } from "@/lib/github-store";
import { sanitizeText } from "@/lib/sanitizers";
import { homeShowcaseSlidesSchema } from "@/lib/validators";
import type { HomeShowcaseSlide } from "@/lib/types";

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
    homeShowcaseSlides: dashboard.homeShowcaseSlides.sort((first, second) => first.order - second.order),
  });
}

export async function PATCH(request: Request) {
  const json = (await request.json()) as unknown;
  const parsed = homeShowcaseSlidesSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  const dashboard = await readDashboard();
  const homeShowcaseSlides: HomeShowcaseSlide[] = parsed.data
    .map((slide) => ({
      id: sanitizeText(slide.id),
      title: sanitizeText(slide.title),
      href: slide.href.trim(),
      image: slide.image.trim(),
      order: slide.order,
      isActive: slide.isActive,
      createdAt: slide.createdAt ?? new Date().toISOString(),
    }))
    .sort((first, second) => first.order - second.order);

  dashboard.homeShowcaseSlides = homeShowcaseSlides;

  const persisted = await writeDashboard(dashboard, "Update home showcase slides");
  if (!persisted) {
    return storageErrorResponse();
  }

  return NextResponse.json({ homeShowcaseSlides });
}
