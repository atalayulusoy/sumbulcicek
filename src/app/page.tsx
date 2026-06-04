import { AboutSection } from "@/components/sections/about-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { HomeFlowerShowcase } from "@/components/sections/home-flower-showcase";
import { appEnv } from "@/lib/env";
import { buildMetadata } from "@/lib/metadata";
import { getHomePageData, getProducts } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "SÜMBÜL GARDEN",
  description:
    "SÜMBÜL GARDEN vitrini üzerinden çiçek siparişi verin; SÜMBÜL PEYZAJ hizmetleriyle bahçe uygulamalarını inceleyin.",
  pathname: "/",
});

const landscapeCategorySlugs = [
  "peyzaj-tasarim",
  "bahce-uygulama",
  "peyzaj-bitkileri",
  "rulo-cim",
  "otomatik-sulama",
  "dikey-bahce",
];

export default async function Home() {
  const [{ categories, featuredProducts, settings }, allProducts] = await Promise.all([
    getHomePageData(),
    getProducts(),
  ]);

  const flowerCategories = categories.filter(
    (category) => !landscapeCategorySlugs.includes(category.slug),
  );
  const customDesigns = allProducts
    .filter((product) => landscapeCategorySlugs.includes(product.category?.slug ?? ""))
    .slice(0, 3);

  const sectionMap = {
    categories: null,
    featuredProducts: (
      <FeaturedProductsSection
        title="Çok Satan Çiçekler"
        description="Fiyatları görünen, aynı gün teslimata uygun SÜMBÜL GARDEN çiçekleri. Sipariş WhatsApp hattı üzerinden devam eder."
        products={featuredProducts.filter(
          (product) => !landscapeCategorySlugs.includes(product.category?.slug ?? ""),
        )}
        settings={settings}
      />
    ),
    campaigns: null,
    customDesigns: (
      <FeaturedProductsSection
        title="SÜMBÜL PEYZAJ"
        description="Bahçe tasarımı, rulo çim, bitkilendirme, otomatik sulama ve dikey bahçe uygulamalarını ayrı peyzaj sayfasında inceleyin."
        products={customDesigns}
        settings={settings}
      />
    ),
    about: <AboutSection settings={settings} />,
  } as const;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SÜMBÜL GARDEN",
    alternateName: "SÜMBÜL PEYZAJ",
    telephone: settings.phone,
    address: settings.address,
    url: appEnv.siteUrl,
  };

  return (
    <>
      <HomeFlowerShowcase categories={flowerCategories} />
      {settings.homepageSections
        .filter((section) => section.enabled)
        .sort((first, second) => first.order - second.order)
        .map((section) => (
          <div key={section.key}>{sectionMap[section.key]}</div>
        ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
