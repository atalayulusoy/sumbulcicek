import type {
  Banner,
  Category,
  HomeShowcaseSlide,
  Product,
  QuickLink,
  SiteSettings,
} from "@/lib/types";

import { defaultSiteSettings } from "@/lib/constants";

const createdAt = new Date("2025-01-01").toISOString();

const flowerCategoryDefinitions = [
  ["cat-valentine", "Sevgililer Günü Çiçekleri", "sevgililer-gunu-cicekleri", "Heart"],
  ["cat-anniversary", "Yıl Dönümü", "yil-donumu", "Sparkles"],
  ["cat-wreaths", "Çelenkler", "celenkler", "Flower2"],
  ["cat-birthday", "Doğum Günü", "dogum-gunu", "Gift"],
  ["cat-terrariums", "Teraryumlar", "teraryumlar", "Gem"],
  ["cat-mothers-day", "Anneler Günü", "anneler-gunu", "Sparkles"],
  ["cat-womens-day", "Kadınlar Günü", "kadinlar-gunu", "Flower2"],
  ["cat-edible", "Yenilebilir Çiçekler", "yenilebilir-cicekler", "Gift"],
  ["cat-get-well", "Geçmiş Olsun", "gecmis-olsun", "Leaf"],
  ["cat-potted", "Saksı Çiçekleri", "saksi-cicekleri", "Leaf"],
  ["cat-new-baby", "Yeni Bebek", "yeni-bebek", "Crown"],
  ["cat-engagement", "Söz Nişan Düğün", "soz-nisan-dugun", "Crown"],
  ["cat-new-year", "Yılbaşı", "yilbasi", "Sparkles"],
  ["cat-box-flowers", "Kutu Çiçekler", "kutu-cicekler", "Gift"],
  ["cat-salon-plants", "Salon Bitkileri", "salon-bitkileri", "Leaf"],
  ["cat-vases-pots", "Vazolar ve Saksılar", "vazolar-ve-saksilar", "Gem"],
] as const;

const landscapeCategoryDefinitions = [
  ["cat-landscape-design", "Peyzaj Tasarım", "peyzaj-tasarim", "Leaf"],
  ["cat-landscape-application", "Bahçe Uygulama", "bahce-uygulama", "Flower2"],
  ["cat-landscape-plants", "Peyzaj Bitkileri", "peyzaj-bitkileri", "Leaf"],
  ["cat-turf", "Rulo Çim", "rulo-cim", "Sparkles"],
  ["cat-irrigation", "Otomatik Sulama", "otomatik-sulama", "Gem"],
  ["cat-vertical-garden", "Dikey Bahçe", "dikey-bahce", "Crown"],
] as const;

export const balloonCategoryDefinitions = [
  ["cat-balloon-foil", "Balon & Folyo Balon", "balon-folyo-balon", "Sparkles"],
  ["cat-balloon-flying", "Uçan Balon Demetleri", "ucan-balon-demetleri", "Sparkles"],
  ["cat-balloon-custom", "Kişiye Özel Balon Buket Aranjmanları", "kisiye-ozel-balon-buket-aranjmanlari", "Gift"],
  ["cat-balloon-chain", "Zincir Balon Setleri", "zincir-balon-setleri", "Gem"],
  ["cat-balloon-number", "Rakam Folyo Balon", "rakam-folyo-balon", "Crown"],
  ["cat-balloon-birthday", "Doğum Günü Balonları", "dogum-gunu-balonlari", "Gift"],
  ["cat-balloon-character", "Karakter Temalı Doğum Günü Balonları", "karakter-temali-dogum-gunu-balonlari", "Crown"],
  ["cat-balloon-letter", "Harf Folyo Balon", "harf-folyo-balon", "Sparkles"],
  ["cat-balloon-plain", "Düz Renkli Balonlar", "duz-renkli-balonlar", "Gem"],
  ["cat-balloon-chrome", "Krom Balon", "krom-balon", "Sparkles"],
  ["cat-balloon-confetti", "Konfetili Balon", "konfetili-balon", "Sparkles"],
  ["cat-balloon-stand", "Ayaklı Balon Standı", "ayakli-balon-standi", "Gem"],
  ["cat-balloon-wholesale", "Toptan Balon", "toptan-balon", "Gift"],
] as const;

export const partyCategoryDefinitions = [
  ["cat-party-glasses", "Parti Gözlüğü", "parti-gozlugu", "Gem"],
  ["cat-party-hats", "Parti Şapkaları", "parti-sapkalari", "Crown"],
  ["cat-party-speech", "Konuşma Balonları", "konusma-balonlari", "Sparkles"],
  ["cat-party-crowns", "Parti Taçları", "parti-taclari", "Crown"],
  ["cat-party-confetti", "Konfetiler", "konfetiler", "Sparkles"],
  ["cat-party-candles", "Doğum Günü Mumları", "dogum-gunu-mumlari", "Gift"],
  ["cat-party-costume", "Parti Kostümü", "parti-kostumu", "Crown"],
  ["cat-party-pinata", "Pinyatalar", "pinyatalar", "Gift"],
  ["cat-party-bag", "Hediyelik Çanta", "hediyelik-canta", "Gift"],
  ["cat-party-masks", "Parti Maskeleri", "parti-maskeleri", "Gem"],
  ["cat-party-posters", "Doğum Günü Afişleri", "dogum-gunu-afisleri", "Sparkles"],
] as const;

const categoryDefinitions = [
  ...flowerCategoryDefinitions,
  ...landscapeCategoryDefinitions,
  ...balloonCategoryDefinitions,
  ...partyCategoryDefinitions,
] as const;

export const fallbackCategories: Category[] = categoryDefinitions.map(
  ([id, name, slug, icon]) => ({
    id,
    name,
    slug,
    icon,
    createdAt,
  }),
);

export const fallbackQuickLinks: QuickLink[] = [
  {
    id: "quick-valentine",
    title: "Sevgililer Gunu Cicekleri",
    href: "/products?category=sevgililer-gunu-cicekleri",
    image: "/catalog/flowers/flower-clean-01.jpg",
    order: 0,
    isActive: true,
    createdAt,
  },
  {
    id: "quick-anniversary",
    title: "Yil Donumu",
    href: "/products?category=yil-donumu",
    image: "/catalog/flowers/flower-clean-02.jpg",
    order: 1,
    isActive: true,
    createdAt,
  },
  {
    id: "quick-wreaths",
    title: "Celenkler",
    href: "/products?category=celenkler",
    image: "/catalog/flowers/flower-clean-03.jpg",
    order: 2,
    isActive: true,
    createdAt,
  },
  {
    id: "quick-terrariums",
    title: "Teraryumlar",
    href: "/products?category=teraryumlar",
    image: "/catalog/flowers/flower-clean-04.jpg",
    order: 3,
    isActive: true,
    createdAt,
  },
  {
    id: "quick-mothers-day",
    title: "Anneler Gunu",
    href: "/products?category=anneler-gunu",
    image: "/catalog/flowers/flower-clean-05.jpg",
    order: 4,
    isActive: true,
    createdAt,
  },
  {
    id: "quick-womens-day",
    title: "Kadinlar Gunu",
    href: "/products?category=kadinlar-gunu",
    image: "/catalog/flowers/flower-clean-06.jpg",
    order: 5,
    isActive: true,
    createdAt,
  },
  {
    id: "quick-edible",
    title: "Yenilebilir Cicekler",
    href: "/products?category=yenilebilir-cicekler",
    image: "/catalog/flowers/flower-clean-07.jpg",
    order: 6,
    isActive: true,
    createdAt,
  },
  {
    id: "quick-get-well",
    title: "Gecmis Olsun",
    href: "/products?category=gecmis-olsun",
    image: "/catalog/flowers/flower-clean-08.jpg",
    order: 7,
    isActive: true,
    createdAt,
  },
  {
    id: "quick-potted",
    title: "Saksi Cicekleri",
    href: "/products?category=saksi-cicekleri",
    image: "/catalog/flowers/flower-clean-09.jpg",
    order: 8,
    isActive: true,
    createdAt,
  },
];

export const fallbackHomeShowcaseSlides: HomeShowcaseSlide[] = [
  {
    id: "home-showcase-best-sellers",
    title: "Çok Satanlar",
    href: "/products",
    image: "/home/flowers/best-sellers.jpg",
    order: 0,
    isActive: true,
    createdAt,
  },
  {
    id: "home-showcase-bouquets",
    title: "Çiçek Buketleri",
    href: "/products?category=sevgililer-gunu-cicekleri",
    image: "/home/flowers/bouquets.jpg",
    order: 1,
    isActive: true,
    createdAt,
  },
  {
    id: "home-showcase-orchids",
    title: "Orkideler",
    href: "/products?category=salon-bitkileri",
    image: "/home/flowers/orchids.jpg",
    order: 2,
    isActive: true,
    createdAt,
  },
];

const categoryBySlug = new Map(fallbackCategories.map((category) => [category.slug, category]));
const flowerCategorySlugs = flowerCategoryDefinitions.map((category) => category[2]);
const landscapeCategorySlugs = landscapeCategoryDefinitions.map((category) => category[2]);
const organizationCategorySlugs = [
  ...balloonCategoryDefinitions.map((category) => category[2]),
  ...partyCategoryDefinitions.map((category) => category[2]),
];

const flowerImages = [
  "/catalog/flowers/flower-clean-01.jpg",
  "/catalog/flowers/flower-clean-02.jpg",
  "/catalog/flowers/flower-clean-03.jpg",
  "/catalog/flowers/flower-clean-04.jpg",
  "/catalog/flowers/flower-clean-05.jpg",
  "/catalog/flowers/flower-clean-06.jpg",
  "/catalog/flowers/flower-clean-07.jpg",
  "/catalog/flowers/flower-clean-08.jpg",
  "/catalog/flowers/flower-clean-09.jpg",
  "/catalog/flowers/flower-clean-10.jpg",
  "/catalog/flowers/flower-clean-11.jpg",
  "/catalog/flowers/flower-clean-12.jpg",
  "/catalog/flowers/flower-clean-13.jpg",
  "/catalog/flowers/flower-clean-14.webp",
  "/catalog/flowers/flower-clean-15.jpg",
  "/catalog/flowers/flower-clean-16.jpg",
  "/catalog/flowers/flower-clean-17.jpg",
  "/catalog/flowers/flower-clean-18.webp",
  "/catalog/flowers/flower-clean-19.webp",
  "/catalog/flowers/flower-clean-20.webp",
  "/catalog/flowers/flower-clean-21.jpg",
  "/catalog/flowers/flower-clean-22.webp",
  "/catalog/flowers/flower-clean-23.jpg",
  "/catalog/flowers/flower-clean-24.webp",
  "/catalog/flowers/flower-clean-25.jpg",
  "/catalog/flowers/flower-clean-26.webp",
  "/catalog/flowers/flower-clean-27.jpg",
  "/catalog/flowers/flower-clean-28.jpg",
  "/catalog/flowers/flower-clean-29.jpg",
  "/catalog/flowers/flower-clean-30.jpg",
  "/catalog/flowers/flower-clean-31.webp",
  "/catalog/flowers/flower-clean-32.jpg",
  "/catalog/flowers/flower-clean-33.jpg",
  "/catalog/flowers/flower-clean-34.webp",
  "/catalog/flowers/flower-clean-35.jpg",
  "/catalog/flowers/flower-clean-36.jpg",
  "/catalog/flowers/flower-clean-37.jpg",
  "/catalog/flowers/flower-clean-38.webp",
  "/catalog/flowers/flower-clean-39.jpg",
  "/catalog/flowers/flower-clean-40.jpg",
  "/catalog/flowers/flower-clean-41.jpg",
  "/catalog/flowers/flower-clean-42.jpg",
  "/catalog/flowers/flower-clean-43.jpg",
  "/catalog/flowers/flower-clean-44.jpg",
  "/catalog/flowers/flower-clean-45.jpg",
  "/catalog/flowers/flower-clean-46.jpg",
  "/catalog/flowers/flower-clean-47.jpg",
  "/catalog/flowers/flower-clean-48.jpg",
];

const organizationImages = Array.from(
  { length: 22 },
  (_, index) => `/catalog/organization/organization-${String(index + 1).padStart(2, "0")}.jpg`,
);

function flowerImage(index: number) {
  return flowerImages[index % flowerImages.length];
}

function landscapeImage(index: number) {
  return `/catalog/landscape/landscape-${String((index % 13) + 1).padStart(2, "0")}.jpg`;
}

function organizationImage(index: number) {
  return organizationImages[index % organizationImages.length];
}

const flowerProductTemplates = [
  {
    suffix: "Premium Buket",
    description:
      "Taze kesme çiçekler, yeşillikler ve SÜMBÜL GARDEN paketleme diliyle hazırlanan zarif günlük tasarım.",
    badge: "Aynı gün",
    price: 990,
  },
  {
    suffix: "Kutulu Aranjman",
    description:
      "Kutu formunda hazırlanan, hediye notu eklenebilen ve özel gün siparişlerinde güçlü görünen modern aranjman.",
    badge: "Kutu tasarım",
    price: 1190,
  },
  {
    suffix: "Vazolu Tasarım",
    description:
      "Cam vazo veya dekoratif saksı hissiyle sunulan, ev ve ofis teslimatlarında şık duran hazır çiçek düzenlemesi.",
    badge: "Vazolu",
    price: 1450,
  },
  {
    suffix: "Lüks Mix",
    description:
      "Gül, lilyum, orkide veya mevsim çiçekleriyle hazırlanabilen daha hacimli ve etkili SÜMBÜL seçimi.",
    badge: "Öne çıkan",
    price: 1690,
  },
  {
    suffix: "Organizasyon Seçimi",
    description:
      "Açılış, düğün, söz, nişan ve kurumsal gönderimler için WhatsApp üzerinden detaylandırılabilen özel tasarım.",
    badge: "Özel hazırlık",
    price: 2150,
  },
] as const;

const landscapeProductTemplates = [
  {
    suffix: "Keşif ve Konsept",
    description:
      "Alan ölçüsü, kullanım ihtiyacı ve mevcut bitki dokusuna göre profesyonel peyzaj keşfi ve konsept planlama.",
    badge: "Keşif",
    price: 8500,
  },
  {
    suffix: "Uygulama Paketi",
    description:
      "Toprak hazırlığı, bitkilendirme, dekoratif taş, sınır düzeni ve bakım planıyla anahtar teslim uygulama.",
    badge: "Uygulama",
    price: 14500,
  },
  {
    suffix: "Bitki ve Ağaç Seçimi",
    description:
      "Kaliteli bitki çeşitleri, ağaç, çalı, mevsimlik ve saksılı bitkilerle mekana uygun yeşil kurgu.",
    badge: "Bitki satışı",
    price: 11200,
  },
  {
    suffix: "Çim ve Sulama Çözümü",
    description:
      "Rulo çim, otomatik sulama, zonlama ve ilk bakım ihtiyaçlarını birlikte ele alan düzenli bahçe çözümü.",
    badge: "Çim & sulama",
    price: 16800,
  },
  {
    suffix: "Modern Bahçe Tasarımı",
    description:
      "Villa, site, iş yeri ve yaşam alanları için modern bahçe tasarımı, görsel bitkilendirme ve dış mekan düzeni.",
    badge: "Proje bazlı",
    price: 22500,
  },
] as const;

const organizationProductTemplates = [
  {
    suffix: "Baby Shower Süsleme",
    description:
      "Baby shower, cinsiyet partisi ve yeni bebek kutlamaları için balon kemeri, masa arkası ve fotoğraf alanı düzeni.",
    badge: "Baby shower",
    price: 2750,
  },
  {
    suffix: "Nişan Organizasyonu",
    description:
      "Söz, nişan ve isteme alanları için çiçekli arka fon, masa süsleme, balon ve dekoratif konsept hazırlığı.",
    badge: "Nişan",
    price: 4200,
  },
  {
    suffix: "Cinsiyet Partisi Konsepti",
    description:
      "Kız/erkek konseptli balon zinciri, folyo balon, masa önü ve kutlama köşesiyle tamamlanan özel parti kurulumu.",
    badge: "Cinsiyet",
    price: 3350,
  },
  {
    suffix: "Açılış ve Düğün Süsleme",
    description:
      "Düğün, sünnet, açılış, bayi toplantısı ve gala yemekleri için mekana göre hazırlanan dekorasyon paketi.",
    badge: "Organizasyon",
    price: 5200,
  },
  {
    suffix: "Balon Standı ve Parti Seti",
    description:
      "Ayaklı balon standı, folyo balon, konfeti ve parti aksesuarlarıyla hızlı kurulabilen kutlama seti.",
    badge: "Parti seti",
    price: 1650,
  },
] as const;

function makeFlowerProducts(): Product[] {
  return flowerCategorySlugs.flatMap((slug, categoryIndex) => {
    const category = categoryBySlug.get(slug);

    if (!category) {
      return [];
    }

    return flowerProductTemplates.map((template, templateIndex) => {
      const sequence = categoryIndex * flowerProductTemplates.length + templateIndex;
      const price = template.price + categoryIndex * 35 + templateIndex * 60;

      return {
        id: `prd-${slug}-${templateIndex + 1}`,
        title: `${category.name} ${template.suffix}`,
        slug: `${slug}-${templateIndex + 1}`,
        description: template.description,
        price,
        discountPrice: templateIndex === 0 ? price - 90 : null,
        images: [flowerImage(sequence), flowerImage(sequence + 7)],
        categoryId: category.id,
        category,
        featured: templateIndex < 2 && categoryIndex < 8,
        stockStatus: templateIndex === 4 ? "PRE_ORDER" : "IN_STOCK",
        badge: template.badge,
        deliveryInfo:
          "Türkiye'nin 81 iline ve tüm ilçelerine aynı gün çiçek teslimatı için WhatsApp hattından teyit alınır.",
        createdAt: new Date(2025, 0, 1 + sequence).toISOString(),
      } satisfies Product;
    });
  });
}

function makeLandscapeProducts(): Product[] {
  return landscapeCategorySlugs.flatMap((slug, categoryIndex) => {
    const category = categoryBySlug.get(slug);

    if (!category) {
      return [];
    }

    return landscapeProductTemplates.map((template, templateIndex) => {
      const sequence = categoryIndex * landscapeProductTemplates.length + templateIndex;
      const price = template.price + categoryIndex * 950 + templateIndex * 750;

      return {
        id: `prd-${slug}-${templateIndex + 1}`,
        title: `${category.name} ${template.suffix}`,
        slug: `${slug}-${templateIndex + 1}`,
        description: template.description,
        price,
        discountPrice: templateIndex === 3 ? price - 950 : null,
        images: [landscapeImage(sequence), landscapeImage(sequence + 3)],
        categoryId: category.id,
        category,
        featured: templateIndex < 2,
        stockStatus: "PRE_ORDER",
        badge: template.badge,
        deliveryInfo:
          "Kayabaşı, Başakşehir ve İstanbul çevresi için WhatsApp üzerinden keşif planlanır.",
        createdAt: new Date(2025, 2, 1 + sequence).toISOString(),
      } satisfies Product;
    });
  });
}

function makeOrganizationProducts(): Product[] {
  return organizationCategorySlugs.flatMap((slug, categoryIndex) => {
    const category = categoryBySlug.get(slug);

    if (!category) {
      return [];
    }

    return organizationProductTemplates.map((template, templateIndex) => {
      const sequence = categoryIndex * organizationProductTemplates.length + templateIndex;
      const price = template.price + categoryIndex * 45 + templateIndex * 120;

      return {
        id: `prd-${slug}-${templateIndex + 1}`,
        title: `${category.name} ${template.suffix}`,
        slug: `${slug}-${templateIndex + 1}`,
        description: template.description,
        price,
        discountPrice: templateIndex === 4 ? price - 150 : null,
        images: [organizationImage(sequence), organizationImage(sequence + 5)],
        categoryId: category.id,
        category,
        featured: templateIndex < 2 && categoryIndex < 8,
        stockStatus: "PRE_ORDER",
        badge: template.badge,
        deliveryInfo:
          "Organizasyon süsleme talepleri için tarih, mekan ve konsept bilgisi WhatsApp hattından netleştirilir.",
        createdAt: new Date(2025, 4, 1 + sequence).toISOString(),
      } satisfies Product;
    });
  });
}

export const fallbackProducts: Product[] = [
  ...makeFlowerProducts(),
  ...makeLandscapeProducts(),
  ...makeOrganizationProducts(),
];

export const fallbackBanners: Banner[] = [
  {
    id: "banner-1",
    title: "SÜMBÜL GARDEN",
    subtitle:
      "Türkiye'nin 81 iline ve tüm ilçelerine aynı gün çiçek teslimatı. Online çiçek siparişi, WhatsApp hattı ve özenli mağaza deneyimi tek yerde.",
    image: "/sumbul-storefront.png",
    buttonText: "Çiçeklerimizi İncele",
    buttonLink: "/products",
    theme: "mint",
    order: 0,
    isActive: true,
    createdAt,
  },
  {
    id: "banner-2",
    title: "SÜMBÜL PEYZAJ",
    subtitle:
      "Kaliteli bitki çeşitleri, profesyonel peyzaj uygulamaları ve modern bahçe tasarımlarıyla dış mekanlara değer katıyoruz.",
    image: "/catalog/landscape/landscape-01.jpg",
    buttonText: "Peyzaj İşlerim",
    buttonLink: "/peyzaj",
    theme: "rose",
    order: 1,
    isActive: true,
    createdAt,
  },
  {
    id: "banner-3",
    title: "Organizasyon ve süsleme",
    subtitle:
      "Baby shower, cinsiyet partisi, nişan, düğün, sünnet, açılış ve balon süsleme talepleri için konseptinizi birlikte hazırlayalım.",
    image: "/catalog/organization/organization-09.jpg",
    buttonText: "Organizasyon Ürünleri",
    buttonLink: "/products?category=ucan-balon-demetleri",
    theme: "neutral",
    order: 2,
    isActive: true,
    createdAt,
  },
];

export const fallbackSiteSettings: SiteSettings = defaultSiteSettings;
