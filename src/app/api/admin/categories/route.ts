import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { slugify } from "@/lib/slugify";
import { getCategories } from "@/lib/services/storefront";
import { categorySchema } from "@/lib/validators";

export async function GET() {
  const categories = await getCategories();
  return NextResponse.json({ categories });
}

export async function POST(request: Request) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ error: "Veritabani baglantisi gerekli." }, { status: 503 });
  }

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
