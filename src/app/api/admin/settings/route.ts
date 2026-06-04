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
}
