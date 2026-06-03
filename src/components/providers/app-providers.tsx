"use client";

import type { ReactNode } from "react";

import { CustomCursor } from "@/components/interactive/custom-cursor";
import { ScrollProgress } from "@/components/interactive/scroll-progress";
import { SmoothScrollProvider } from "@/components/interactive/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <SmoothScrollProvider />
      <ScrollProgress />
      <CustomCursor />
      {children}
    </ThemeProvider>
  );
}
