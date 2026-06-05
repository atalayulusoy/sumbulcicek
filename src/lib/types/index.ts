export type ProductStockStatus =
  | "IN_STOCK"
  | "LOW_STOCK"
  | "OUT_OF_STOCK"
  | "PRE_ORDER";

export type HomepageSectionKey =
  | "categories"
  | "featuredProducts"
  | "campaigns"
  | "customDesigns"
  | "about";

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  createdAt: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  discountPrice: number | null;
  images: string[];
  categoryId: string;
  category?: Category;
  featured: boolean;
  stockStatus: ProductStockStatus;
  badge?: string | null;
  deliveryInfo?: string | null;
  createdAt: string;
  updatedAt?: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  theme?: string | null;
  order: number;
  isActive: boolean;
  createdAt: string;
}

export interface QuickLink {
  id: string;
  title: string;
  href: string;
  image: string;
  order: number;
  isActive: boolean;
  createdAt: string;
}

export interface HomepageSectionConfig {
  key: HomepageSectionKey;
  label: string;
  enabled: boolean;
  order: number;
}

export interface SiteSettings {
  id: string;
  whatsappNumber: string;
  instagram: string | null;
  address: string | null;
  phone: string | null;
  heroTitle: string | null;
  heroSubtitle: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  aboutTitle: string | null;
  aboutText: string | null;
  footerText: string | null;
  deliveryInfo: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  accentColor: string | null;
  homepageSections: HomepageSectionConfig[];
  updatedAt: string;
}

export interface DashboardMetrics {
  totalProducts: number;
  totalCategories: number;
  totalBanners: number;
  featuredProducts: number;
}

export interface DashboardSnapshot {
  products: Product[];
  categories: Category[];
  banners: Banner[];
  quickLinks: QuickLink[];
  settings: SiteSettings;
  metrics: DashboardMetrics;
  isFallback: boolean;
}
