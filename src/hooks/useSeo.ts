import { useEffect } from "react"

export const SITE_URL = "https://orto.center"

interface SeoProps {
  title: string
  description: string
  canonical?: string
  keywords?: string
  jsonLd?: object
  noindex?: boolean
  image?: string
  type?: "website" | "article"
}

function setMeta(attr: "name" | "property", key: string, value: string | null) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (value === null) {
    el?.remove()
    return
  }
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = value
}

function normalizeCanonical(url: string): string {
  const u = new URL(url, SITE_URL)
  let path = u.pathname.replace(/\/{2,}/g, "/").toLowerCase()
  if (path.length > 1) path = path.replace(/\/+$/, "")
  return `${SITE_URL}${path}`
}

export function useSeo({ title, description, canonical, keywords, jsonLd, noindex, image, type = "website" }: SeoProps) {
  useEffect(() => {
    document.title = title

    setMeta("name", "description", description)
    setMeta("name", "keywords", keywords ?? null)
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow")
    setMeta("property", "og:title", title)
    setMeta("property", "og:description", description)
    setMeta("property", "og:type", type)
    setMeta("property", "og:site_name", "ОртоЦентр")
    setMeta("property", "og:locale", "ru_RU")
    if (image) {
      setMeta("property", "og:image", image)
      setMeta("name", "twitter:image", image)
    }

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical && !noindex) {
      const href = normalizeCanonical(canonical)
      if (!link) {
        link = document.createElement("link")
        link.rel = "canonical"
        document.head.appendChild(link)
      }
      link.href = href
      setMeta("property", "og:url", href)
    } else {
      link?.remove()
      setMeta("property", "og:url", null)
    }

    document.getElementById("page-jsonld")?.remove()
    if (jsonLd) {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.id = "page-jsonld"
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, canonical, keywords, jsonLd, noindex, image, type])
}
