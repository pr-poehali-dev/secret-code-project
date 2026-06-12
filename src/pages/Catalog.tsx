import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { useSeo } from "@/hooks/useSeo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"
import Icon from "@/components/ui/icon"
import { childCategories, adultCategories } from "@/data/catalogData"

export default function Catalog() {
  const [searchParams] = useSearchParams()
  const initialTab = searchParams.get("tab") === "adult" ? "adult" : "child"
  const [tab, setTab] = useState<"child" | "adult">(initialTab)

  useSeo({
    title: "Каталог реабилитационного оборудования — ОртоЦентр",
    description: "Каталог реабилитационного оборудования: детские и взрослые коляски, вертикализаторы, ходунки, электроскутеры, медицинские кровати. Мытищи.",
    canonical: "https://ortocentr.ru/catalog",
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const categories = tab === "child" ? childCategories : adultCategories

  return (
    <main>
      <LpNavbar1 />

      <section className="bg-muted py-12 md:py-16 min-h-screen">
        <div className="container mx-auto px-6 flex flex-col gap-8 max-w-2xl">

          {/* Хлебные крошки */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Навигация">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Icon name="Home" size={14} />Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground">Каталог</span>
          </nav>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Каталог</h1>
            <p className="text-muted-foreground text-base">Реабилитационное оборудование для детей и взрослых</p>
          </div>

          {/* Переключатель вкладок */}
          <div className="bg-background rounded-2xl p-1.5 flex gap-1 shadow-sm">
            <button
              onClick={() => setTab("child")}
              className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === "child"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Детская реабилитация
            </button>
            <button
              onClick={() => setTab("adult")}
              className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === "adult"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Взрослая реабилитация
            </button>
          </div>

          {/* Список категорий */}
          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/catalog/${cat.slug}`}
                className="bg-background border border-border rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                  <Icon name={cat.icon} size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="text-foreground text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
                    {cat.title}
                  </span>
                  <span className="text-muted-foreground text-xs leading-relaxed line-clamp-1">
                    {cat.description}
                  </span>
                </div>
                <Icon name="ChevronRight" size={16} className="text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* CTA блок */}
          <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3">
            <p className="font-semibold text-foreground">Не нашли нужное оборудование?</p>
            <p className="text-sm text-muted-foreground">
              Звоните — поможем подобрать и при необходимости изготовим индивидуальное изделие.
            </p>
            <a
              href="tel:+79055021502"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-fit"
            >
              <Icon name="Phone" size={16} />
              +7 905 502-15-02
            </a>
          </div>

        </div>
      </section>

      <Footer2 />
    </main>
  )
}