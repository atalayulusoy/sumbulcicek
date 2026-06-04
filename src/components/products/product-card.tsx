"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { FavoriteButton } from "@/components/products/favorite-button";
import { WhatsappOrderButton } from "@/components/products/whatsapp-order-button";
import { Badge } from "@/components/ui/badge";
import { appEnv } from "@/lib/env";
import type { Product, SiteSettings } from "@/lib/types";
import { formatCurrency, getBlurDataURL } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  settings: SiteSettings;
  index?: number;
}

export function ProductCard({ product, settings, index = 0 }: ProductCardProps) {
  const displayPrice = product.discountPrice ?? product.price;
  const productUrl = new URL(`/products/${product.slug}`, appEnv.siteUrl).toString();
  const productHref = `/products/${product.slug}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group rounded-[2rem] border border-white/60 bg-white/80 p-3 shadow-card backdrop-blur-2xl"
    >
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.6rem] bg-[#fbfaf6]">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain p-3 transition duration-700 group-hover:scale-105"
            placeholder="blur"
            blurDataURL={getBlurDataURL()}
          />
        </div>

        <div className="absolute inset-0 z-10">
          <Link href={productHref} className="absolute inset-0 block" aria-label={`Ürüne git: ${product.title}`}>
            <span className="sr-only">Ürüne git: {product.title}</span>
          </Link>
        </div>

        <div className="absolute left-4 top-4 flex gap-2">
          {product.badge ? <Badge variant="rose">{product.badge}</Badge> : null}
          {product.featured ? (
            <Badge className="gap-1 border border-white/80 bg-white/90 text-brand shadow-sm backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Premium
            </Badge>
          ) : null}
        </div>

        <div className="absolute right-4 top-4 z-20">
          <FavoriteButton slug={product.slug} />
        </div>
      </div>

      <div className="space-y-4 p-4">
        <Link href={productHref} className="block" aria-label={`Ürüne git: ${product.title}`}>
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/45">
                  {product.category?.name}
                </p>
                <p className="mt-1 block text-lg font-semibold text-foreground/95">
                  {product.title}
                </p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 text-foreground/35 transition group-hover:text-brand" />
            </div>
            <p className="line-clamp-2 text-sm leading-6 text-foreground/62">{product.description}</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-brand">{formatCurrency(displayPrice)}</span>
          {product.discountPrice ? (
            <span className="text-sm text-foreground/38 line-through">{formatCurrency(product.price)}</span>
          ) : null}
        </div>

        <WhatsappOrderButton
          productTitle={product.title}
          price={displayPrice}
          productUrl={productUrl}
          whatsappNumber={settings.whatsappNumber}
          className="w-full"
        />
      </div>
    </motion.article>
  );
}
