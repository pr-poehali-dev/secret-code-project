import { useEffect } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { useSeo } from "@/hooks/useSeo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"
import Icon from "@/components/ui/icon"
import { getArticleBySlug, articles } from "@/data/articlesData"

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug ?? "")

  useSeo({
    title: article ? `${article.title} — ОртоЦентр` : "Статья — ОртоЦентр",
    description: article?.excerpt ?? "",
    canonical: `https://ortocentr.ru/articles/${slug}`,
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  if (!article) return <Navigate to="/articles" replace />

  const other = articles.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <main>
      <LpNavbar1 />

      <section className="bg-muted py-12 md:py-16 min-h-screen">
        <div className="container mx-auto px-6 flex flex-col gap-8 max-w-2xl">

          <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap" aria-label="Навигация">
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <Link to="/articles" className="hover:text-foreground transition-colors">Статьи</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground truncate max-w-[200px]">{article.title}</span>
          </nav>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Icon name="Calendar" size={12} />{article.date}</span>
              <span className="flex items-center gap-1"><Icon name="Clock" size={12} />{article.readTime}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{article.title}</h1>
          </div>

          <div className="h-52 md:h-64 rounded-2xl overflow-hidden">
            <img src={article.cover} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <article className="bg-background border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4">
            {article.content.map((block, i) => {
              if (block.type === "heading") {
                return <h2 key={i} className="text-lg font-bold text-foreground mt-2">{block.text}</h2>
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="flex flex-col gap-2">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-muted-foreground text-[15px] leading-relaxed">
                        <Icon name="Check" size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              return <p key={i} className="text-muted-foreground text-[15px] leading-relaxed">{block.text}</p>
            })}
          </article>

          <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3">
            <p className="font-semibold text-foreground">Нужна консультация по подбору?</p>
            <p className="text-sm text-muted-foreground">Поможем выбрать оборудование с учётом диагноза и индивидуальных параметров.</p>
            <a
              href="tel:+79055021502"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-fit"
            >
              <Icon name="Phone" size={16} />
              +7 905 502-15-02
            </a>
          </div>

          {other.length > 0 && (
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-foreground">Читайте также</p>
              <div className="flex flex-col gap-3">
                {other.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/articles/${a.slug}`}
                    className="group bg-background border border-border rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon name={a.icon} size={20} className="text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-semibold leading-snug flex-1 group-hover:text-primary transition-colors">{a.title}</span>
                    <Icon name="ChevronRight" size={16} className="text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer2 />
    </main>
  )
}