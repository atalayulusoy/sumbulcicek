import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { getBanners } from "@/lib/services/storefront";
import { bannerSchema } from "@/lib/validators";
import { readDashboard, writeDashboard } from "@/lib/github-store";

interface BannerRouteProps {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, { params }: BannerRouteProps) {
  if (!isDatabaseConfigured) {
    const json = (await request.json()) as unknown;
    const parsed = bannerSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

    const dashboard = await readDashboard();
    dashboard.banners = (dashboard.banners || []).map((b) =>
      b.id === params.id
        ? {
            ...b,
            title: sanitizeText(parsed.data.title),
            subtitle: sanitizeText(parsed.data.subtitle),
            image: parsed.data.image,
            buttonText: sanitizeText(parsed.data.buttonText),
            buttonLink: parsed.data.buttonLink,
            theme: parsed.data.theme ?? null,
            order: parsed.data.order,
            isActive: parsed.data.isActive,
          }
        : b,
    );

    await writeDashboard(dashboard, `Update banner ${params.id}`);

    const banners = await getBanners();
    const banner = banners.find((item) => item.id === params.id);
    return NextResponse.json({ banner });
  }

    const json = await request.json();
    const parsed = bannerSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

    await prisma.banner.update({
      where: { id: params.id },
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

    const bannersDb = await getBanners();
    const bannerDb = bannersDb.find((item) => item.id === params.id);
    return NextResponse.json({ banner: bannerDb });
}

export async function DELETE(_: Request, { params }: BannerRouteProps) {
  if (!isDatabaseConfigured) {
    const dashboard = await readDashboard();
    dashboard.banners = (dashboard.banners || []).filter((b) => b.id !== params.id);
    await writeDashboard(dashboard, `Delete banner ${params.id}`);
    return NextResponse.json({ success: true });
  }

  await prisma.banner.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ success: true });
}
