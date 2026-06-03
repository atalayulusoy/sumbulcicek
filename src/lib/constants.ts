import type { HomepageSectionConfig, SiteSettings } from "@/lib/types";

export const APP_NAME = "SÜMBÜL GARDEN";
export const DEFAULT_SITE_URL = "http://localhost:3000";
export const DEFAULT_WHATSAPP_NUMBER = "905306352719";
export const DEFAULT_JWT_SECRET = "sumbul-garden-local-dev-secret";

export const homepageSectionDefaults: HomepageSectionConfig[] = [
  { key: "categories", label: "Kategoriler", enabled: true, order: 1 },
  { key: "featuredProducts", label: "Cok Satanlar", enabled: true, order: 2 },
  { key: "campaigns", label: "Kampanyalar", enabled: true, order: 3 },
  { key: "customDesigns", label: "Ozel Tasarimlar", enabled: true, order: 4 },
  { key: "about", label: "Hakkımızda", enabled: true, order: 5 },
];

export const defaultSiteSettings: SiteSettings = {
  id: "site-settings",
  whatsappNumber: DEFAULT_WHATSAPP_NUMBER,
  instagram: "https://www.instagram.com/sumbulpeyzaj?utm_source=qr",
  address:
    "Kayabaşı Mh. Gazi Yaşargil Cd. Park Mavera 1 Sitesi T8/14 Blok Dükkan No 15 AO Başakşehir/İSTANBUL",
  phone: "+90 530 635 27 19",
  heroTitle: "SÜMBÜL GARDEN ile taze çiçek ve yaşayan mekanlar.",
  heroSubtitle:
    "Türkiye'nin 81 iline ve tüm ilçelerine aynı gün çiçek teslimatı; kaliteli bitki çeşitleri, profesyonel peyzaj uygulamaları ve modern bahçe tasarımları.",
  metaTitle: `${APP_NAME} | Çiçek ve Peyzaj Çözümleri`,
  metaDescription:
    "SÜMBÜL GARDEN vitrini üzerinden fiyatlı çiçekleri inceleyin, SÜMBÜL PEYZAJ bahçe ve dış mekan uygulamalarını keşfedin.",
  aboutTitle: "SÜMBÜL GARDEN ve SÜMBÜL PEYZAJ",
  aboutText:
    "2010'dan beri SÜMBÜL GARDEN olarak çiçekçilik, bitki satışı ve organizasyon çiçekleri hazırlıyoruz. SÜMBÜL PEYZAJ tarafında Bahçeşehir, Bahçekent, Başakşehir ve Esenyurt bölgesinde site, villa, iş yeri ve yaşam alanları için çevre düzenleme, bahçe tasarımı, bitkilendirme, rulo çim ve bakım çalışmaları yapıyoruz.",
  footerText:
    "Türkiye'nin 81 iline ve tüm ilçelerine aynı gün çiçek teslimatı. Açılış organizasyonları, düğün organizasyonları, kaliteli bitki çeşitleri ve modern peyzaj uygulamaları için SÜMBÜL GARDEN yanınızda.",
  deliveryInfo:
    "Online çiçek siparişi, sipariş takibi ve peyzaj keşif talepleri için WhatsApp hattımız: +90 530 635 27 19.",
  primaryColor: "#123322",
  secondaryColor: "#EEF3EA",
  accentColor: "#A67C52",
  homepageSections: homepageSectionDefaults,
  updatedAt: new Date().toISOString(),
};

export const workingHours = [
  "Pazartesi - Cumartesi: 09:00 - 19:00",
  "Pazar: 10:00 - 19:00",
];
