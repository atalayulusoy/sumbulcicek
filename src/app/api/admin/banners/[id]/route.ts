import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { getBanners } from "@/lib/services/storefront";
import { bannerSchema } from "@/lib/validators";

interface BannerRouteProps {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, { params }: BannerRouteProps) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ error: "Veritabani baglantisi gerekli." }, { status: 503 });
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

  const banners = await getBanners();
  const banner = banners.find((item) => item.id === params.id);
  return NextResponse.json({ banner });
}

export async function DELETE(_: Request, { params }: BannerRouteProps) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ error: "Veritabani baglantisi gerekli." }, { status: 503 });
  }

  await prisma.banner.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ success: true });
}
