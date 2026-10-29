import { createFileRoute } from "@tanstack/react-router"
import { articles, toIsoDate } from "@/data/articlesData"
import { catalogCategories } from "@/data/catalogData"
import { SITE_URL } from "@/lib/seo"

type Entry = { loc: string; lastmod: string; changefreq: string; priority: string }

function buildSitemap(): string {
  const now = new Date().toISOString().slice(0, 10)
  const list = articles.map((a) => ({ slug: a.slug, lastmod: toIsoDate(a.date) ?? now }))
  const latestArticle = list.map((a) => a.lastmod).sort().pop() ?? now

  const entries: Entry[] = [
    { loc: "/", lastmod: now, changefreq: "weekly", priority: "1.0" },
    { loc: "/catalog", lastmod: now, changefreq: "weekly", priority: "0.9" },
    { loc: "/tsr-sertifikat", lastmod: now, changefreq: "monthly", priority: "0.8" },
    { loc: "/articles", lastmod: latestArticle, changefreq: "weekly", priority: "0.8" },
    ...catalogCategories.map((c) => ({ loc: `/catalog/${c.slug}`, lastmod: now, changefreq: "monthly", priority: "0.8" })),
    ...list.map((a) => ({ loc: `/articles/${a.slug}`, lastmod: a.lastmod, changefreq: "monthly", priority: "0.7" })),
    ...["/privacy", "/terms", "/cookies"].map((loc) => ({ loc, lastmod: now, changefreq: "yearly", priority: "0.2" })),
  ]

  const urls = entries
    .map((e) => `  <url>\n    <loc>${SITE_URL}${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`)
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        }),
    },
  },
})
