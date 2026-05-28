import { AspectRatio } from "@/components/ui/aspect-ratio"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "CalendarCheck",
    title: "Запись на консультацию",
    description: "Записываетесь на приём — наш специалист подберёт удобное время и ответит на все вопросы.",
  },
  {
    icon: "ScanLine",
    title: "Снятие мерок",
    description: "Проводим точные замеры стопы или нужного участка тела, изучаем особенности и жалобы.",
  },
  {
    icon: "Package",
    title: "Получение изделия",
    description: "Изготавливаем изделие в течение 3–7 дней и выдаём с инструкцией по применению.",
  },
]

export function FeatureSection3() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Как это работает</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Получить изделие просто!</h2>
            <p className="text-base text-muted-foreground">Всего 3 шага до идеального комфорта:</p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                  <Icon name={step.icon} size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl border bg-background shadow-xl">
            <AspectRatio ratio={1 / 1}>
              <img
                src="/placeholder.svg"
                alt="Процесс снятия мерок и изготовления ортопедических изделий"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  )
}
