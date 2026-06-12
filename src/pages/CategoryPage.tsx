import { useParams, Link, Navigate } from "react-router-dom"
import { useEffect } from "react"
import { useSeo } from "@/hooks/useSeo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"
import Icon from "@/components/ui/icon"
import { getCategoryBySlug } from "@/data/catalogData"

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = getCategoryBySlug(slug ?? "")

  useSeo({
    title: category ? `${category.title} — ОртоЦентр` : "Категория — ОртоЦентр",
    description: category?.description ?? "",
    canonical: `https://ortocentr.ru/catalog/${slug}`,
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  if (!category) return <Navigate to="/catalog" replace />

  return (
    <main>
      <LpNavbar1 />

      <section className="bg-muted min-h-screen py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-2xl flex flex-col gap-8">

          {/* Хлебные крошки */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Навигация">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Icon name="Home" size={14} />Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <Link to="/catalog" className="hover:text-foreground transition-colors">Каталог</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground">{category.title}</span>
          </nav>

          {/* Заголовок */}
          <div className="flex flex-col gap-4">
            <Link
              to={`/catalog?tab=${category.tab}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit hover:bg-primary/20 transition-colors"
            >
              {category.tab === "child" ? "Детская реабилитация" : "Взрослая реабилитация"}
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 shrink-0">
                <Icon name={category.icon} size={28} className="text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{category.title}</h1>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">{category.description}</p>
          </div>

          {/* Товары */}
          <div className="flex flex-col gap-4">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="bg-background rounded-2xl border border-border px-6 py-5 flex flex-col gap-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-foreground font-semibold text-base leading-snug">{product.name}</h2>
                  {product.price && (
                    <span className="text-primary font-bold text-base shrink-0">{product.price}</span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
                <div className="pt-1">
                  <a
                    href="tel:+79055021502"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <Icon name="Phone" size={14} />
                    Узнать наличие и цену
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-foreground">Нужна консультация по подбору?</p>
              <p className="text-sm text-muted-foreground">
                Поможем выбрать подходящую модель с учётом диагноза и индивидуальных параметров.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+79055021502"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <Icon name="Phone" size={16} />
                +7 905 502-15-02
              </a>
              <Link
                to="/catalog"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-semibold text-sm px-6 py-3 rounded-full hover:border-primary/40 transition-colors"
              >
                <Icon name="ArrowLeft" size={16} />
                Назад в каталог
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer2 />
    </main>
  )
}