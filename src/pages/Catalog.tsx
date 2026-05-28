import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useSeo } from "@/hooks/useSeo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"
import Icon from "@/components/ui/icon"

const childCategories = [
  {
    title: "Детские инвалидные коляски",
    description: "Специализированные коляски для детей с нарушениями опорно-двигательного аппарата",
    icon: "👶",
    slug: "kolyaski",
  },
  {
    title: "Коляски для детей с ДЦП",
    description: "Коляски с поддержкой осанки и специальным позиционированием для детей с ДЦП",
    icon: "♿",
    slug: "kolyaski-dtsp",
  },
  {
    title: "Вертикализаторы для детей с ДЦП",
    description: "Оборудование для вертикализации и тренировки опорной функции ног",
    icon: "🦽",
    slug: "vertikalizatory",
  },
  {
    title: "Ходунки",
    description: "Реабилитационные ходунки для детей с нарушениями ходьбы",
    icon: "🚶",
    slug: "hodunki",
  },
  {
    title: "Реабилитационные велосипеды",
    description: "Трёхколёсные и специализированные велосипеды для двигательной реабилитации",
    icon: "🚲",
    slug: "velosipedy",
  },
  {
    title: "Автомобильные кресла для детей с ДЦП",
    description: "Специальные автокресла с дополнительной поддержкой для детей с особыми потребностями",
    icon: "🚗",
    slug: "avtokresla",
  },
  {
    title: "Приспособления для купания инвалидов",
    description: "Стулья, носилки и поддержки для безопасного купания",
    icon: "🛁",
    slug: "kupanie",
  },
  {
    title: "Реабилитационные кресла, опоры для сидения, позиционеры",
    description: "Оборудование для правильного позиционирования и поддержки при сидении",
    icon: "🪑",
    slug: "kresla",
  },
]

const adultCategories = [
  {
    title: "Кресла-коляски с ручным приводом",
    description: "Активные и стандартные кресла-коляски для самостоятельного передвижения",
    icon: "♿",
    slug: "ruchnye",
  },
  {
    title: "Кресла-коляски с электроприводом",
    description: "Электрические коляски для людей с ограниченными возможностями рук",
    icon: "⚡",
    slug: "elektro",
  },
  {
    title: "Приставки для кресел-колясок",
    description: "Электроприставки и аксессуары для стандартных кресел-колясок",
    icon: "🔧",
    slug: "pristavki",
  },
  {
    title: "Электрические скутеры",
    description: "Трёхколёсные и четырёхколёсные электроскутеры для пожилых и людей с ограниченной подвижностью",
    icon: "🛵",
    slug: "skutery",
  },
  {
    title: "Вертикализаторы",
    description: "Медицинские вертикализаторы для взрослых пациентов",
    icon: "🦽",
    slug: "vertikalizatory",
  },
  {
    title: "Ходунки",
    description: "Опоры для ходьбы, роляторы и ходунки для взрослых",
    icon: "🚶",
    slug: "hodunki",
  },
  {
    title: "Медицинские кровати",
    description: "Функциональные кровати с регулировкой положения для ухода на дому",
    icon: "🛏️",
    slug: "krovati",
  },
  {
    title: "Подъемники для инвалидов",
    description: "Мобильные и стационарные подъёмники для перемещения маломобильных пациентов",
    icon: "🏗️",
    slug: "podyomniki",
  },
]

const SHOP_URL = "https://mdc-planet.ru"

export default function Catalog() {
  const [searchParams] = useSearchParams()
  const initialTab = searchParams.get("tab") === "adult" ? "adult" : "child"
  const [tab, setTab] = useState<"child" | "adult">(initialTab)

  useSeo({
    title: "Каталог реабилитационного оборудования — ОртоЦентр",
    description: "Каталог реабилитационного оборудования: коляски, вертикализаторы, ходунки, скутеры для детей и взрослых. Мытищи.",
    canonical: "https://ortocentr.ru/catalog",
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const categories = tab === "child" ? childCategories : adultCategories

  return (
    <main>
      <LpNavbar1 />

      <section className="bg-muted py-16 md:py-20 min-h-screen">
        <div className="container mx-auto px-6 flex flex-col gap-10 max-w-2xl">

          <div className="flex flex-col gap-3 text-center">
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
            {categories.map((cat, i) => (
              <a
                key={i}
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background border border-border rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-3xl shrink-0">{cat.icon}</span>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <span className="text-foreground text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
                    {cat.title}
                  </span>
                  <span className="text-muted-foreground text-xs leading-relaxed">
                    {cat.description}
                  </span>
                </div>
                <Icon name="ExternalLink" size={15} className="text-muted-foreground ml-auto shrink-0 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Кнопка в магазин */}
          <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Icon name="ShoppingCart" size={22} className="text-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-foreground">Весь ассортимент в интернет-магазине</p>
              <p className="text-sm text-muted-foreground">Более 500 товаров, онлайн-заказ, доставка по России</p>
            </div>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Перейти в магазин
              <Icon name="ExternalLink" size={16} className="text-primary-foreground" />
            </a>
          </div>

        </div>
      </section>

      <Footer2 />
    </main>
  )
}