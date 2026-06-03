# SÜMBÜL GARDEN

Next.js 14, TypeScript, TailwindCSS, Framer Motion, Swiper, Prisma ve PostgreSQL ile geliştirilmiş çiçekçilik ve peyzaj web uygulaması.

## Özellikler

- SÜMBÜL GARDEN çiçek vitrini
- SÜMBÜL PEYZAJ için ayrı peyzaj sayfası
- Ürünlerde fiyat gösterimi
- WhatsApp ile sipariş ve sipariş takibi
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
- Instagram: `https://www.instagram.com/sumbulpeyzaj?utm_source=qr`

## Notlar

- Veritabanı ayarsızsa storefront örnek verilerle açılır.
- Admin CRUD işlemleri için gerçek veritabanı bağlantısı gerekir.
- Cloudinary ayarsızsa görsel yükleme route'u 503 döner.
