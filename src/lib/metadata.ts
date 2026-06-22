import type { Metadata } from "next";

import { APP_NAME, DEFAULT_WHATSAPP_NUMBER } from "@/lib/constants";
import { appEnv } from "@/lib/env";
import type { Product, SiteSettings } from "@/lib/types";

interface MetadataInput {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  noIndex?: boolean;
  pathname?: string;
  appendBrand?: boolean;
}

const defaultDescription =
  "Başakşehir Kayabaşı SÜMBÜL GARDEN ile çiçek siparişi, aynı gün teslimat, peyzaj keşfi ve özel gün organizasyonları için WhatsApp üzerinden hızlı iletişim.";
const defaultOgImage = "/og-sumbul-garden.jpg";

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, appEnv.siteUrl).toString();
}

function buildTitle(title?: string | null, appendBrand = true) {
  if (!title) {
    return `${APP_NAME} | Başakşehir Çiçekçi, Peyzaj ve Organizasyon`;
  }

  if (!appendBrand) {
    return title;
  }

  const normalizedTitle = title.toLocaleLowerCase("tr-TR");
  const normalizedBrand = APP_NAME.toLocaleLowerCase("tr-TR");

  return normalizedTitle.includes(normalizedBrand) || normalizedTitle.includes("sümbül garden")
    ? title
    : `${title} | ${APP_NAME}`;
}

export function buildMetadata({
  title,
  description,
  image,
  noIndex = false,
  pathname = "/",
  appendBrand = true,
}: MetadataInput): Metadata {
  const metadataTitle = buildTitle(title, appendBrand);
  const metadataDescription = description ?? defaultDescription;
  const url = absoluteUrl(pathname);
  const metadataImage = image || defaultOgImage;

  return {
    metadataBase: new URL(appEnv.siteUrl),
    title: metadataTitle,
    description: metadataDescription,
    applicationName: APP_NAME,
    creator: APP_NAME,
    publisher: APP_NAME,
    category: "Çiçekçilik, peyzaj ve organizasyon",
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url,
      siteName: APP_NAME,
      images: [{ url: metadataImage, width: 1200, height: 630, alt: metadataTitle }],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: [metadataImage],
    },
    other: {
      "geo.region": "TR-34",
      "geo.placename": "Başakşehir, İstanbul",
      "business:contact_data:locality": "Başakşehir",
      "business:contact_data:region": "İstanbul",
      "business:contact_data:country_name": "Türkiye",
    },
  };
}

export function buildProductSchema(product: Product) {
  const productUrl = absoluteUrl(`/products/${product.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.title,
    description: product.description,
    image: product.images.map((item) => absoluteUrl(item)),
    url: productUrl,
    category: product.category?.name,
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      price: product.discountPrice ?? product.price,
      availability:
        product.stockStatus === "OUT_OF_STOCK"
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
      url: productUrl,
    },
    brand: {
      "@type": "Brand",
      name: APP_NAME,
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${appEnv.siteUrl}/#website`,
    name: APP_NAME,
    url: appEnv.siteUrl,
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${appEnv.siteUrl}/products?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildLocalBusinessSchema(settings: SiteSettings) {
  const phone = settings.phone || `+${DEFAULT_WHATSAPP_NUMBER}`;
  const instagram = settings.instagram?.trim();

  return {
    "@context": "https://schema.org",
    "@type": "Florist",
    "@id": `${appEnv.siteUrl}/#localbusiness`,
    name: APP_NAME,
    alternateName: ["SÜMBÜL PEYZAJ", "SÜMBÜL GARDEN Çiçekçilik & Peyzaj"],
    description:
      "Başakşehir Kayabaşı merkezli çiçekçi, peyzaj ve organizasyon hizmetleri. Çiçek siparişi, aynı gün teslimat, balon süsleme ve bahçe düzenleme talepleri WhatsApp üzerinden alınır.",
    url: appEnv.siteUrl,
    logo: absoluteUrl("/icon.png"),
    image: [absoluteUrl(defaultOgImage), absoluteUrl("/sumbul-logo.png")],
    telephone: phone,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.address ?? "Kayabaşı Mh. Gazi Yaşargil Cd. Park Mavera 1 Sitesi",
      addressLocality: "Başakşehir",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: [
      "Başakşehir",
      "Kayabaşı",
      "Bahçeşehir",
      "Bahçekent",
      "Esenyurt",
      "İstanbul",
      "Türkiye",
    ],
    sameAs: instagram ? [instagram] : undefined,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "19:00",
      },
    ],
    makesOffer: [
      "Çiçek siparişi",
      "Sevgililer Günü çiçekleri",
      "Kutu çiçekler",
      "Salon bitkileri",
      "Peyzaj tasarım",
      "Balon süsleme",
      "Düğün ve nişan organizasyonu",
    ],
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}
