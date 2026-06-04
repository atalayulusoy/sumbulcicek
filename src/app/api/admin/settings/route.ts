import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { getSiteSettings } from "@/lib/services/storefront";
import { siteSettingsSchema } from "@/lib/validators";
import { readDashboard, writeDashboard } from "@/lib/github-store";

export async function GET() {
  const settings = await getSiteSettings();
  return NextResponse.json({ settings });
}

export async function PATCH(request: Request) {
  if (!isDatabaseConfigured) {
    const json = await request.json();
    const parsed = siteSettingsSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

    const dashboard = await readDashboard();
    dashboard.settings = {
      ...(dashboard.settings || {}),
      ...parsed.data,
      updatedAt: new Date().toISOString(),
    } as any;

    await writeDashboard(dashboard, `Update site settings`);

    const settings = await getSiteSettings();
    return NextResponse.json({ settings });
  }

    const json = await request.json();
    const parsed = siteSettingsSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

    await prisma.siteSettings.upsert({
      where: { id: "site-settings" },
      update: {
        whatsappNumber: sanitizeText(parsed.data.whatsappNumber),
        instagram: parsed.data.instagram ? sanitizeText(parsed.data.instagram) : null,
        address: parsed.data.address ? sanitizeText(parsed.data.address) : null,
        phone: parsed.data.phone ? sanitizeText(parsed.data.phone) : null,
        heroTitle: parsed.data.heroTitle ? sanitizeText(parsed.data.heroTitle) : null,
        heroSubtitle: parsed.data.heroSubtitle ? sanitizeText(parsed.data.heroSubtitle) : null,
        metaTitle: parsed.data.metaTitle ? sanitizeText(parsed.data.metaTitle) : null,
        metaDescription: parsed.data.metaDescription
          ? sanitizeText(parsed.data.metaDescription)
          : null,
        aboutTitle: parsed.data.aboutTitle ? sanitizeText(parsed.data.aboutTitle) : null,
        aboutText: parsed.data.aboutText ? sanitizeText(parsed.data.aboutText) : null,
        footerText: parsed.data.footerText ? sanitizeText(parsed.data.footerText) : null,
        deliveryInfo: parsed.data.deliveryInfo ? sanitizeText(parsed.data.deliveryInfo) : null,
        primaryColor: parsed.data.primaryColor ?? null,
        secondaryColor: parsed.data.secondaryColor ?? null,
        accentColor: parsed.data.accentColor ?? null,
        homepageSections: parsed.data.homepageSections as unknown as Prisma.InputJsonValue,
      },
      create: {
        id: "site-settings",
        whatsappNumber: sanitizeText(parsed.data.whatsappNumber),
        instagram: parsed.data.instagram ? sanitizeText(parsed.data.instagram) : null,
        address: parsed.data.address ? sanitizeText(parsed.data.address) : null,
        phone: parsed.data.phone ? sanitizeText(parsed.data.phone) : null,
        heroTitle: parsed.data.heroTitle ? sanitizeText(parsed.data.heroTitle) : null,
        heroSubtitle: parsed.data.heroSubtitle ? sanitizeText(parsed.data.heroSubtitle) : null,
        metaTitle: parsed.data.metaTitle ? sanitizeText(parsed.data.metaTitle) : null,
        metaDescription: parsed.data.metaDescription
          ? sanitizeText(parsed.data.metaDescription)
          : null,
        aboutTitle: parsed.data.aboutTitle ? sanitizeText(parsed.data.aboutTitle) : null,
        aboutText: parsed.data.aboutText ? sanitizeText(parsed.data.aboutText) : null,
        footerText: parsed.data.footerText ? sanitizeText(parsed.data.footerText) : null,
        deliveryInfo: parsed.data.deliveryInfo ? sanitizeText(parsed.data.deliveryInfo) : null,
        primaryColor: parsed.data.primaryColor ?? null,
        secondaryColor: parsed.data.secondaryColor ?? null,
        accentColor: parsed.data.accentColor ?? null,
        homepageSections: parsed.data.homepageSections as unknown as Prisma.InputJsonValue,
      },
    });

    const settingsDb = await getSiteSettings();
    return NextResponse.json({ settings: settingsDb });
}
