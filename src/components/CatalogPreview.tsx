import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const childCategories = [
  {
    title: "Детские инвалидные коляски",
    icon: "👶",
    href: "/catalog?tab=child&category=kolyaski",
  },
  {
    title: "Коляски для детей с ДЦП",
    icon: "♿",
    href: "/catalog?tab=child&category=kolyaski-dtsp",
  },
  {
    title: "Вертикализаторы для детей с ДЦП",
    icon: "🦽",
    href: "/catalog?tab=child&category=vertikalizatory",
  },
  {
    title: "Ходунки",
    icon: "🚶",
    href: "/catalog?tab=child&category=hodunki",
  },
  {
    title: "Реабилитационные велосипеды",
    icon: "🚲",
    href: "/catalog?tab=child&category=velosipedy",
  },
  {
    title: "Автомобильные кресла для детей с ДЦП",
    icon: "🚗",
    href: "/catalog?tab=child&category=avtokresla",
  },
  {
    title: "Приспособления для купания инвалидов",
    icon: "🛁",
    href: "/catalog?tab=child&category=kupanie",
  },
  {
    title: "Реабилитационные кресла, опоры для сидения, позиционеры",
    icon: "🪑",
    href: "/catalog?tab=child&category=kresla",
  },
]

const adultCategories = [
  {
    title: "Кресла-коляски с ручным приводом",
    icon: "♿",
    href: "/catalog?tab=adult&category=ruchnye",
  },
  {
    title: "Кресла-коляски с электроприводом",
    icon: "⚡",
    href: "/catalog?tab=adult&category=elektro",
  },
  {
    title: "Приставки для кресел-колясок",
    icon: "🔧",
    href: "/catalog?tab=adult&category=pristavki",
  },
  {
    title: "Электрические скутеры",
    icon: "🛵",
    href: "/catalog?tab=adult&category=skutery",
  },
  {
    title: "Вертикализаторы",
    icon: "🦽",
    href: "/catalog?tab=adult&category=vertikalizatory",
  },
  {
    title: "Ходунки",
    icon: "🚶",
    href: "/catalog?tab=adult&category=hodunki",
  },
  {
    title: "Медицинские кровати",
    icon: "🛏️",
    href: "/catalog?tab=adult&category=krovati",
  },
  {
    title: "Подъемники для инвалидов",
    icon: "🏗️",
    href: "/catalog?tab=adult&category=podyomniki",
  },
]

const PREVIEW_COUNT = 6

export function CatalogPreview() {
  const [tab, setTab] = useState<"child" | "adult">("child")
  const categories = tab === "child" ? childCategories : adultCategories

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-10">
        <div className="flex flex-col gap-4 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Интернет-магазин</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Каталог реабилитационного оборудования</h2>
          <p className="text-base text-muted-foreground">
            Широкий выбор техники для детской и взрослой реабилитации — коляски, вертикализаторы, ходунки и многое другое.
          </p>
        </div>

        {/* Переключатель вкладок */}
        <div className="flex justify-center">
          <div className="bg-muted rounded-2xl p-1.5 flex gap-1 w-full max-w-sm">
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
        </div>

        {/* Список категорий */}
        <div className="flex flex-col gap-3 max-w-lg mx-auto w-full">
          {categories.slice(0, PREVIEW_COUNT).map((cat, i) => (
            <Link
              key={i}
              to={cat.href}
              className="bg-card border border-border rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 hover:shadow-sm transition-all duration-200 group"
            >
              <span className="text-2xl shrink-0">{cat.icon}</span>
              <span className="text-foreground text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                {cat.title}
              </span>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground ml-auto shrink-0 group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>

        {/* Кнопка весь каталог */}
        <div className="flex justify-center">
          <Link to="/catalog">
            <Button size="lg" className="px-10 rounded-full">
              Весь каталог
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
