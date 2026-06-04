import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { slugify } from "@/lib/slugify";
import { getCategories } from "@/lib/services/storefront";
import { categorySchema } from "@/lib/validators";
import { readDashboard, writeDashboard } from "@/lib/github-store";

interface CategoryRouteProps {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, { params }: CategoryRouteProps) {
  try {
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
      dashboard.categories = (dashboard.categories || []).map((c) =>
        c.id === params.id ? { ...c, ...sanitizedData } : c,
      );

      await writeDashboard(dashboard, `Update category ${params.id}`);

      const categories = await getCategories();
      const category = categories.find((item) => item.id === params.id);
      return NextResponse.json({ category });
    }

    // 2) isDatabaseConfigured true olsa bile DB erişilemeyebilir.
    //    Prisma hata verirse fallback'a dön.
    try {
      await prisma.category.update({
        where: { id: params.id },
        data: sanitizedData,
      });

      const categoriesDb = await getCategories();
      const categoryDb = categoriesDb.find((item) => item.id === params.id);
      return NextResponse.json({ category: categoryDb });
    } catch (error) {
      console.warn("[admin:category:patch] prisma failed, falling back", error);

      const dashboard = await readDashboard();
      dashboard.categories = (dashboard.categories || []).map((c) =>
        c.id === params.id ? { ...c, ...sanitizedData } : c,
      );

      await writeDashboard(dashboard, `Update category ${params.id}`);

      const categories = await getCategories();
      const category = categories.find((item) => item.id === params.id);
      return NextResponse.json({ category });
    }
  } catch (error) {
    console.error("[admin:category:patch]", error);
    const message = error instanceof Error ? error.message : "Kategori guncellenemedi.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: CategoryRouteProps) {
  try {
    // 1) DB kapalıysa direkt dashboard'a yaz.
    if (!isDatabaseConfigured) {
      const dashboard = await readDashboard();
      dashboard.categories = (dashboard.categories || []).filter((c) => c.id !== params.id);
      await writeDashboard(dashboard, `Delete category ${params.id}`);
      return NextResponse.json({ success: true });
    }

    // 2) isDatabaseConfigured true olsa bile DB erişilemeyebilir.
    //    Prisma hata verirse fallback'a dön.
    try {
      await prisma.category.delete({
        where: { id: params.id },
      });

      return NextResponse.json({ success: true });
    } catch (error) {
      console.warn("[admin:category:delete] prisma failed, falling back", error);

      const dashboard = await readDashboard();
      dashboard.categories = (dashboard.categories || []).filter((c) => c.id !== params.id);
      await writeDashboard(dashboard, `Delete category ${params.id}`);

      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("[admin:category:delete]", error);
    const message = error instanceof Error ? error.message : "Kategori silinemedi.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

