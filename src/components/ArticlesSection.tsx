import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"
import { articles } from "@/data/articlesData"

export function ArticlesSection() {
  const latest = articles.slice(0, 2)

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-3xl flex flex-col gap-8">

        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Полезные статьи</h2>
            <p className="text-muted-foreground text-base">Материалы о подборе реабилитационного оборудования</p>
          </div>
          <Link
            to="/articles"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all shrink-0"
          >
            Все статьи
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {latest.map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="group bg-muted border border-border rounded-2xl overflow-hidden flex flex-col hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <div className="h-36 overflow-hidden">
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
                <h3 className="text-foreground font-semibold text-base leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-auto pt-2">
                  Читать
                  <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/articles"
          className="sm:hidden inline-flex items-center justify-center gap-1 text-sm font-medium text-primary"
        >
          Все статьи
          <Icon name="ArrowRight" size={16} />
        </Link>

      </div>
    </section>
  )
}