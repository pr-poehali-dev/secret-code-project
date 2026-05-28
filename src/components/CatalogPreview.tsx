import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export function CatalogPreview() {
  return (
    <section className="bg-background py-8 md:py-10">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          to="/catalog"
          className="flex items-center gap-5 bg-muted rounded-2xl px-6 py-5 hover:bg-primary/5 border border-border hover:border-primary/30 transition-all duration-200 group"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
            <Icon name="ShoppingCart" size={22} className="text-primary" />
          </div>
          <div className="flex flex-col gap-0.5 flex-1 min-w-0">
            <span className="text-foreground font-semibold text-base group-hover:text-primary transition-colors">
              Каталог реабилитационного оборудования
            </span>
            <span className="text-muted-foreground text-sm">
              Коляски, вертикализаторы, ходунки и многое другое
            </span>
          </div>
          <Icon name="ChevronRight" size={20} className="text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
        </Link>
      </div>
    </section>
  )
}
