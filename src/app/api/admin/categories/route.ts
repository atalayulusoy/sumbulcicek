import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { slugify } from "@/lib/slugify";
import { getCategories } from "@/lib/services/storefront";
import { categorySchema } from "@/lib/validators";
import { readDashboard, writeDashboard, makeId } from "@/lib/github-store";

export async function GET() {
  const categories = await getCategories();
  return NextResponse.json({ categories });
}

export async function POST(request: Request) {
  if (!isDatabaseConfigured) {
    const json = await request.json();
    const parsed = categorySchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

    const dashboard = await readDashboard();
    const created = {
      id: makeId("cat"),
      name: sanitizeText(parsed.data.name),
      slug: slugify(parsed.data.slug || parsed.data.name),
      icon: parsed.data.icon,
      createdAt: new Date().toISOString(),
    } as any;

    dashboard.categories = [...(dashboard.categories || []), created];
    await writeDashboard(dashboard, `Add category ${created.name}`);

    const categories = await getCategories();
    const category = categories.find((item) => item.id === created.id);
    return NextResponse.json({ category });
    }

    // Database path
    const json = await request.json();
    const parsed = categorySchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

    const created = await prisma.category.create({
      data: {
        name: sanitizeText(parsed.data.name),
        slug: slugify(parsed.data.slug || parsed.data.name),
        icon: parsed.data.icon,
      },
    });

    const categories = await getCategories();
    const category = categories.find((item) => item.id === created.id);
    return NextResponse.json({ category });
}
