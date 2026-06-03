"use client";

import { Heart } from "lucide-react";

import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

export function FavoriteButton({ slug }: { slug: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(slug);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(slug)}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition",
        active
          ? "border-[#ffc0d3] bg-[#ffe4ee] text-[#d34576]"
          : "border-white/65 bg-white/85 text-foreground/55 hover:bg-white",
      )}
      aria-label="Favorilere ekle"
    >
      <Heart className={cn("h-4 w-4", active && "fill-current")} />
    </button>
  );
}
