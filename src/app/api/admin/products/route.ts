import { NextResponse } from "next/server";

import { sanitizeText } from "@/lib/sanitizers";
import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { readDashboard, writeDashboard, makeId } from "@/lib/github-store";
import { slugify } from "@/lib/slugify";
import { getProducts } from "@/lib/services/storefront";
import { productSchema } from "@/lib/validators";
import type { Product } from "@/lib/types";

export async function GET() {
  const products = await getProducts();
  return NextResponse.json({ products });
}

export async function POST(request: Request) {
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

    const newProduct: Product = {
      id: makeId("prd"),
      ...sanitizedData,
      createdAt: new Date().toISOString(),
    };

    dashboard.products = [newProduct, ...(dashboard.products || [])];
    await writeDashboard(dashboard, `Add product ${newProduct.title}`);

    return NextResponse.json({ product: newProduct });
  }

  // 2) DB kapalıyken/ulaşılamıyorken `isDatabaseConfigured` true olabiliyor.
  //    Bu durumda Prisma hata verir; biz fallback'a dönüyoruz.
  try {
    const created = await prisma.product.create({
      data: sanitizedData,
    });

    const products = await getProducts();
    const product = products.find((item) => item.id === created.id);

    return NextResponse.json({ product });
  } catch (error) {
    console.warn("[admin:products:post] prisma failed, falling back to dashboard", error);

    const dashboard = await readDashboard();
    const newProduct: Product = {
      id: makeId("prd"),
      ...sanitizedData,
      createdAt: new Date().toISOString(),
    };

    dashboard.products = [newProduct, ...(dashboard.products || [])];
    await writeDashboard(dashboard, `Add product ${newProduct.title}`);

    return NextResponse.json({ product: newProduct });
  }
}

