import type { MetadataRoute } from "next";

import { getRequestSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getRequestSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard-admin", "/secret-admin-login", "/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
