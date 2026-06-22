import { headers } from "next/headers";

import { appEnv } from "@/lib/env";

const canonicalHostByIncomingHost: Record<string, string> = {
  "bahcesehircicekcisi.com": "www.bahcesehircicekcisi.com",
  "www.bahcesehircicekcisi.com": "www.bahcesehircicekcisi.com",
  "basaksehirciceksiparis.com": "www.basaksehirciceksiparis.com",
  "www.basaksehirciceksiparis.com": "www.basaksehirciceksiparis.com",
};

function normalizeHost(value: string | null) {
  return value?.split(",")[0]?.trim().toLowerCase().replace(/:\d+$/, "") ?? null;
}

export function getRequestSiteUrl() {
  try {
    const requestHeaders = headers();
    const incomingHost =
      normalizeHost(requestHeaders.get("x-forwarded-host")) ?? normalizeHost(requestHeaders.get("host"));
    const canonicalHost = incomingHost ? canonicalHostByIncomingHost[incomingHost] : null;

    if (canonicalHost) {
      return `https://${canonicalHost}`;
    }
  } catch {
    // Static builds do not always have request headers. Fall back to configured site URL.
  }

  return appEnv.siteUrl;
}
