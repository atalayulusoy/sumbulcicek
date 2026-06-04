import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { slugify } from "@/lib/slugify";
import { getProducts } from "@/lib/services/storefront";
import { productSchema } from "@/lib/validators";
import { readDashboard, writeDashboard } from "@/lib/github-store";

interface ProductRouteProps {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, { params }: ProductRouteProps) {
  try {
    const json = (await request.json()) as unknown;
    const parsed = productSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

    const data = parsed.data;
    const sanitizedData = {
      title: sanitizeText(data.title),
      slug: slugify(data.slug || data.title),
      description: sanitizeText(data.description),
      price: data.price,
      discountPrice: data.discountPrice ?? null,
      images: data.images,
      categoryId: data.categoryId,
      featured: data.featured,
      stockStatus: data.stockStatus,
      badge: data.badge ? sanitizeText(data.badge) : null,
      deliveryInfo: data.deliveryInfo ? sanitizeText(data.deliveryInfo) : null,
    };

    // 1) DB kapalıysa direkt dashboard'a yaz.
    if (!isDatabaseConfigured) {
      const dashboard = await readDashboard();

      dashboard.products = (dashboard.products || []).map((p) =>
        p.id === params.id ? { ...p, ...sanitizedData } : p,
      );

      await writeDashboard(dashboard, `Update product ${params.id}`);

      const products = await getProducts();
      const product = products.find((item) => item.id === params.id);
      return NextResponse.json({ product });
    }

    // 2) isDatabaseConfigured true olsa bile DB ulaşılamıyor olabilir.
    //    Prisma hata verirse fallback yap.
    try {
      await prisma.product.update({
        where: { id: params.id },
        data: sanitizedData,
      });

      const productsDb = await getProducts();
      const productDb = productsDb.find((item) => item.id === params.id);
      return NextResponse.json({ product: productDb });
    } catch (error) {
      console.warn("[admin:product:patch] prisma failed, falling back", error);

      const dashboard = await readDashboard();
      dashboard.products = (dashboard.products || []).map((p) =>
        p.id === params.id ? { ...p, ...sanitizedData } : p,
      );

      await writeDashboard(dashboard, `Update product ${params.id}`);

      const products = await getProducts();
      const product = products.find((item) => item.id === params.id);
      return NextResponse.json({ product });
    }
  } catch (error) {
    console.error("[admin:product:patch]", error);
    const message = error instanceof Error ? error.message : "Urun guncellenemedi.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: ProductRouteProps) {
  try {
    // 1) DB kapalıysa direkt dashboard'a yaz.
    if (!isDatabaseConfigured) {
      const dashboard = await readDashboard();
      dashboard.products = (dashboard.products || []).filter((p) => p.id !== params.id);
      await writeDashboard(dashboard, `Delete product ${params.id}`);
      return NextResponse.json({ success: true });
    }

    // 2) isDatabaseConfigured true olsa bile DB ulaşılamıyor olabilir.
    //    Prisma hata verirse fallback yap.
    try {
      await prisma.product.delete({
        where: { id: params.id },
      });

      return NextResponse.json({ success: true });
    } catch (error) {
      console.warn("[admin:product:delete] prisma failed, falling back", error);

      const dashboard = await readDashboard();
      dashboard.products = (dashboard.products || []).filter((p) => p.id !== params.id);
      await writeDashboard(dashboard, `Delete product ${params.id}`);

      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("[admin:product:delete]", error);
    const message = error instanceof Error ? error.message : "Urun silinemedi.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

