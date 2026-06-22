# SÜMBÜL GARDEN

Next.js 14, TypeScript, TailwindCSS, Framer Motion, Swiper, Prisma ve PostgreSQL ile geliştirilmiş çiçekçilik ve peyzaj web uygulaması.

## Özellikler

- SÜMBÜL GARDEN çiçek vitrini
- SÜMBÜL PEYZAJ için ayrı peyzaj sayfası
- Ürünlerde fiyat gösterimi
- WhatsApp ile sipariş ve keşif talepleri
- Admin panelden ürün, kategori, banner ve site ayarı yönetimi
- Gizli admin giriş route'u: `/secret-admin-login`
- Middleware ile korunan dashboard route'u: `/dashboard-admin`
- Cloudinary görsel yükleme sistemi
- Responsive masaüstü ve mobil deneyim

## Kurulum

```bash
npm install
cp .env.example .env
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

PowerShell script engeli varsa:

```bash
npm.cmd run dev
```

## Varsayılan Admin

- E-posta: `admin@sumbulgarden.com`
- Şifre: `Admin123!`

Bu bilgiler `.env` içindeki `ADMIN_EMAIL` ve `ADMIN_PASSWORD` ile değiştirilebilir.

## İletişim

- Telefon / WhatsApp: `+90 530 635 27 19`
- Instagram: `https://www.instagram.com/sumbulgarden`

## Notlar

- Veritabanı ayarsızsa storefront örnek verilerle açılır.
- Admin CRUD işlemleri için gerçek veritabanı bağlantısı gerekir.
- Cloudinary ayarsızsa görsel yükleme route'u 503 döner.

## Vercel Admin Kayitlari

Admin panelinden urun, kategori, banner ve site ayari kaydetmek icin iki yoldan birini kullanin:

- Veritabani: `DATABASE_URL` girin ve Prisma tablolarini olusturun.
- GitHub JSON store: `FORCE_GITHUB_STORE=true`, `GITHUB_REPOSITORY=atalayulusoy/sumbulcicek`, `GITHUB_PAT=<repo contents read/write token>` girin.

Gorsel yuklemek icin Vercel Environment Variables alanina sunlari ekleyin:

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
