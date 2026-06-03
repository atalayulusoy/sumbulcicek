import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { getBanners } from "@/lib/services/storefront";
import { bannerSchema } from "@/lib/validators";

export async function GET() {
  const banners = await getBanners();
  return NextResponse.json({ banners });
}

export async function POST(request: Request) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ error: "Veritabani baglantisi gerekli." }, { status: 503 });
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
