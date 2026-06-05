import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { getBanners } from "@/lib/services/storefront";
import { bannerSchema } from "@/lib/validators";
import { readDashboard, writeDashboard, makeId } from "@/lib/github-store";
import type { Banner } from "@/lib/types";

const storageErrorResponse = () =>
  NextResponse.json(
    {
      error:
        "Kalici kayit alani ayarlanmamis. Vercel Environment Variables icin DATABASE_URL veya GITHUB_REPOSITORY + GITHUB_PAT ekleyin.",
    },
    { status: 500 },
  );

export async function GET() {
  const banners = await getBanners();
  return NextResponse.json({ banners });
}

export async function POST(request: Request) {
  const json = (await request.json()) as unknown;
  const parsed = bannerSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  const fallbackCreate = async () => {
    const dashboard = await readDashboard();
    const created: Banner = {
      id: makeId("banner"),
      title: sanitizeText(parsed.data.title),
      subtitle: sanitizeText(parsed.data.subtitle),
      image: parsed.data.image,
      buttonText: sanitizeText(parsed.data.buttonText),
      buttonLink: parsed.data.buttonLink,
      theme: parsed.data.theme ?? null,
      order: parsed.data.order,
      isActive: parsed.data.isActive,
      createdAt: new Date().toISOString(),
    };

    dashboard.banners = [...dashboard.banners, created].sort((a, b) => a.order - b.order);
    const persisted = await writeDashboard(dashboard, `Add banner ${created.id}`);
    if (!persisted) {
      return storageErrorResponse();
    }

    return NextResponse.json({ banner: created });
  };

  if (!isDatabaseConfigured) {
    return fallbackCreate();
  }

  try {
    const created = await prisma.banner.create({
      data: {
        title: sanitizeText(parsed.data.title),
        subtitle: sanitizeText(parsed.data.subtitle),
        image: parsed.data.image,
        buttonText: sanitizeText(parsed.data.buttonText),
        buttonLink: parsed.data.buttonLink,
        theme: parsed.data.theme ?? null,
        order: parsed.data.order,
        isActive: parsed.data.isActive,
      },
    });

    const banners = await getBanners();
    const banner = banners.find((item) => item.id === created.id);
    return NextResponse.json({ banner });
  } catch (error) {
    console.warn("[admin:banners:post] prisma failed, falling back", error);
    return fallbackCreate();
  }
}
