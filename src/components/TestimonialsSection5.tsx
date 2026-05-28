import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    quote: "Нашему сыну поставили ДЦП в год. Долго искали, где сделают нормальные аппараты. В ОртоЦентре всё сделали с душой — точно по меркам, удобно, ребёнок не капризничает. Огромное спасибо!",
    author: "Марина Соколова",
    role: "Мама пациента, г. Мытищи",
    image: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/f5443e6b-e8ab-4e5e-9d2a-b567e0ff31f2.jpg",
  },
  {
    quote: "Дочка с рождения с нарушением ОПДА. Заказывали тутор на голеностоп — сделали быстро, подогнали идеально. Уже второй комплект берём по мере роста. Рекомендую всем родителям!",
    author: "Андрей Павлов",
    role: "Папа пациентки, г. Королёв",
    image: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/711474d3-c68c-4a9a-82f9-15f9a080af53.jpg",
  },
  {
    quote: "Обратились после рекомендации невролога. Специалисты очень внимательные, объяснили всё подробно. Аппарат на всю ногу изготовили аккуратно, ребёнок носит без проблем. Спасибо за работу!",
    author: "Ольга Новикова",
    role: "Мама пациента, г. Пушкино",
    image: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/5fd68071-d230-4651-82c4-4a5825ae3c71.jpg",
  },
]

export function TestimonialsSection5() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted" aria-labelledby="testimonial-title">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Отзывы</p>
            <h2 id="testimonial-title" className="text-3xl md:text-4xl font-bold text-foreground">
              Нам доверяют семьи
            </h2>
            <p className="text-base text-muted-foreground">
              Отзывы родителей детей с ДЦП и нарушениями опорно-двигательного аппарата
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <Card key={index} className="p-6 flex flex-col gap-6 bg-card">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed flex-1">
                  «{t.quote}»
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <Avatar className="h-12 w-12 shrink-0">
                    <AvatarImage src={t.image} alt={t.author} className="object-cover" />
                    <AvatarFallback className="text-sm font-semibold bg-primary/10 text-primary">
                      {t.author.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-foreground text-sm font-semibold">{t.author}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
