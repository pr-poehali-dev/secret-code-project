import { useEffect } from "react"
import { Link, useLocation } from "@/lib/router-compat"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"
import Icon from "@/components/ui/icon"
import { catalogCategories } from "@/data/catalogData"
import { articles } from "@/data/articlesData"

const popular = [
  { to: "/catalog", icon: "ShoppingCart", title: "Каталог", text: "Коляски, вертикализаторы, ходунки и другое оборудование" },
  { to: "/tsr-sertifikat", icon: "CreditCard", title: "Сертификат ТСР", text: "Как оформить и оплатить реабилитацию за счёт государства" },
  { to: "/articles", icon: "BookOpen", title: "Статьи", text: "Полезные материалы о подборе оборудования" },
]

function findSuggestion(pathname: string): { to: string; title: string } | null {
  const slug = pathname.split("/").filter(Boolean).pop()?.toLowerCase()
  if (!slug) return null
  const words = slug.split("-").filter((w) => w.length > 2)
  const score = (s: string) => words.filter((w) => s.includes(w)).length
  const candidates = [
    ...catalogCategories.map((c) => ({ to: `/catalog/${c.slug}`, title: c.title, s: score(c.slug) })),
    ...articles.map((a) => ({ to: `/articles/${a.slug}`, title: a.title, s: score(a.slug) })),
  ].sort((a, b) => b.s - a.s)
  return candidates[0] && candidates[0].s > 0 ? candidates[0] : null
}

export default function Page404() {
  const location = useLocation()
  const suggestion = findSuggestion(location.pathname)


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname])

  return (
    <main>
      <LpNavbar1 />

      <section className="bg-muted py-16 md:py-24 min-h-[70vh]">
        <div className="container mx-auto px-6 max-w-2xl flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="text-7xl md:text-8xl font-bold text-primary/80 leading-none" aria-hidden="true">404</span>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Страница не найдена</h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              Возможно, адрес набран с ошибкой или страница была перемещена. Воспользуйтесь ссылками ниже — нужная информация точно найдётся.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <Icon name="Home" size={16} />
                На главную
              </Link>
              <a
                href="tel:+79055021502"
                className="inline-flex items-center justify-center gap-2 border border-border bg-background text-foreground font-semibold text-sm px-6 py-3 rounded-full hover:border-primary/40 transition-colors"
              >
                <Icon name="Phone" size={16} />
                +7 905 502-15-02
              </a>
            </div>
          </div>

          {suggestion && (
            <Link
              to={suggestion.to}
              className="group bg-background border border-primary/30 rounded-2xl px-6 py-5 flex items-center gap-4 hover:border-primary/60 hover:shadow-md transition-all duration-200"
            >
              <Icon name="Lightbulb" size={22} className="text-primary shrink-0" />
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span className="text-muted-foreground text-xs">Возможно, вы искали</span>
                <span className="text-foreground font-semibold leading-snug group-hover:text-primary transition-colors">{suggestion.title}</span>
              </div>
              <Icon name="ChevronRight" size={18} className="text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
            </Link>
          )}

          <nav aria-label="Популярные разделы" className="flex flex-col gap-3">
            <h2 className="font-semibold text-foreground">Популярные разделы</h2>
            <ul className="flex flex-col gap-3">
              {popular.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="group bg-background border border-border rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
                      <Icon name={p.icon} size={20} className="text-primary" />
                    </div>
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                      <span className="text-foreground text-sm font-semibold group-hover:text-primary transition-colors">{p.title}</span>
                      <span className="text-muted-foreground text-xs">{p.text}</span>
                    </div>
                    <Icon name="ChevronRight" size={16} className="text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <Footer2 />
    </main>
  )
}