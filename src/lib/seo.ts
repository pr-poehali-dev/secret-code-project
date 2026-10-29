export const SITE_URL = "https://orto.center"

export interface SeoHeadProps {
  title: string
  description: string
  canonical?: string
  keywords?: string
  jsonLd?: object
  noindex?: boolean
  image?: string
  type?: "website" | "article"
}

function normalizeCanonical(url: string): string {
  const u = new URL(url, SITE_URL)
  let path = u.pathname.replace(/\/{2,}/g, "/").toLowerCase()
  if (path.length > 1) path = path.replace(/\/+$/, "")
  return `${SITE_URL}${path}`
}

export function seoHead({ title, description, canonical, keywords, jsonLd, noindex, image, type = "website" }: SeoHeadProps) {
  const href = canonical && !noindex ? normalizeCanonical(canonical) : undefined
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
  ]
  if (keywords) meta.push({ name: "keywords", content: keywords })
  if (image) {
    meta.push({ property: "og:image", content: image })
    meta.push({ name: "twitter:image", content: image })
  }
  if (href) meta.push({ property: "og:url", content: href })
  return {
    meta,
    links: href ? [{ rel: "canonical", href }] : [],
    scripts: jsonLd ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] : [],
  }
}
