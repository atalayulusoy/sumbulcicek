import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { getBanners } from "@/lib/services/storefront";
import { bannerSchema } from "@/lib/validators";
import { readDashboard, writeDashboard } from "@/lib/github-store";
import type { Banner } from "@/lib/types";

const storageErrorResponse = () =>
  NextResponse.json(
    {
      error:
        "Kalici kayit alani ayarlanmamis. Vercel Environment Variables icin DATABASE_URL veya GITHUB_REPOSITORY + GITHUB_PAT ekleyin.",
    },
    { status: 500 },
  );

interface BannerRouteProps {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, { params }: BannerRouteProps) {
  const json = (await request.json()) as unknown;
  const parsed = bannerSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  const fallbackUpdate = async () => {
    const dashboard = await readDashboard();
    let banner: Banner | undefined;

    dashboard.banners = (dashboard.banners || []).map((b) => {
      if (b.id !== params.id) {
        return b;
      }

      banner = {
        ...b,
        title: sanitizeText(parsed.data.title),
        subtitle: sanitizeText(parsed.data.subtitle),
        image: parsed.data.image,
        buttonText: sanitizeText(parsed.data.buttonText),
        buttonLink: parsed.data.buttonLink,
        theme: parsed.data.theme ?? null,
        order: parsed.data.order,
        isActive: parsed.data.isActive,
      };
      return banner;
    });

    if (!banner) {
      return NextResponse.json({ error: "Banner bulunamadi." }, { status: 404 });
    }

    const persisted = await writeDashboard(dashboard, `Update banner ${params.id}`);
    if (!persisted) {
      return storageErrorResponse();
    }

    return NextResponse.json({ banner });
  };

  if (!isDatabaseConfigured) {
    return fallbackUpdate();
  }

  try {
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
  } catch (error) {
    console.warn("[admin:banner:patch] prisma failed, falling back", error);
    return fallbackUpdate();
  }
}

export async function DELETE(_: Request, { params }: BannerRouteProps) {
  try {
    if (!isDatabaseConfigured) {
      const dashboard = await readDashboard();
      dashboard.banners = (dashboard.banners || []).filter((b) => b.id !== params.id);
      const persisted = await writeDashboard(dashboard, `Delete banner ${params.id}`);
      if (!persisted) {
        return storageErrorResponse();
      }
      return NextResponse.json({ success: true });
    }

    await prisma.banner.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.warn("[admin:banner:delete] prisma failed, falling back", error);

    try {
      const dashboard = await readDashboard();
      dashboard.banners = (dashboard.banners || []).filter((b) => b.id !== params.id);
      const persisted = await writeDashboard(dashboard, `Delete banner ${params.id}`);
      if (!persisted) {
        return storageErrorResponse();
      }

      return NextResponse.json({ success: true });
    } catch (fallbackError) {
      console.error("[admin:banner:delete]", fallbackError);
      const message = fallbackError instanceof Error ? fallbackError.message : "Banner silinemedi.";
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }
}
