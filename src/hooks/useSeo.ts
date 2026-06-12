import { useEffect } from "react"

interface SeoProps {
  title: string
  description: string
  canonical?: string
  keywords?: string
  jsonLd?: object
}

export function useSeo({ title, description, canonical, keywords, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement("meta")
      metaDesc.name = "description"
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = description

    if (keywords) {
      let metaKeywords = document.querySelector<HTMLMetaElement>('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta")
        metaKeywords.name = "keywords"
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.content = keywords
    }

    let metaOgTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (!metaOgTitle) {
      metaOgTitle = document.createElement("meta")
      metaOgTitle.setAttribute("property", "og:title")
      document.head.appendChild(metaOgTitle)
    }
    metaOgTitle.content = title

    let metaOgDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    if (!metaOgDesc) {
      metaOgDesc = document.createElement("meta")
      metaOgDesc.setAttribute("property", "og:description")
      document.head.appendChild(metaOgDesc)
    }
    metaOgDesc.content = description

    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement("link")
        link.rel = "canonical"
        document.head.appendChild(link)
      }
      link.href = canonical
    }

    const prevJsonLd = document.getElementById("page-jsonld")
    if (prevJsonLd) prevJsonLd.remove()
    if (jsonLd) {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.id = "page-jsonld"
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, canonical, keywords, jsonLd])
}