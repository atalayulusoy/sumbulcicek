import { Buffer } from "buffer";
import fs from "fs/promises";
import path from "path";

import { fallbackBanners, fallbackCategories, fallbackProducts, fallbackSiteSettings } from "./data/fallback-data";
import type { Banner, Category, Product, SiteSettings } from "./types";

export type DashboardData = {
  products: Product[];
  categories: Category[];
  banners: Banner[];
  settings: SiteSettings;
};

const VERCEL_REPOSITORY =
  process.env.VERCEL_GIT_REPO_OWNER && process.env.VERCEL_GIT_REPO_SLUG
    ? `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
    : "";
const REPO = process.env.GITHUB_REPOSITORY?.trim() || VERCEL_REPOSITORY; // owner/repo
const TOKEN = process.env.GITHUB_PAT?.trim() || process.env.GITHUB_TOKEN?.trim() || "";
const DATA_PATH = "data/dashboard.json";
const CAN_WRITE_LOCAL_DASHBOARD = !process.env.VERCEL && process.env.NODE_ENV !== "production";

// Vercel üzerinde /var/task çoğu zaman read-only olur.
// Bu yüzden local fallback'a yazmaya çalışırsak EROFS alabiliyoruz.
// En güvenlisi: GitHub entegrasyonu aktifse onu denemek; başarısız olursa local yazmayı dene ama hatayı yut.
const USE_GITHUB_STORE = Boolean(REPO && TOKEN);

export const isGithubStoreConfigured = USE_GITHUB_STORE;

function apiUrl(p: string) {
  return `https://api.github.com/repos/${REPO}/${p}`;
}

async function githubRequest(p: string, opts: RequestInit = {}) {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "sumbul-garden",
  };

  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

  const res = await fetch(apiUrl(p), { cache: "no-store", ...opts, headers });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`GitHub API error ${res.status} ${txt}`);
  }

  return res.json();
}

function getLocalDashboardPath() {
  return path.resolve(process.cwd(), DATA_PATH);
}

async function readLocalDashboard(): Promise<DashboardData | null> {
  const filePath = getLocalDashboardPath();

  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw) as DashboardData;
  } catch {
    return null;
  }
}

async function writeLocalDashboard(data: DashboardData) {
  const filePath = getLocalDashboardPath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

function fallbackData(): DashboardData {
  return {
    products: fallbackProducts,
    categories: fallbackCategories,
    banners: fallbackBanners,
    settings: fallbackSiteSettings,
  };
}

export async function readDashboard(): Promise<DashboardData> {
  if (USE_GITHUB_STORE) {
    try {
      const content = await githubRequest(`contents/${DATA_PATH}`);
      const decoded = Buffer.from(content.content ?? "", content.encoding ?? "base64").toString("utf-8");
      return JSON.parse(decoded) as DashboardData;
    } catch (error) {
      console.warn("[github-store] GitHub read failed, falling back to local file or built-in data", error);
    }
  }

  const localData = await readLocalDashboard();
  if (localData) return localData;

  return fallbackData();
}

// endpoint'lerin 500'e düşmemesi için kesin olarak void döndürmüyor gibi davran.
export async function writeDashboard(data: DashboardData, message = "Update dashboard via admin"): Promise<boolean> {
  if (USE_GITHUB_STORE) {
    try {
      let sha: string | undefined;
      try {
        const info = await githubRequest(`contents/${DATA_PATH}`);
        sha = info.sha;
      } catch {
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
      return true;
    } catch (error) {
      console.warn("[github-store] GitHub write failed", error);
      if (!CAN_WRITE_LOCAL_DASHBOARD) {
        return false;
      }
    }
  }

  if (!CAN_WRITE_LOCAL_DASHBOARD) {
    console.warn("[github-store] No writable production store configured");
    return false;
  }

  try {
    await writeLocalDashboard(data);
    return true;
  } catch (error) {
    // read-only FS / permission errors vs.
    console.warn("[github-store] Local dashboard write failed (ignored)", error);
    return false;
  }
}

export function makeId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

