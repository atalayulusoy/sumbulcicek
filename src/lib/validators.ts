import { z } from "zod";

import { homepageSectionDefaults } from "@/lib/constants";

const isImageUrlOrPath = (value: string) => {
  if (!value || typeof value !== "string") {
    return false;
  }

  const trimmed = value.trim();
  if (trimmed.startsWith("/")) {
    return trimmed.length > 1;
  }

  try {
    new URL(trimmed);
    return true;
  } catch {
    return false;
  }
};

export const adminLoginSchema = z.object({
  email: z.string().email("Gecerli bir e-posta adresi girin."),
  password: z.string().min(6, "Sifre en az 6 karakter olmali."),
});

export const productSchema = z
  .object({
    title: z.string().min(2, "Ürün adı gerekli."),
    slug: z.string().optional(),
    description: z.string().min(20, "Aciklama en az 20 karakter olmali."),
    price: z.coerce.number().positive("Fiyat sifirdan buyuk olmali."),
    discountPrice: z.coerce.number().nonnegative().nullable().optional(),
    images: z
      .array(z.string().refine(isImageUrlOrPath, "Gecerli bir gorsel baglantisi gerekli."))
      .min(1),
    categoryId: z.string().min(1, "Kategori seçin."),
    featured: z.boolean().default(false),
    stockStatus: z.enum(["IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK", "PRE_ORDER"]),
    badge: z.string().max(40).nullable().optional(),
    deliveryInfo: z.string().max(240).nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.discountPrice && data.discountPrice >= data.price) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Indirimli fiyat normal fiyattan dusuk olmali.",
        path: ["discountPrice"],
      });
    }
  });

export const categorySchema = z.object({
  name: z.string().min(2),
  slug: z.string().optional(),
  icon: z.string().min(1),
});

export const bannerSchema = z.object({
  title: z.string().min(2),
  subtitle: z.string().min(10),
  image: z.string().refine(isImageUrlOrPath, "Gecerli bir gorsel baglantisi gerekli."),
  buttonText: z.string().min(2),
  buttonLink: z.string().min(1),
  theme: z.string().nullable().optional(),
  order: z.coerce.number().int().nonnegative().default(0),
  isActive: z.boolean().default(true),
});

export const homepageSectionSchema = z.object({
  key: z.enum(
    homepageSectionDefaults.map((section) => section.key) as [
      "categories",
      "featuredProducts",
      "campaigns",
      "customDesigns",
      "about",
    ],
  ),
  label: z.string(),
  enabled: z.boolean(),
  order: z.coerce.number().int().nonnegative(),
});

export const siteSettingsSchema = z.object({
  whatsappNumber: z.string().min(10),
  instagram: z.union([z.string().url(), z.literal(""), z.null()]).optional(),
  address: z.string().nullable().optional(),
  phone: z.string().nullable().optional(),
  heroTitle: z.string().nullable().optional(),
  heroSubtitle: z.string().nullable().optional(),
  metaTitle: z.string().nullable().optional(),
  metaDescription: z.string().nullable().optional(),
  aboutTitle: z.string().nullable().optional(),
  aboutText: z.string().nullable().optional(),
  footerText: z.string().nullable().optional(),
  deliveryInfo: z.string().nullable().optional(),
  primaryColor: z.string().nullable().optional(),
  secondaryColor: z.string().nullable().optional(),
  accentColor: z.string().nullable().optional(),
  homepageSections: z.array(homepageSectionSchema).default(homepageSectionDefaults),
});

export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
export type ProductInput = z.infer<typeof productSchema>;
export type CategoryInput = z.infer<typeof categorySchema>;
export type BannerInput = z.infer<typeof bannerSchema>;
export type SiteSettingsInput = z.infer<typeof siteSettingsSchema>;
