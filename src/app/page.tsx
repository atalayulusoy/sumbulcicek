import { AboutSection } from "@/components/sections/about-section";
import { FeaturedProductsSection } from "@/components/sections/featured-products-section";
import { HomeFlowerShowcase } from "@/components/sections/home-flower-showcase";
import { LocalSeoSection } from "@/components/sections/local-seo-section";
import { buildLocalBusinessSchema, buildMetadata, buildWebsiteSchema } from "@/lib/metadata";
import { getHomePageData, getProducts } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "Başakşehir Çiçekçi | Aynı Gün Çiçek Siparişi",
  description:
    "Başakşehir Kayabaşı SÜMBÜL GARDEN ile çiçek siparişi, Sevgililer Günü buketleri, kutu çiçekler, peyzaj ve organizasyon talepleri için WhatsApp ile iletişime geçin.",
  image: "/og-sumbul-garden.jpg",
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
  const [{ banners, featuredProducts, settings, quickLinks, homeShowcaseSlides }, allProducts] =
    await Promise.all([getHomePageData(), getProducts()]);

  const customDesigns = allProducts
    .filter((product) => landscapeCategorySlugs.includes(product.category?.slug ?? ""))
    .slice(0, 3);

  const sectionMap = {
    categories: null,
    featuredProducts: (
      <FeaturedProductsSection
        title="Çok Satan Çiçekler"
        description="Başakşehir, Kayabaşı, Bahçeşehir ve çevresi için fiyatları görünen, aynı gün teslimata uygun SÜMBÜL GARDEN çiçekleri. Sipariş WhatsApp hattı üzerinden devam eder."
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
        description="Başakşehir, Bahçeşehir ve Bahçekent çevresinde bahçe tasarımı, rulo çim, bitkilendirme, otomatik sulama ve dikey bahçe uygulamalarını inceleyin."
        products={customDesigns}
        settings={settings}
      />
    ),
    about: <AboutSection settings={settings} />,
  } as const;

  const structuredData = [buildLocalBusinessSchema(settings), buildWebsiteSchema()];

  return (
    <>
      <HomeFlowerShowcase banners={banners} quickLinks={quickLinks} slides={homeShowcaseSlides} />
      {settings.homepageSections
        .filter((section) => section.enabled)
        .sort((first, second) => first.order - second.order)
        .map((section) => (
          <div key={section.key}>{sectionMap[section.key]}</div>
        ))}
      <LocalSeoSection settings={settings} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
