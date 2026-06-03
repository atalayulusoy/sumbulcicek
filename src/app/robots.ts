import type { MetadataRoute } from "next";

import { appEnv } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard-admin", "/secret-admin-login", "/api/"],
    },
    sitemap: `${appEnv.siteUrl}/sitemap.xml`,
  };
}
