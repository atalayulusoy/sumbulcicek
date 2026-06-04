import { Buffer } from "buffer";

import { fallbackBanners, fallbackCategories, fallbackProducts, fallbackSiteSettings } from "./data/fallback-data";
import type { Banner, Category, Product, SiteSettings } from "./types";

const REPO = process.env.GITHUB_REPOSITORY || ""; // owner/repo
const TOKEN = process.env.GITHUB_PAT || "";
const DATA_PATH = "data/dashboard.json";

type DashboardData = {
  products: Product[];
  categories: Category[];
  banners: Banner[];
  settings: SiteSettings;
};

function apiUrl(path: string) {
  return `https://api.github.com/repos/${REPO}/${path}`;
}

async function githubRequest(path: string, opts: RequestInit = {}) {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "sumbul-garden",
  };

  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

  const res = await fetch(apiUrl(path), { ...opts, headers });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`GitHub API error ${res.status} ${txt}`);
  }

  return res.json();
}

export async function readDashboard(): Promise<DashboardData> {
  // Try to fetch the JSON file from the repo
  try {
    const content = await githubRequest(`contents/${DATA_PATH}`);
    const decoded = Buffer.from(content.content || "", content.encoding || "base64").toString();
    const parsed = JSON.parse(decoded) as DashboardData;
    return parsed;
  } catch (err) {
    // Fallback to built-in demo data
    return {
      products: fallbackProducts,
      categories: fallbackCategories,
      banners: fallbackBanners,
      settings: fallbackSiteSettings,
    };
  }
}

export async function writeDashboard(data: DashboardData, message = "Update dashboard via admin") {
  if (!REPO || !TOKEN) {
    throw new Error("GitHub repository or token not configured. Set GITHUB_REPOSITORY and GITHUB_PAT.");
  }

  // Get existing file to obtain sha (if exists)
  let sha: string | undefined;
  try {
    const info = await githubRequest(`contents/${DATA_PATH}`);
    sha = info.sha;
  } catch (err) {
    sha = undefined;
  }

  const content = Buffer.from(JSON.stringify(data, null, 2)).toString("base64");

  const body = {
    message,
    content,
    sha,
  };

  await githubRequest(`contents/${DATA_PATH}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export function makeId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
