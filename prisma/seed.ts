import { Prisma, PrismaClient, ProductStatus } from "@prisma/client";

import { fallbackBanners, fallbackCategories, fallbackProducts, fallbackSiteSettings } from "@/lib/data/fallback-data";
import { hashPassword } from "@/lib/auth";

const prisma = new PrismaClient();

async function main() {
  const categories = await Promise.all(
    fallbackCategories.map((category) =>
      prisma.category.upsert({
        where: { slug: category.slug },
        update: {
          name: category.name,
          icon: category.icon,
        },
        create: {
          name: category.name,
          slug: category.slug,
          icon: category.icon,
        },
      }),
    ),
  );

  const categoryMap = new Map(categories.map((category) => [category.slug, category.id]));

  for (const product of fallbackProducts) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        title: product.title,
        description: product.description,
        price: product.price,
        discountPrice: product.discountPrice,
        images: product.images,
        categoryId: categoryMap.get(product.category?.slug ?? "") ?? categoryMap.get("premium-buketler")!,
        featured: product.featured,
        stockStatus: product.stockStatus as ProductStatus,
        badge: product.badge ?? null,
        deliveryInfo: product.deliveryInfo ?? null,
      },
      create: {
        title: product.title,
        slug: product.slug,
        description: product.description,
        price: product.price,
        discountPrice: product.discountPrice,
        images: product.images,
        categoryId: categoryMap.get(product.category?.slug ?? "") ?? categoryMap.get("premium-buketler")!,
        featured: product.featured,
        stockStatus: product.stockStatus as ProductStatus,
        badge: product.badge ?? null,
        deliveryInfo: product.deliveryInfo ?? null,
      },
    });
  }

  for (const banner of fallbackBanners) {
    await prisma.banner.upsert({
      where: { id: banner.id },
      update: {
        title: banner.title,
        subtitle: banner.subtitle,
        image: banner.image,
        buttonText: banner.buttonText,
        buttonLink: banner.buttonLink,
        theme: banner.theme ?? null,
        order: banner.order,
        isActive: banner.isActive,
      },
      create: {
        id: banner.id,
        title: banner.title,
        subtitle: banner.subtitle,
        image: banner.image,
        buttonText: banner.buttonText,
        buttonLink: banner.buttonLink,
        theme: banner.theme ?? null,
        order: banner.order,
        isActive: banner.isActive,
      },
    });
  }

  await prisma.siteSettings.upsert({
    where: { id: fallbackSiteSettings.id },
    update: {
      whatsappNumber: fallbackSiteSettings.whatsappNumber,
      instagram: fallbackSiteSettings.instagram,
      address: fallbackSiteSettings.address,
      phone: fallbackSiteSettings.phone,
      heroTitle: fallbackSiteSettings.heroTitle,
      heroSubtitle: fallbackSiteSettings.heroSubtitle,
      metaTitle: fallbackSiteSettings.metaTitle,
      metaDescription: fallbackSiteSettings.metaDescription,
      aboutTitle: fallbackSiteSettings.aboutTitle,
      aboutText: fallbackSiteSettings.aboutText,
      footerText: fallbackSiteSettings.footerText,
      deliveryInfo: fallbackSiteSettings.deliveryInfo,
      primaryColor: fallbackSiteSettings.primaryColor,
      secondaryColor: fallbackSiteSettings.secondaryColor,
      accentColor: fallbackSiteSettings.accentColor,
      homepageSections: fallbackSiteSettings.homepageSections as unknown as Prisma.InputJsonValue,
    },
    create: {
      id: fallbackSiteSettings.id,
      whatsappNumber: fallbackSiteSettings.whatsappNumber,
      instagram: fallbackSiteSettings.instagram,
      address: fallbackSiteSettings.address,
      phone: fallbackSiteSettings.phone,
      heroTitle: fallbackSiteSettings.heroTitle,
      heroSubtitle: fallbackSiteSettings.heroSubtitle,
      metaTitle: fallbackSiteSettings.metaTitle,
      metaDescription: fallbackSiteSettings.metaDescription,
      aboutTitle: fallbackSiteSettings.aboutTitle,
      aboutText: fallbackSiteSettings.aboutText,
      footerText: fallbackSiteSettings.footerText,
      deliveryInfo: fallbackSiteSettings.deliveryInfo,
      primaryColor: fallbackSiteSettings.primaryColor,
      secondaryColor: fallbackSiteSettings.secondaryColor,
      accentColor: fallbackSiteSettings.accentColor,
      homepageSections: fallbackSiteSettings.homepageSections as unknown as Prisma.InputJsonValue,
    },
  });

  const email = process.env.ADMIN_EMAIL ?? "admin@sumbulgarden.com";
  const password = process.env.ADMIN_PASSWORD ?? "Admin123!";
  const passwordHash = await hashPassword(password);

  await prisma.admin.upsert({
    where: { email },
    update: {
      passwordHash,
    },
    create: {
      email,
      passwordHash,
    },
  });

  console.log(`Seed complete. Admin login: ${email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
