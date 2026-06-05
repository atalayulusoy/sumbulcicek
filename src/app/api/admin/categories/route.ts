import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { slugify } from "@/lib/slugify";
import { getCategories } from "@/lib/services/storefront";
import { categorySchema } from "@/lib/validators";
import { readDashboard, writeDashboard, makeId } from "@/lib/github-store";
import type { Category } from "@/lib/types";

const storageErrorResponse = () =>
  NextResponse.json(
    {
      error:
        "Kalici kayit alani ayarlanmamis. Vercel Environment Variables icin DATABASE_URL veya GITHUB_REPOSITORY + GITHUB_PAT ekleyin.",
    },
    { status: 500 },
  );

export async function GET() {
  const categories = await getCategories();
  return NextResponse.json({ categories });
}

export async function POST(request: Request) {
  const json = (await request.json()) as unknown;
  const parsed = categorySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  const sanitizedData = {
    name: sanitizeText(parsed.data.name),
    slug: slugify(parsed.data.slug || parsed.data.name),
    icon: parsed.data.icon,
  };

  // 1) DB kapalıysa direkt dashboard'a yaz.
  if (!isDatabaseConfigured) {
    const dashboard = await readDashboard();
    const created: Category = {
      id: makeId("cat"),
      ...sanitizedData,
      createdAt: new Date().toISOString(),
    };

    dashboard.categories = [...(dashboard.categories || []), created];
    const persisted = await writeDashboard(dashboard, `Add category ${created.name}`);
    if (!persisted) {
      return storageErrorResponse();
    }

    return NextResponse.json({ category: created });
  }

  // 2) isDatabaseConfigured true olsa bile DB erişilemeyebilir.
  //    Prisma hata verirse fallback'a dön.
  try {
    const created = await prisma.category.create({
      data: sanitizedData,
    });

    const categories = await getCategories();
    const category = categories.find((item) => item.id === created.id);
    return NextResponse.json({ category });
  } catch (error) {
    console.warn("[admin:categories:post] prisma failed, falling back", error);

    const dashboard = await readDashboard();
    const created: Category = {
      id: makeId("cat"),
      ...sanitizedData,
      createdAt: new Date().toISOString(),
    };

    dashboard.categories = [...(dashboard.categories || []), created];
    const persisted = await writeDashboard(dashboard, `Add category ${created.name}`);
    if (!persisted) {
      return storageErrorResponse();
    }

    return NextResponse.json({ category: created });
  }
}
