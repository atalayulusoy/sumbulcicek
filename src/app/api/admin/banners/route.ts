import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { getBanners } from "@/lib/services/storefront";
import { bannerSchema } from "@/lib/validators";
import { readDashboard, writeDashboard, makeId } from "@/lib/github-store";
import type { Banner } from "@/lib/types";

export async function GET() {
  const banners = await getBanners();
  return NextResponse.json({ banners });
}

export async function POST(request: Request) {
  if (!isDatabaseConfigured) {
    const json = (await request.json()) as unknown;
    const parsed = bannerSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

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
    await writeDashboard(dashboard, `Add banner ${created.id}`);

    const banners = await getBanners();
    const banner = banners.find((item) => item.id === created.id);
    return NextResponse.json({ banner });
  }

    const json = await request.json();
    const parsed = bannerSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

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
}
