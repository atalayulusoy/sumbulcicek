import type { LucideIcon } from "lucide-react";
import {
  Crown,
  Flower2,
  Gem,
  Gift,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Gift,
  Heart,
  Sparkles,
  Flower2,
  Leaf,
  Gem,
  Crown,
};

export function getIconByName(name: string) {
  return iconMap[name] ?? Flower2;
}
