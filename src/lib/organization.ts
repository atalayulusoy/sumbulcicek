import type { Product } from "@/lib/types";

export const balloonCategorySlugs = [
  "balon-folyo-balon",
  "ucan-balon-demetleri",
  "kisiye-ozel-balon-buket-aranjmanlari",
  "zincir-balon-setleri",
  "rakam-folyo-balon",
  "dogum-gunu-balonlari",
  "karakter-temali-dogum-gunu-balonlari",
  "harf-folyo-balon",
  "duz-renkli-balonlar",
  "krom-balon",
  "konfetili-balon",
  "ayakli-balon-standi",
  "toptan-balon",
];

export const partyCategorySlugs = [
  "parti-gozlugu",
  "parti-sapkalari",
  "konusma-balonlari",
  "parti-taclari",
  "konfetiler",
  "dogum-gunu-mumlari",
  "parti-kostumu",
  "pinyatalar",
  "hediyelik-canta",
  "parti-maskeleri",
  "dogum-gunu-afisleri",
];

export const organizationCategorySlugs = [...balloonCategorySlugs, ...partyCategorySlugs];

export interface OrganizationService {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  categorySlugs?: string[];
  keywords?: string[];
}

export const organizationServices: OrganizationService[] = [
  {
    slug: "balon-cesitleri",
    title: "Balon Çeşitleri",
    shortTitle: "Balon Çeşitleri",
    description:
      "Folyo balon, uçan balon, rakam balon, zincir balon ve konsepte uygun balon süslemeleri.",
    image: "/catalog/organization/organization-01.jpg",
    categorySlugs: balloonCategorySlugs,
  },
  {
    slug: "parti-malzemeleri",
    title: "Parti Malzemeleri",
    shortTitle: "Parti Malzemeleri",
    description:
      "Parti şapkaları, taçlar, konfetiler, mumlar, maskeler, afişler ve kutlama aksesuarları.",
    image: "/catalog/organization/organization-05.jpg",
    categorySlugs: partyCategorySlugs,
  },
  {
    slug: "baby-shower",
    title: "Baby Shower Organizasyonları",
    shortTitle: "Baby Shower",
    description:
      "Baby shower ve cinsiyet partileri için balon kemeri, masa arkası ve fotoğraf alanı kurulumu.",
    image: "/catalog/organization/organization-09.jpg",
    keywords: ["baby shower", "cinsiyet", "yeni bebek"],
  },
  {
    slug: "kiz-isteme",
    title: "Kız İsteme Organizasyonları",
    shortTitle: "Kız İsteme",
    description:
      "Kız isteme ve söz hazırlıkları için çiçekli arka fon, masa süsleme ve zarif konsept düzeni.",
    image: "/catalog/organization/organization-12.jpg",
    keywords: ["isteme", "söz", "soz"],
  },
  {
    slug: "dugun-organizasyonlari",
    title: "Düğün Organizasyonları",
    shortTitle: "Düğün",
    description:
      "Düğün mekanları için giriş, masa, çiçek, balon ve fotoğraf alanı süsleme konseptleri.",
    image: "/catalog/organization/organization-16.jpg",
    keywords: ["düğün", "dugun"],
  },
  {
    slug: "nisan-organizasyonlari",
    title: "Nişan Organizasyonları",
    shortTitle: "Nişan",
    description:
      "Nişan ve söz alanları için çiçekli arka plan, masa önü, balon ve dekoratif konsept hazırlığı.",
    image: "/catalog/organization/organization-18.jpg",
    keywords: ["nişan", "nisan"],
  },
  {
    slug: "dogum-gunu-organizasyonlari",
    title: "Doğum Günü Organizasyonları",
    shortTitle: "Doğum Günü",
    description:
      "Doğum günü partileri için balon zinciri, karakter teması, masa düzeni ve kutlama aksesuarları.",
    image: "/catalog/organization/organization-21.jpg",
    categorySlugs: ["dogum-gunu-balonlari", "dogum-gunu-mumlari", "dogum-gunu-afisleri"],
    keywords: ["doğum günü", "dogum gunu"],
  },
];

export function getOrganizationService(slug: string) {
  return organizationServices.find((service) => service.slug === slug);
}

export function isOrganizationProduct(product: Product) {
  return organizationCategorySlugs.includes(product.category?.slug ?? "");
}

export function productMatchesOrganizationService(product: Product, service: OrganizationService) {
  const categorySlug = product.category?.slug ?? "";
  if (service.categorySlugs?.includes(categorySlug)) {
    return true;
  }

  const searchable = `${product.title} ${product.description} ${product.category?.name ?? ""} ${
    product.category?.slug ?? ""
  }`.toLocaleLowerCase("tr-TR");

  return service.keywords?.some((keyword) => searchable.includes(keyword.toLocaleLowerCase("tr-TR"))) ?? false;
}
