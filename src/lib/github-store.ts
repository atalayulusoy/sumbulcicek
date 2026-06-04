import { Buffer } from "buffer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import { fallbackBanners, fallbackCategories, fallbackProducts, fallbackSiteSettings } from "./data/fallback-data";
import type { Banner, Category, Product, SiteSettings } from "./types";

const REPO = process.env.GITHUB_REPOSITORY?.trim() || ""; // owner/repo
const TOKEN = process.env.GITHUB_PAT?.trim() || "";
const DATA_PATH = "data/dashboard.json";
const USE_GITHUB_STORE = Boolean(REPO && TOKEN);

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

async function getLocalDashboardPath() {
  const currentFile = fileURLToPath(import.meta.url);
  const repoRoot = path.resolve(path.dirname(currentFile), "..", "..");
  return path.join(repoRoot, DATA_PATH);
}

async function readLocalDashboard(): Promise<DashboardData | null> {
  const filePath = await getLocalDashboardPath();

  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw) as DashboardData;
  } catch {
    return null;
  }
}

async function writeLocalDashboard(data: DashboardData) {
  const filePath = await getLocalDashboardPath();
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
  if (localData) {
    return localData;
  }

  return fallbackData();
}

export async function writeDashboard(data: DashboardData, message = "Update dashboard via admin") {
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
      return;
    } catch (error) {
      console.warn("[github-store] GitHub write failed, falling back to local file", error);
    }
  }

  await writeLocalDashboard(data);
}

export function makeId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
