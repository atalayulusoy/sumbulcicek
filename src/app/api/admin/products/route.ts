import { NextResponse } from "next/server";

import { sanitizeText } from "@/lib/sanitizers";
import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { getProducts } from "@/lib/services/storefront";
import { productSchema } from "@/lib/validators";

export async function GET() {
  const products = await getProducts();
  return NextResponse.json({ products });
}

export async function POST(request: Request) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ error: "Veritabani baglantisi gerekli." }, { status: 503 });
  }

  const json = await request.json();
  const parsed = productSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  const data = parsed.data;
  const slug = slugify(data.slug || data.title);

  const created = await prisma.product.create({
    data: {
      title: sanitizeText(data.title),
      slug,
      description: sanitizeText(data.description),
      price: data.price,
      discountPrice: data.discountPrice ?? null,
      images: data.images,
      categoryId: data.categoryId,
      featured: data.featured,
      stockStatus: data.stockStatus,
      badge: data.badge ? sanitizeText(data.badge) : null,
      deliveryInfo: data.deliveryInfo ? sanitizeText(data.deliveryInfo) : null,
    },
  });

  const products = await getProducts();
  const product = products.find((item) => item.id === created.id);

  return NextResponse.json({ product });
}
