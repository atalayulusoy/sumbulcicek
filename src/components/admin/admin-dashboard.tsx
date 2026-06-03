"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Boxes,
  ImageUp,
  Images,
  LayoutDashboard,
  Loader2,
  LogOut,
  MoonStar,
  Package,
  Pencil,
  Plus,
  Settings2,
  SunMedium,
  Trash2,
  UploadCloud,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { getIconByName } from "@/lib/icon-map";
import type {
  Banner,
  Category,
  DashboardSnapshot,
  HomepageSectionConfig,
  Product,
  ProductStockStatus,
  SiteSettings,
} from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

type ProductDraft = {
  id?: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  discountPrice: string;
  imagesText: string;
  categoryId: string;
  featured: boolean;
  stockStatus: ProductStockStatus;
  badge: string;
  deliveryInfo: string;
};

type CategoryDraft = {
  id?: string;
  name: string;
  slug: string;
  icon: string;
};

type BannerDraft = {
  id?: string;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  theme: string;
  order: string;
  isActive: boolean;
};

const stockOptions: ProductStockStatus[] = [
  "IN_STOCK",
  "LOW_STOCK",
  "OUT_OF_STOCK",
  "PRE_ORDER",
];

const iconOptions = ["Gift", "Heart", "Sparkles", "Flower2", "Leaf", "Gem", "Crown"];

function createProductDraft(categories: Category[], product?: Product): ProductDraft {
  return {
    id: product?.id,
    title: product?.title ?? "",
    slug: product?.slug ?? "",
    description: product?.description ?? "",
    price: product ? String(product.price) : "",
    discountPrice: product?.discountPrice ? String(product.discountPrice) : "",
    imagesText: product?.images.join("\n") ?? "",
    categoryId: product?.categoryId ?? categories[0]?.id ?? "",
    featured: product?.featured ?? false,
    stockStatus: product?.stockStatus ?? "IN_STOCK",
    badge: product?.badge ?? "",
    deliveryInfo: product?.deliveryInfo ?? "",
  };
}

function createCategoryDraft(category?: Category): CategoryDraft {
  return {
    id: category?.id,
    name: category?.name ?? "",
    slug: category?.slug ?? "",
    icon: category?.icon ?? "Gift",
  };
}

function createBannerDraft(banner?: Banner): BannerDraft {
  return {
    id: banner?.id,
    title: banner?.title ?? "",
    subtitle: banner?.subtitle ?? "",
    image: banner?.image ?? "",
    buttonText: banner?.buttonText ?? "",
    buttonLink: banner?.buttonLink ?? "/products",
    theme: banner?.theme ?? "mint",
    order: banner ? String(banner.order) : "0",
    isActive: banner?.isActive ?? true,
  };
}

async function readResponse<T>(response: Response): Promise<T> {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error ?? "Islem basarisiz oldu.");
  }

  return data as T;
}

function SettingsSectionsEditor({
  sections,
  onChange,
}: {
  sections: HomepageSectionConfig[];
  onChange: (sections: HomepageSectionConfig[]) => void;
}) {
  return (
    <div className="grid gap-4">
      {sections.map((section) => (
        <div
          key={section.key}
          className="grid gap-3 rounded-[1.5rem] border border-surface-outline bg-white/70 p-4 md:grid-cols-[1fr_120px_auto]"
        >
          <div>
            <p className="font-medium">{section.label}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-foreground/45">{section.key}</p>
          </div>
          <Input
            type="number"
            value={section.order}
            onChange={(event) =>
              onChange(
                sections.map((item) =>
                  item.key === section.key
                    ? { ...item, order: Number(event.target.value) }
                    : item,
                ),
              )
            }
          />
          <div className="flex items-center gap-3">
            <Switch
              checked={section.enabled}
              onCheckedChange={(checked) =>
                onChange(
                  sections.map((item) =>
                    item.key === section.key ? { ...item, enabled: checked } : item,
                  ),
                )
              }
            />
            <span className="text-sm text-foreground/65">
              {section.enabled ? "Acik" : "Kapali"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AdminDashboard({ initialData }: { initialData: DashboardSnapshot }) {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const [products, setProducts] = useState(initialData.products);
  const [categories, setCategories] = useState(initialData.categories);
  const [banners, setBanners] = useState(initialData.banners);
  const [settings, setSettings] = useState<SiteSettings>(initialData.settings);
  const [notice, setNotice] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [lastUploadUrl, setLastUploadUrl] = useState<string | null>(null);
  const [productDialogOpen, setProductDialogOpen] = useState(false);
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [bannerDialogOpen, setBannerDialogOpen] = useState(false);
  const [productDraft, setProductDraft] = useState(() => createProductDraft(initialData.categories));
  const [categoryDraft, setCategoryDraft] = useState<CategoryDraft>(() => createCategoryDraft());
  const [bannerDraft, setBannerDraft] = useState<BannerDraft>(() => createBannerDraft());
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => {
    setChartReady(true);
  }, []);

  const metrics = useMemo(
    () => ({
      totalProducts: products.length,
      totalCategories: categories.length,
      totalBanners: banners.length,
      featuredProducts: products.filter((product) => product.featured).length,
    }),
    [banners.length, categories.length, products],
  );

  const categoryAnalytics = useMemo(
    () =>
      categories
        .map((category) => ({
          name: category.name,
          total: products.filter((product) => product.categoryId === category.id).length,
          featured: products.filter(
            (product) => product.categoryId === category.id && product.featured,
          ).length,
        }))
        .filter((category) => category.total > 0)
        .sort((first, second) => second.total - first.total),
    [categories, products],
  );

  const openProductDialog = (product?: Product) => {
    setProductDraft(createProductDraft(categories, product));
    setProductDialogOpen(true);
  };

  const openCategoryDialog = (category?: Category) => {
    setCategoryDraft(createCategoryDraft(category));
    setCategoryDialogOpen(true);
  };

  const openBannerDialog = (banner?: Banner) => {
    setBannerDraft(createBannerDraft(banner));
    setBannerDialogOpen(true);
  };

  const uploadImage = async (file: File) => {
    const body = new FormData();
    body.append("file", file);

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      body,
    });

    const data = await readResponse<{ url: string }>(response);
    setLastUploadUrl(data.url);
    return data.url;
  };

  const handleProductSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy("product");
    setNotice(null);

    try {
      const payload = {
        title: productDraft.title,
        slug: productDraft.slug,
        description: productDraft.description,
        price: Number(productDraft.price),
        discountPrice: productDraft.discountPrice ? Number(productDraft.discountPrice) : null,
        images: productDraft.imagesText
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean),
        categoryId: productDraft.categoryId,
        featured: productDraft.featured,
        stockStatus: productDraft.stockStatus,
        badge: productDraft.badge || null,
        deliveryInfo: productDraft.deliveryInfo || null,
      };

      const endpoint = productDraft.id
        ? `/api/admin/products/${productDraft.id}`
        : "/api/admin/products";
      const method = productDraft.id ? "PATCH" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await readResponse<{ product: Product }>(response);

      setProducts((current) =>
        productDraft.id
          ? current.map((item) => (item.id === data.product.id ? data.product : item))
          : [data.product, ...current],
      );
      setProductDialogOpen(false);
      setNotice("Urun basariyla kaydedildi.");
    } catch (submitError) {
      setNotice(submitError instanceof Error ? submitError.message : "Urun kaydedilemedi.");
    } finally {
      setBusy(null);
    }
  };

  const handleCategorySubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy("category");
    setNotice(null);

    try {
      const payload = {
        name: categoryDraft.name,
        slug: categoryDraft.slug,
        icon: categoryDraft.icon,
      };

      const endpoint = categoryDraft.id
        ? `/api/admin/categories/${categoryDraft.id}`
        : "/api/admin/categories";
      const method = categoryDraft.id ? "PATCH" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await readResponse<{ category: Category }>(response);

      setCategories((current) =>
        categoryDraft.id
          ? current.map((item) => (item.id === data.category.id ? data.category : item))
          : [...current, data.category],
      );
      setCategoryDialogOpen(false);
      setNotice("Kategori guncellendi.");
    } catch (submitError) {
      setNotice(submitError instanceof Error ? submitError.message : "Kategori kaydedilemedi.");
    } finally {
      setBusy(null);
    }
  };

  const handleBannerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy("banner");
    setNotice(null);

    try {
      const payload = {
        title: bannerDraft.title,
        subtitle: bannerDraft.subtitle,
        image: bannerDraft.image,
        buttonText: bannerDraft.buttonText,
        buttonLink: bannerDraft.buttonLink,
        theme: bannerDraft.theme || null,
        order: Number(bannerDraft.order),
        isActive: bannerDraft.isActive,
      };

      const endpoint = bannerDraft.id
        ? `/api/admin/banners/${bannerDraft.id}`
        : "/api/admin/banners";
      const method = bannerDraft.id ? "PATCH" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await readResponse<{ banner: Banner }>(response);

      setBanners((current) =>
        bannerDraft.id
          ? current.map((item) => (item.id === data.banner.id ? data.banner : item))
          : [...current, data.banner].sort((first, second) => first.order - second.order),
      );
      setBannerDialogOpen(false);
      setNotice("Banner kaydedildi.");
    } catch (submitError) {
      setNotice(submitError instanceof Error ? submitError.message : "Banner kaydedilemedi.");
    } finally {
      setBusy(null);
    }
  };

  const handleSettingsSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy("settings");
    setNotice(null);

    try {
      const response = await fetch("/api/admin/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      const data = await readResponse<{ settings: SiteSettings }>(response);
      setSettings(data.settings);
      setNotice("Site ayarlari guncellendi.");
    } catch (submitError) {
      setNotice(submitError instanceof Error ? submitError.message : "Ayarlar kaydedilemedi.");
    } finally {
      setBusy(null);
    }
  };

  const handleDelete = async (kind: "products" | "categories" | "banners", id: string) => {
    if (!window.confirm("Bu kaydi silmek istediginize emin misiniz?")) {
      return;
    }

    setBusy(`delete-${kind}-${id}`);
    setNotice(null);

    try {
      const response = await fetch(`/api/admin/${kind}/${id}`, { method: "DELETE" });
      await readResponse<{ success: true }>(response);

      if (kind === "products") {
        setProducts((current) => current.filter((item) => item.id !== id));
      } else if (kind === "categories") {
        setCategories((current) => current.filter((item) => item.id !== id));
      } else {
        setBanners((current) => current.filter((item) => item.id !== id));
      }

      setNotice("Kayit silindi.");
    } catch (deleteError) {
      setNotice(deleteError instanceof Error ? deleteError.message : "Kayit silinemedi.");
    } finally {
      setBusy(null);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/secret-admin-login");
    router.refresh();
  };

  return (
    <div className="container-edge py-10">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">Dashboard Admin</p>
          <h1 className="mt-3 font-display text-5xl">SÜMBÜL GARDEN kontrol merkezi</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
            Urunler, slider bannerlari, kategoriler ve site ayarlari bu gizli panelden yonetilir.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {resolvedTheme === "dark" ? (
              <SunMedium className="h-4 w-4" />
            ) : (
              <MoonStar className="h-4 w-4" />
            )}
            {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
          <Button type="button" variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
            Cikis Yap
          </Button>
        </div>
      </div>

      {initialData.isFallback ? (
        <div className="mb-6 rounded-[1.5rem] border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-700">
          `DATABASE_URL` ayarlanmadigi icin dashboard demo verilerle acildi. CRUD kayitlari icin veritabani baglantisi gerekli.
        </div>
      ) : null}

      {notice ? (
        <div className="mb-6 rounded-[1.5rem] border border-surface-outline bg-white/80 px-5 py-4 text-sm text-foreground/72">
          {notice}
        </div>
      ) : null}

      <Tabs defaultValue="overview" className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <TabsList className="h-fit flex-col items-stretch rounded-[2rem] p-3">
          <TabsTrigger value="overview" className="justify-start">
            <LayoutDashboard className="h-4 w-4" />
            Genel Bakis
          </TabsTrigger>
          <TabsTrigger value="products" className="justify-start">
            <Package className="h-4 w-4" />
            Urunler
          </TabsTrigger>
          <TabsTrigger value="categories" className="justify-start">
            <Boxes className="h-4 w-4" />
            Kategoriler
          </TabsTrigger>
          <TabsTrigger value="banners" className="justify-start">
            <Images className="h-4 w-4" />
            Bannerlar
          </TabsTrigger>
          <TabsTrigger value="settings" className="justify-start">
            <Settings2 className="h-4 w-4" />
            Site Ayarlari
          </TabsTrigger>
        </TabsList>

        <div>
          <TabsContent value="overview">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardDescription>Total products</CardDescription>
                  <CardTitle>{metrics.totalProducts}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Total categories</CardDescription>
                  <CardTitle>{metrics.totalCategories}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Total banners</CardDescription>
                  <CardTitle>{metrics.totalBanners}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Featured products</CardDescription>
                  <CardTitle>{metrics.featuredProducts}</CardTitle>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <Card>
                <CardHeader>
                  <CardTitle>Kategori Analitigi</CardTitle>
                  <CardDescription>Urun yogunlugu ve featured dagilimi kategori bazinda izlenir.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="h-[280px] w-full">
                    {chartReady && categoryAnalytics.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={categoryAnalytics}>
                          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.18} vertical={false} />
                          <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
                          <YAxis allowDecimals={false} tickLine={false} axisLine={false} fontSize={12} />
                          <Tooltip
                            cursor={{ fill: "rgba(61, 122, 89, 0.06)" }}
                            contentStyle={{
                              borderRadius: "18px",
                              border: "1px solid rgba(36,73,56,0.08)",
                              background: "rgba(255,255,255,0.96)",
                              boxShadow: "0 24px 64px rgba(27,44,37,0.14)",
                            }}
                          />
                          <Bar dataKey="total" radius={[10, 10, 0, 0]} fill="var(--brand-primary)" />
                          <Bar dataKey="featured" radius={[10, 10, 0, 0]} fill="var(--brand-accent)" />
                        </BarChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="flex h-full items-center justify-center rounded-[1.5rem] bg-brand-muted/35 text-sm text-foreground/55">
                        Grafik hazirlaniyor...
                      </div>
                    )}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.4rem] bg-brand-muted/75 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/45">Featured oran</p>
                      <p className="mt-3 text-2xl font-semibold text-brand">
                        {metrics.totalProducts > 0
                          ? `${Math.round((metrics.featuredProducts / metrics.totalProducts) * 100)}%`
                          : "0%"}
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] bg-[#fff0f6] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/45">En guclu kategori</p>
                      <p className="mt-3 text-lg font-semibold text-foreground">
                        {categoryAnalytics[0]?.name ?? "Veri yok"}
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] bg-[#eff6fb] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/45">Aktif slider</p>
                      <p className="mt-3 text-2xl font-semibold text-foreground">
                        {banners.filter((banner) => banner.isActive).length}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Son urunler</CardTitle>
                    <CardDescription>Storefront gridinde one cikan secimler</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {products.slice(0, 5).map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between rounded-[1.4rem] border border-surface-outline bg-white/70 px-4 py-3"
                      >
                        <div>
                          <p className="font-medium">{product.title}</p>
                          <p className="text-sm text-foreground/55">{product.category?.name}</p>
                        </div>
                        <p className="font-semibold text-brand">
                          {formatCurrency(product.discountPrice ?? product.price)}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upload Manager</CardTitle>
                    <CardDescription>Cloudinary uzerine gorsel yukleyin ve linki hemen alin</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <label className="flex cursor-pointer items-center justify-center rounded-[1.6rem] border border-dashed border-brand/30 bg-brand-muted/60 p-8 text-center text-sm text-foreground/65">
                      <div className="space-y-2">
                        <UploadCloud className="mx-auto h-6 w-6 text-brand" />
                        <span>Gorsel secmek icin tiklayin</span>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={async (event) => {
                          const file = event.target.files?.[0];
                          if (!file) return;

                          setBusy("overview-upload");
                          try {
                            const url = await uploadImage(file);
                            setNotice("Gorsel yuklendi.");
                            setLastUploadUrl(url);
                          } catch (uploadError) {
                            setNotice(
                              uploadError instanceof Error
                                ? uploadError.message
                                : "Gorsel yuklenemedi.",
                            );
                          } finally {
                            setBusy(null);
                            event.target.value = "";
                          }
                        }}
                      />
                    </label>
                    {busy === "overview-upload" ? (
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Yukleniyor...
                      </div>
                    ) : null}
                    {lastUploadUrl ? (
                      <div className="rounded-[1.4rem] border border-surface-outline bg-white/70 p-4 text-sm text-foreground/70">
                        {lastUploadUrl}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle>Urun Yonetimi</CardTitle>
                  <CardDescription>Urun ekle, duzenle, stok ve fiyat bilgilerini guncelle.</CardDescription>
                </div>
                <Button type="button" onClick={() => openProductDialog()}>
                  <Plus className="h-4 w-4" />
                  Yeni Urun
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full">
                  <div className="min-w-[720px] space-y-3">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="grid items-center gap-3 rounded-[1.5rem] border border-surface-outline bg-white/70 p-4 md:grid-cols-[1.6fr_1fr_140px_160px]"
                      >
                        <div>
                          <p className="font-medium">{product.title}</p>
                          <p className="text-sm text-foreground/55">{product.category?.name}</p>
                        </div>
                        <div className="text-sm text-foreground/65">
                          {product.featured ? "One cikan urun" : "Standart urun"}
                        </div>
                        <div className="font-semibold text-brand">
                          {formatCurrency(product.discountPrice ?? product.price)}
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button type="button" variant="secondary" size="sm" onClick={() => openProductDialog(product)}>
                            <Pencil className="h-4 w-4" />
                            Duzenle
                          </Button>
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            disabled={busy === `delete-products-${product.id}`}
                            onClick={() => handleDelete("products", product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            Sil
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories">
            <Card>
              <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle>Kategori Yonetimi</CardTitle>
                  <CardDescription>Navbar, filtreler ve homepage kartlari buradan beslenir.</CardDescription>
                </div>
                <Button type="button" onClick={() => openCategoryDialog()}>
                  <Plus className="h-4 w-4" />
                  Yeni Kategori
                </Button>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {categories.map((category) => {
                  const Icon = getIconByName(category.icon);

                  return (
                    <div
                      key={category.id}
                      className="rounded-[1.6rem] border border-surface-outline bg-white/70 p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-muted text-brand">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex gap-2">
                          <Button variant="secondary" size="sm" onClick={() => openCategoryDialog(category)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            disabled={busy === `delete-categories-${category.id}`}
                            onClick={() => handleDelete("categories", category.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="mt-4 font-medium">{category.name}</p>
                      <p className="text-sm text-foreground/55">{category.slug}</p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="banners">
            <Card>
              <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle>Banner Yonetimi</CardTitle>
                  <CardDescription>Hero slider gorselleri ve CTA metinleri burada degisir.</CardDescription>
                </div>
                <Button type="button" onClick={() => openBannerDialog()}>
                  <Plus className="h-4 w-4" />
                  Yeni Banner
                </Button>
              </CardHeader>
              <CardContent className="grid gap-4 xl:grid-cols-3">
                {banners.map((banner) => (
                  <div key={banner.id} className="rounded-[1.7rem] border border-surface-outline bg-white/70 p-5">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-brand-muted px-3 py-1 text-xs font-medium text-brand">
                        Sira {banner.order}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="secondary" size="sm" onClick={() => openBannerDialog(banner)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          disabled={busy === `delete-banners-${banner.id}`}
                          onClick={() => handleDelete("banners", banner.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="mt-4 font-medium">{banner.title}</p>
                    <p className="mt-2 text-sm leading-7 text-foreground/62">{banner.subtitle}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Site Ayarlari</CardTitle>
                <CardDescription>
                  WhatsApp numarasi, iletisim bilgileri, SEO ve tema renkleri tek merkezde.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-8" onSubmit={handleSettingsSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">WhatsApp numarasi</label>
                      <Input
                        value={settings.whatsappNumber}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, whatsappNumber: event.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Instagram linki</label>
                      <Input
                        value={settings.instagram ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, instagram: event.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Telefon</label>
                      <Input
                        value={settings.phone ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, phone: event.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Adres</label>
                      <Input
                        value={settings.address ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, address: event.target.value }))
                        }
                      />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Hero baslik</label>
                      <Input
                        value={settings.heroTitle ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, heroTitle: event.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Hero aciklama</label>
                      <Textarea
                        value={settings.heroSubtitle ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, heroSubtitle: event.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Hakkımızda başlık</label>
                      <Input
                        value={settings.aboutTitle ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, aboutTitle: event.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Hakkımızda metni</label>
                      <Textarea
                        value={settings.aboutText ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, aboutText: event.target.value }))
                        }
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meta title</label>
                      <Input
                        value={settings.metaTitle ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, metaTitle: event.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meta description</label>
                      <Textarea
                        value={settings.metaDescription ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({
                            ...current,
                            metaDescription: event.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Primary color</label>
                      <Input
                        value={settings.primaryColor ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, primaryColor: event.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Secondary color</label>
                      <Input
                        value={settings.secondaryColor ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({
                            ...current,
                            secondaryColor: event.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Accent color</label>
                      <Input
                        value={settings.accentColor ?? ""}
                        onChange={(event) =>
                          setSettings((current) => ({ ...current, accentColor: event.target.value }))
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Homepage section yonetimi</p>
                      <p className="text-sm text-foreground/55">
                        Siralama ve gorunurluk ayarlari landing akisini degistirir.
                      </p>
                    </div>
                    <SettingsSectionsEditor
                      sections={settings.homepageSections}
                      onChange={(homepageSections) =>
                        setSettings((current) => ({ ...current, homepageSections }))
                      }
                    />
                  </div>

                  <Button disabled={busy === "settings"} type="submit" className="w-fit">
                    {busy === "settings" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    Ayarlari Kaydet
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>

      <Dialog open={productDialogOpen} onOpenChange={setProductDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{productDraft.id ? "Urunu Duzenle" : "Yeni Urun Ekle"}</DialogTitle>
            <DialogDescription>
              Urun kartlari, detay sayfasi ve WhatsApp siparis linki bu verilerle olusturulur.
            </DialogDescription>
          </DialogHeader>
          <form className="grid gap-4" onSubmit={handleProductSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                value={productDraft.title}
                onChange={(event) =>
                  setProductDraft((current) => ({ ...current, title: event.target.value }))
                }
                placeholder="Urun adi"
              />
              <Input
                value={productDraft.slug}
                onChange={(event) =>
                  setProductDraft((current) => ({ ...current, slug: event.target.value }))
                }
                placeholder="slug-opsiyonel"
              />
            </div>
            <Textarea
              value={productDraft.description}
              onChange={(event) =>
                setProductDraft((current) => ({ ...current, description: event.target.value }))
              }
              placeholder="Urun aciklamasi"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                type="number"
                value={productDraft.price}
                onChange={(event) =>
                  setProductDraft((current) => ({ ...current, price: event.target.value }))
                }
                placeholder="Fiyat"
              />
              <Input
                type="number"
                value={productDraft.discountPrice}
                onChange={(event) =>
                  setProductDraft((current) => ({
                    ...current,
                    discountPrice: event.target.value,
                  }))
                }
                placeholder="Indirimli fiyat"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <select
                className="h-11 rounded-2xl border border-surface-outline bg-white/80 px-4 text-sm"
                value={productDraft.categoryId}
                onChange={(event) =>
                  setProductDraft((current) => ({ ...current, categoryId: event.target.value }))
                }
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <select
                className="h-11 rounded-2xl border border-surface-outline bg-white/80 px-4 text-sm"
                value={productDraft.stockStatus}
                onChange={(event) =>
                  setProductDraft((current) => ({
                    ...current,
                    stockStatus: event.target.value as ProductStockStatus,
                  }))
                }
              >
                {stockOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                value={productDraft.badge}
                onChange={(event) =>
                  setProductDraft((current) => ({ ...current, badge: event.target.value }))
                }
                placeholder="Badge metni"
              />
              <Input
                value={productDraft.deliveryInfo}
                onChange={(event) =>
                  setProductDraft((current) => ({
                    ...current,
                    deliveryInfo: event.target.value,
                  }))
                }
                placeholder="Teslimat bilgisi"
              />
            </div>
            <Textarea
              value={productDraft.imagesText}
              onChange={(event) =>
                setProductDraft((current) => ({ ...current, imagesText: event.target.value }))
              }
              placeholder="Her satira bir gorsel URL listesi"
            />
            <div className="flex items-center justify-between rounded-[1.4rem] border border-surface-outline bg-brand-muted/40 px-4 py-3">
              <div>
                <p className="text-sm font-medium">Cloudinary ile gorsel yukle</p>
                <p className="text-xs text-foreground/55">Yuklenen URL otomatik olarak en alta eklenir.</p>
              </div>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;

                    setBusy("product-upload");
                    try {
                      const url = await uploadImage(file);
                      setProductDraft((current) => ({
                        ...current,
                        imagesText: current.imagesText
                          ? `${current.imagesText}\n${url}`
                          : url,
                      }));
                      setNotice("Urun gorseli yuklendi.");
                    } catch (uploadError) {
                      setNotice(
                        uploadError instanceof Error ? uploadError.message : "Gorsel yuklenemedi.",
                      );
                    } finally {
                      setBusy(null);
                      event.target.value = "";
                    }
                  }}
                />
                <Button asChild type="button" variant="secondary">
                  <span>
                    <ImageUp className="h-4 w-4" />
                    Gorsel Yukle
                  </span>
                </Button>
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Switch
                checked={productDraft.featured}
                onCheckedChange={(checked) =>
                  setProductDraft((current) => ({ ...current, featured: checked }))
                }
              />
              <span className="text-sm text-foreground/65">Cok satanlar alaninda goster</span>
            </div>
            <DialogFooter>
              <Button disabled={busy === "product"} type="submit">
                {busy === "product" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Kaydet
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={categoryDialogOpen} onOpenChange={setCategoryDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{categoryDraft.id ? "Kategori Duzenle" : "Yeni Kategori"}</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4" onSubmit={handleCategorySubmit}>
            <Input
              value={categoryDraft.name}
              onChange={(event) =>
                setCategoryDraft((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="Kategori adi"
            />
            <Input
              value={categoryDraft.slug}
              onChange={(event) =>
                setCategoryDraft((current) => ({ ...current, slug: event.target.value }))
              }
              placeholder="slug-opsiyonel"
            />
            <select
              className="h-11 rounded-2xl border border-surface-outline bg-white/80 px-4 text-sm"
              value={categoryDraft.icon}
              onChange={(event) =>
                setCategoryDraft((current) => ({ ...current, icon: event.target.value }))
              }
            >
              {iconOptions.map((icon) => (
                <option key={icon} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
            <DialogFooter>
              <Button disabled={busy === "category"} type="submit">
                {busy === "category" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Kaydet
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={bannerDialogOpen} onOpenChange={setBannerDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{bannerDraft.id ? "Banner Duzenle" : "Yeni Banner"}</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4" onSubmit={handleBannerSubmit}>
            <Input
              value={bannerDraft.title}
              onChange={(event) =>
                setBannerDraft((current) => ({ ...current, title: event.target.value }))
              }
              placeholder="Banner basligi"
            />
            <Textarea
              value={bannerDraft.subtitle}
              onChange={(event) =>
                setBannerDraft((current) => ({ ...current, subtitle: event.target.value }))
              }
              placeholder="Banner aciklamasi"
            />
            <Input
              value={bannerDraft.image}
              onChange={(event) =>
                setBannerDraft((current) => ({ ...current, image: event.target.value }))
              }
              placeholder="Banner gorsel URL"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                value={bannerDraft.buttonText}
                onChange={(event) =>
                  setBannerDraft((current) => ({ ...current, buttonText: event.target.value }))
                }
                placeholder="Buton metni"
              />
              <Input
                value={bannerDraft.buttonLink}
                onChange={(event) =>
                  setBannerDraft((current) => ({ ...current, buttonLink: event.target.value }))
                }
                placeholder="/products"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Input
                value={bannerDraft.theme}
                onChange={(event) =>
                  setBannerDraft((current) => ({ ...current, theme: event.target.value }))
                }
                placeholder="Tema"
              />
              <Input
                type="number"
                value={bannerDraft.order}
                onChange={(event) =>
                  setBannerDraft((current) => ({ ...current, order: event.target.value }))
                }
                placeholder="Sira"
              />
              <div className="flex items-center gap-3 rounded-[1.5rem] border border-surface-outline bg-white/75 px-4">
                <Switch
                  checked={bannerDraft.isActive}
                  onCheckedChange={(checked) =>
                    setBannerDraft((current) => ({ ...current, isActive: checked }))
                  }
                />
                <span className="text-sm text-foreground/65">Aktif</span>
              </div>
            </div>
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;

                  setBusy("banner-upload");
                  try {
                    const url = await uploadImage(file);
                    setBannerDraft((current) => ({ ...current, image: url }));
                    setNotice("Banner gorseli yuklendi.");
                  } catch (uploadError) {
                    setNotice(
                      uploadError instanceof Error ? uploadError.message : "Gorsel yuklenemedi.",
                    );
                  } finally {
                    setBusy(null);
                    event.target.value = "";
                  }
                }}
              />
              <Button asChild type="button" variant="secondary">
                <span>
                  <UploadCloud className="h-4 w-4" />
                  Banner Gorseli Yukle
                </span>
              </Button>
            </label>
            <DialogFooter>
              <Button disabled={busy === "banner"} type="submit">
                {busy === "banner" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Kaydet
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
