import { NextResponse } from "next/server";

import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { sanitizeText } from "@/lib/sanitizers";
import { slugify } from "@/lib/slugify";
import { getCategories } from "@/lib/services/storefront";
import { categorySchema } from "@/lib/validators";

interface CategoryRouteProps {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, { params }: CategoryRouteProps) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ error: "Veritabani baglantisi gerekli." }, { status: 503 });
  }

  const json = await request.json();
  const parsed = categorySchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
  }

  await prisma.category.update({
    where: { id: params.id },
    data: {
      name: sanitizeText(parsed.data.name),
      slug: slugify(parsed.data.slug || parsed.data.name),
      icon: parsed.data.icon,
    },
  });

  const categories = await getCategories();
  const category = categories.find((item) => item.id === params.id);
  return NextResponse.json({ category });
}

export async function DELETE(_: Request, { params }: CategoryRouteProps) {
  if (!isDatabaseConfigured) {
    return NextResponse.json({ error: "Veritabani baglantisi gerekli." }, { status: 503 });
  }

  await prisma.category.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ success: true });
}
