import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

const plans = [
  {
    name: "Базовый",
    description: "Для тех, кто хочет попробовать ортопедическую коррекцию.",
    features: [
      { name: "Консультация специалиста", tooltip: "Первичный осмотр и оценка состояния стопы" },
      { name: "Стандартные ортопедические стельки", tooltip: "Стельки из EVA по индивидуальным меркам" },
      { name: "Инструкция по применению", tooltip: "Рекомендации по носке и уходу за изделием" },
    ],
    price: 39000,
    variant: "secondary",
  },
  {
    name: "Комфорт",
    description: "Полноценное решение для коррекции и профилактики.",
    badge: "Популярный",
    features: [
      { name: "Углублённая диагностика стопы", tooltip: "Подометрия и плантоскопия для точных данных" },
      { name: "Стельки из кожи или термопласта", tooltip: "Материалы премиального качества с долгим сроком службы" },
      { name: "Коррекция под конкретный диагноз", tooltip: "Учитываем плоскостопие, вальгус, диабетическую стопу и др." },
      { name: "Повторная коррекция через 1 месяц", tooltip: "Бесплатная подстройка изделия после периода адаптации" },
    ],
    price: 79000,
    variant: "default",
  },
  {
    name: "Профи",
    description: "Для сложных случаев и комплексной реабилитации.",
    features: [
      { name: "Консультация ортопеда-травматолога", tooltip: "Осмотр у профильного врача с заключением" },
      { name: "Ортез или сложное изделие на заказ", tooltip: "Голеностопные ортезы, разгрузочные стельки, вкладыши" },
      { name: "3D-сканирование стопы", tooltip: "Точная цифровая модель для идеальной посадки" },
      { name: "Сопровождение на всём курсе", tooltip: "Поддержка и коррекция изделия в течение 6 месяцев" },
    ],
    price: 189000,
    variant: "secondary",
  },
]

export function PricingSection4() {
  return (
    <section id="pricing" className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="pricing-section-title-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-muted-foreground">Прайс</p>
            <h2 id="pricing-section-title-4" className="text-3xl md:text-4xl font-bold">
              Понятные цены без скрытых платежей
            </h2>
            <p className="text-base text-muted-foreground">Выберите пакет, который подходит вашей ситуации.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {plans.map((plan, index) => (
              <Card key={plan.name} className={`p-8 space-y-8 ${index === 2 ? "bg-foreground text-background" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold leading-7">{plan.name}</h3>
                    <p className={`text-sm leading-5 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-end gap-0.5">
                    <span className="text-4xl font-semibold leading-10">{plan.price.toLocaleString("ru-RU")}</span>
                    <span className={`text-base leading-6 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {" "}р
                    </span>
                  </div>

                  <a href="tel:+79055021502" className="w-full">
                    <Button variant={index === 2 ? "secondary" : "default"} className="w-full">
                      Заказать
                    </Button>
                  </a>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium">Что включено:</p>
                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 ${index === 2 ? "" : "text-primary"}`} />
                        <span className={`text-sm flex-1 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                          {feature.name}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info
                                className={`h-4 w-4 ${index === 2 ? "opacity-40" : "text-muted-foreground opacity-70"}`}
                              />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
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