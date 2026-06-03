import type { Metadata } from "next";

import { APP_NAME } from "@/lib/constants";
import { appEnv } from "@/lib/env";
import type { Product } from "@/lib/types";

interface MetadataInput {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  pathname?: string;
}

export function buildMetadata({
  title,
  description,
  image,
  pathname = "/",
}: MetadataInput): Metadata {
  const metadataTitle = title ? `${title} | ${APP_NAME}` : `${APP_NAME} | Çiçek ve Peyzaj`;
  const metadataDescription =
    description ??
    "Modern çiçek tasarımları, peyzaj uygulamaları ve WhatsApp ile hızlı sipariş veya keşif akışı.";
  const url = new URL(pathname, appEnv.siteUrl).toString();

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url,
      siteName: APP_NAME,
      images: image ? [{ url: image, width: 1200, height: 630, alt: metadataTitle }] : undefined,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: image ? [image] : undefined,
    },
  };
}

export function buildProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images,
    category: product.category?.name,
    offers: {
      "@type": "Offer",
      priceCurrency: "TRY",
      price: product.discountPrice ?? product.price,
      availability:
        product.stockStatus === "OUT_OF_STOCK"
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
      url: new URL(`/products/${product.slug}`, appEnv.siteUrl).toString(),
    },
    brand: {
      "@type": "Brand",
      name: APP_NAME,
    },
  };
}
