import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-edge flex min-h-[70vh] items-center justify-center py-16">
      <div className="max-w-xl rounded-[2rem] border border-white/60 bg-white/80 p-10 text-center shadow-card backdrop-blur-2xl">
        <p className="text-sm uppercase tracking-[0.26em] text-foreground/45">404</p>
        <h1 className="mt-4 font-display text-5xl">Aradığınız ürün veya hizmet bulunamadı</h1>
        <p className="mt-4 text-sm leading-7 text-foreground/65">
          Link değişmiş olabilir ya da ürün koleksiyondan kalkmış olabilir.
        </p>
        <Button asChild className="mt-8">
          <Link href="/products">Koleksiyona Geri Dön</Link>
        </Button>
      </div>
    </div>
  );
}
