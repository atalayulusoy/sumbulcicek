import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, Truck } from "lucide-react";

export const dynamic = "force-dynamic";

import { ProductCard } from "@/components/products/product-card";
import { ProductGallery } from "@/components/products/product-gallery";
import { WhatsappOrderButton } from "@/components/products/whatsapp-order-button";
import { Badge } from "@/components/ui/badge";
import { appEnv } from "@/lib/env";
import { buildMetadata, buildProductSchema } from "@/lib/metadata";
import { getProductBySlug, getProducts, getSimilarProducts, getSiteSettings } from "@/lib/services/storefront";
import { formatCurrency } from "@/lib/utils";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return buildMetadata({
      title: "Ürün bulunamadı",
      pathname: `/products/${params.slug}`,
    });
  }

  return buildMetadata({
    title: product.title,
    description: product.description,
    image: product.images[0],
    pathname: `/products/${params.slug}`,
  });
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.slice(0, 8).map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, settings] = await Promise.all([getProductBySlug(params.slug), getSiteSettings()]);

  if (!product) {
    notFound();
  }

  const similarProducts = await getSimilarProducts(product);
  const price = product.discountPrice ?? product.price;
  const productUrl = new URL(`/products/${product.slug}`, appEnv.siteUrl).toString();
  const productSchema = buildProductSchema(product);

  return (
    <div className="container-edge section-space">
      <div className="mb-12">
        <Link href="/products" className="text-sm text-foreground/55 transition hover:text-brand">
          Koleksiyona geri dön
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ProductGallery images={product.images} title={product.title} />

        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>{product.category?.name}</Badge>
            {product.badge ? <Badge variant="rose">{product.badge}</Badge> : null}
          </div>
          <div>
            <h1 className="font-display text-5xl leading-tight">{product.title}</h1>
            <p className="mt-4 text-base leading-8 text-foreground/68">{product.description}</p>
          </div>

          <div className="flex items-end gap-3">
            <span className="text-3xl font-semibold text-brand">{formatCurrency(price)}</span>
            {product.discountPrice ? (
              <span className="text-base text-foreground/40 line-through">{formatCurrency(product.price)}</span>
            ) : null}
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-card backdrop-blur-2xl">
            <div className="flex items-start gap-3">
              <Truck className="mt-1 h-5 w-5 text-brand" />
              <div>
                <p className="font-semibold">Teslimat Bilgisi</p>
                <p className="text-sm leading-7 text-foreground/65">
                  {product.deliveryInfo ?? settings.deliveryInfo}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 h-5 w-5 text-brand" />
              <div>
                <p className="font-semibold">Sipariş Akışı</p>
                <p className="text-sm leading-7 text-foreground/65">
                  Buton sizi WhatsApp üzerinde otomatik oluşan ürün bilgili sipariş mesajına götürür.
                </p>
              </div>
            </div>
          </div>

          <WhatsappOrderButton
            productTitle={product.title}
            price={price}
            productUrl={productUrl}
            whatsappNumber={settings.whatsappNumber}
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      <section className="mt-20">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Benzer Ürünler</p>
          <h2 className="mt-3 font-display text-4xl">Sizin için seçilen diğer tasarımlar</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {similarProducts.map((item, index) => (
            <ProductCard key={item.id} product={item} settings={settings} index={index} />
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </div>
  );
}
