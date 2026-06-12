import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export function TsrArticleBanner() {
  return (
    <section className="bg-background py-6 md:py-8">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          to="/tsr-sertifikat"
          className="group relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-primary/8 border border-primary/20 rounded-2xl px-6 py-5 hover:border-primary/40 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 shrink-0">
            <Icon name="BookOpen" size={24} className="text-primary" />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary w-fit">
              <Icon name="Sparkles" size={13} />
              Подробное руководство
            </span>
            <span className="text-foreground font-semibold text-base leading-snug group-hover:text-primary transition-colors">
              Сертификат ТСР: как оформить и оплатить реабилитацию средствами государства
            </span>
            <span className="text-muted-foreground text-sm">
              Кому положен, как оформить через СФР и Госуслуги, как оплатить картой «Мир» — простыми словами.
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary shrink-0 mt-1 sm:mt-0">
            Читать
            <Icon name="ArrowRight" size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </span>
        </Link>
      </div>
    </section>
  )
}
