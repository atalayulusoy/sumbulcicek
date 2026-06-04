# TODO

- [ ] Admin panelde ürün/kategori güncelleme/silme sırasında Prisma “db server unreachable” hatası alınıyor.
- [ ] Problem: `isDatabaseConfigured` doğru çalışmıyor olabilir; DB bağlantısı kapalıyken bile Prisma çağrılıyor.
- [ ] `POST/PATCH/DELETE` endpointlerinde DB erişimini sadece bağlantı sağlanabildiğinde dene (try/catch ile fallback'a dön).
- [ ] `lib/env.ts` mantığını kontrol et: `DATABASE_URL` boş/placeholder olunca `isDatabaseConfigured` false olmalı.
- [ ] Gerekirse yeni helper ekle: `canUseDatabase()` (prisma ping yapıp başarılıysa true).
- [ ] İlgili endpointleri güncelle: 
  - [ ] `src/app/api/admin/products/route.ts`
  - [ ] `src/app/api/admin/products/[id]/route.ts`
  - [ ] `src/app/api/admin/categories/route.ts`
  - [ ] `src/app/api/admin/categories/[id]/route.ts`
- [ ] Test: Admin panelden ürün/kategori ekle/güncelle/sil işlemlerini yap.

