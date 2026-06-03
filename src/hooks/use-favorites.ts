"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "sumbul-garden-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const toggleFavorite = (slug: string) => {
    setFavorites((current) => {
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug];

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return {
    favorites,
    isFavorite: (slug: string) => favorites.includes(slug),
    toggleFavorite,
  };
}
