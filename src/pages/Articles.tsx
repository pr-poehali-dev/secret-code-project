import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSeo } from "@/hooks/useSeo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"
import Icon from "@/components/ui/icon"
import { articles } from "@/data/articlesData"

export default function Articles() {
  useSeo({
    title: "Статьи о реабилитации — ОртоЦентр",
    description: "Полезные статьи о подборе реабилитационного оборудования: инвалидные коляски, реабилитация детей с ДЦП, вертикализаторы и ходунки.",
    canonical: "https://ortocentr.ru/articles",
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <main>
      <LpNavbar1 />

      <section className="bg-muted py-12 md:py-16 min-h-screen">
        <div className="container mx-auto px-6 flex flex-col gap-8 max-w-3xl">

          <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Навигация">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Icon name="Home" size={14} />Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground">Статьи</span>
          </nav>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Статьи</h1>
            <p className="text-muted-foreground text-base">Полезные материалы о подборе реабилитационного оборудования</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group bg-background border border-border rounded-2xl overflow-hidden flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={article.cover}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Icon name="Calendar" size={12} />{article.date}</span>
                    <span className="flex items-center gap-1"><Icon name="Clock" size={12} />{article.readTime}</span>
                  </div>
                  <h2 className="text-foreground font-semibold text-base leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-auto pt-2">
                    Читать
                    <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer2 />
    </main>
  )
}