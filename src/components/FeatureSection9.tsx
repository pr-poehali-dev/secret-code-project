import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Ruler",
    title: "Индивидуальные мерки",
    description: "Каждое изделие создаётся по точным замерам вашей стопы или тела — никаких стандартных размеров.",
  },
  {
    icon: "HeartPulse",
    title: "Медицинский подход",
    description: "Работаем совместно с ортопедами и подологами для правильной коррекции и реабилитации.",
  },
  {
    icon: "ShieldCheck",
    title: "Качественные материалы",
    description: "Используем только сертифицированные материалы: EVA, кожа, термопласты и медицинский силикон.",
  },
  {
    icon: "Clock",
    title: "Быстрое изготовление",
    description: "Срок изготовления большинства изделий — от 3 до 7 рабочих дней после снятия мерок.",
  },
]

export function FeatureSection9() {
  return (
    <section id="features" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Наши преимущества</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Почему выбирают ОртоЦентр?</h2>
          <p className="text-base text-muted-foreground">
            Мы создаём изделия, которые действительно помогают — с заботой о вашем здоровье и комфорте.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-5 items-center text-center">
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Icon name={feature.icon} size={20} className="text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}