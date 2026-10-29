import { useEffect } from "react"
import { Link } from "@/lib/router-compat"
import Icon from "@/components/ui/icon"

const SITE_URL = "https://orto.center"

export interface Crumb {
  label: string
  to?: string
}

interface BreadcrumbsProps {
  items: Crumb[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ label: "Главная", to: "/" }, ...items]
  const key = JSON.stringify(trail)

  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        ...(c.to ? { item: `${SITE_URL}${c.to}` } : {}),
      })),
    }
    document.getElementById("breadcrumbs-jsonld")?.remove()
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.id = "breadcrumbs-jsonld"
    script.text = JSON.stringify(data)
    document.head.appendChild(script)
    return () => script.remove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return (
    <nav aria-label="Хлебные крошки">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
        {trail.map((c, i) => {
          const isLast = i === trail.length - 1
          return (
            <li key={i} className="flex items-center gap-2 min-w-0">
              {i > 0 && <Icon name="ChevronRight" size={14} className="shrink-0" />}
              {isLast || !c.to ? (
                <span className="text-foreground truncate max-w-[220px] sm:max-w-[360px]" aria-current="page">
                  {c.label}
                </span>
              ) : (
                <Link to={c.to} className="flex items-center gap-1 hover:text-foreground transition-colors">
                  {i === 0 && <Icon name="Home" size={14} />}
                  {c.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
