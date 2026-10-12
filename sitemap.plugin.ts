import fs from "fs";
import path from "path";
import type { Plugin } from "vite";

const SITE_URL = "https://orto.center";

const MONTHS: Record<string, string> = {
  "января": "01", "февраля": "02", "марта": "03", "апреля": "04", "мая": "05", "июня": "06",
  "июля": "07", "августа": "08", "сентября": "09", "октября": "10", "ноября": "11", "декабря": "12",
};

type Entry = { loc: string; lastmod: string; changefreq: string; priority: string };

const today = () => new Date().toISOString().slice(0, 10);

function parseRuDate(value: string): string | null {
  const m = value.trim().match(/^(\d{1,2})\s+([а-яё]+)\s+(\d{4})$/i);
  if (!m || !MONTHS[m[2].toLowerCase()]) return null;
  return `${m[3]}-${MONTHS[m[2].toLowerCase()]}-${m[1].padStart(2, "0")}`;
}

function readFile(root: string, file: string): string {
  const full = path.resolve(root, file);
  return fs.existsSync(full) ? fs.readFileSync(full, "utf-8") : "";
}

function collectArticles(root: string): { slug: string; lastmod: string }[] {
  const src = readFile(root, "src/data/articlesData.ts");
  const result: { slug: string; lastmod: string }[] = [];
  const re = /slug:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    result.push({ slug: m[1], lastmod: parseRuDate(m[2]) ?? today() });
  }
  return result;
}

function collectCategories(root: string): string[] {
  const src = readFile(root, "src/data/catalogData.ts");
  return [...src.matchAll(/^\s+slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
}

function buildSitemap(root: string): string {
  const now = today();
  const articles = collectArticles(root);
  const latestArticle = articles.map((a) => a.lastmod).sort().pop() ?? now;

  const entries: Entry[] = [
    { loc: "/", lastmod: now, changefreq: "weekly", priority: "1.0" },
    { loc: "/catalog", lastmod: now, changefreq: "weekly", priority: "0.9" },
    { loc: "/tsr-sertifikat", lastmod: now, changefreq: "monthly", priority: "0.8" },
    { loc: "/articles", lastmod: latestArticle, changefreq: "weekly", priority: "0.8" },
    ...collectCategories(root).map((slug) => ({
      loc: `/catalog/${slug}`, lastmod: now, changefreq: "monthly", priority: "0.8",
    })),
    ...articles.map((a) => ({
      loc: `/articles/${a.slug}`, lastmod: a.lastmod, changefreq: "monthly", priority: "0.7",
    })),
    ...["/privacy", "/terms", "/cookies"].map((loc) => ({
      loc, lastmod: now, changefreq: "yearly", priority: "0.2",
    })),
  ];

  const urls = entries
    .map((e) => `  <url>\n    <loc>${SITE_URL}${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export default function sitemapPlugin(): Plugin {
  let root = process.cwd();
  return {
    name: "auto-sitemap",
    configResolved(config) {
      root = config.root;
    },
    configureServer(server) {
      server.middlewares.use("/sitemap.xml", (_req, res) => {
        res.setHeader("Content-Type", "application/xml; charset=utf-8");
        res.end(buildSitemap(root));
      });
    },
    generateBundle() {
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: buildSitemap(root) });
    },
  };
}
