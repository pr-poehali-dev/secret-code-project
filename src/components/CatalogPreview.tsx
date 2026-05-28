import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export function CatalogPreview() {
  return (
    <section className="bg-muted py-8 md:py-10">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          to="/catalog"
          className="flex items-center gap-5 bg-background rounded-2xl px-6 py-5 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 shrink-0">
            <Icon name="ShoppingCart" size={20} className="text-primary" />
          </div>
          <div className="flex flex-col gap-0.5 flex-1 min-w-0">
            <span className="text-foreground font-semibold text-base leading-tight group-hover:text-primary transition-colors">
              Каталог реабилитационного оборудования
            </span>
            <span className="text-muted-foreground text-sm">
              Коляски, вертикализаторы, ходунки, скутеры — детская и взрослая реабилитация
            </span>
          </div>
          <span className="shrink-0 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
            Смотреть
          </span>
          <Icon
            name="ChevronRight"
            size={20}
            className="text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200"
          />
        </Link>
      </div>
    </section>
  )
}