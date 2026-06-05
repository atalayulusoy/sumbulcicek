import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { getSiteSettings } from "@/lib/services/storefront";
import { siteSettingsSchema } from "@/lib/validators";
import { readDashboard, writeDashboard } from "@/lib/github-store";
import type { SiteSettings } from "@/lib/types";

const storageErrorResponse = () =>
  NextResponse.json(
    {
      error:
        "Kalici kayit alani ayarlanmamis. Vercel Environment Variables icin DATABASE_URL veya GITHUB_REPOSITORY + GITHUB_PAT ekleyin.",
    },
    { status: 500 },
  );

export async function GET() {
  const settings = await getSiteSettings();
  return NextResponse.json({ settings });
}

export async function PATCH(request: Request) {
  const json = (await request.json()) as unknown;
  const parsed = siteSettingsSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  const fallbackUpdate = async () => {
    const dashboard = await readDashboard();
    dashboard.settings = {
      ...(dashboard.settings || {}),
      ...parsed.data,
      updatedAt: new Date().toISOString(),
    } as SiteSettings;

    const persisted = await writeDashboard(dashboard, `Update site settings`);
    if (!persisted) {
      return storageErrorResponse();
    }

    return NextResponse.json({ settings: dashboard.settings });
  };

  if (!isDatabaseConfigured) {
    return fallbackUpdate();
  }

  try {
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
  } catch (error) {
    console.warn("[admin:settings:patch] prisma failed, falling back", error);
    return fallbackUpdate();
  }
}
