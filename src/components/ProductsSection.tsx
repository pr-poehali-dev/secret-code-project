import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const products = [
  {
    image: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/17b83a89-71cd-4b99-a4a1-32da10700d94.jpg",
    badge: "Голеностопный сустав",
    title: "Тутор на голеностоп",
    description:
      "Жёсткое устройство, фиксирующее голеностопный сустав в заданном положении. Обеспечивает стабильность, предупреждает деформации и облегчает реабилитацию.",
    indications: [
      "Травмы голеностопного сустава",
      "Переломы лодыжки, разрывы связок",
      "ДЦП, неврологические заболевания",
      "Параличи и деформации стопы",
    ],
    methods: [
      { icon: "Ruler", text: "По замерам из низкотемпературного пластика" },
      { icon: "Layers", text: "По гипсовому слепку" },
      { icon: "ScanLine", text: "По 3D-сканированию" },
    ],
    materials: "Термопластики, текстиль с металлическими и пластиковыми вставками",
  },
  {
    image: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/584a8c45-419c-424c-afb2-43493d796477.jpg",
    badge: "Вся нога",
    title: "Аппарат на всю ногу",
    description:
      "Конструкция с шарнирами, задающая ноге движение по заданной траектории. Фиксирует, корректирует положение и разгружает всю ногу от бедра до стопы.",
    indications: [
      "ДЦП, параличи и парезы мышц",
      "Низкий мышечный тонус, дистрофия",
      "Последствия инсульта (ОНМК)",
      "Травмы головного и спинного мозга",
    ],
    methods: [
      { icon: "Stethoscope", text: "Консультация врача-ортопеда" },
      { icon: "ScanLine", text: "Гипсовый слепок или 3D-сканирование" },
      { icon: "Settings2", text: "Моделирование и изготовление гильз" },
      { icon: "CheckCircle", text: "Примерка и корректировка" },
    ],
    materials: "Углеродное волокно, термопласты, нержавеющая сталь для шарниров",
  },
]

export function ProductsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Наши изделия</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Туторы и аппараты на заказ</h2>
          <p className="text-base text-muted-foreground">
            Изготавливаем индивидуально с учётом анатомии пациента и медицинских показаний. Каждое изделие проходит примерку и корректировку.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-10 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 w-full">
                <div className="overflow-hidden rounded-xl border bg-muted shadow-sm aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <Badge variant="secondary" className="w-fit">{product.badge}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground text-base">{product.description}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-foreground">Показания:</p>
                  <ul className="flex flex-col gap-2">
                    {product.indications.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-foreground">Этапы изготовления:</p>
                  <ul className="flex flex-col gap-2">
                    {product.methods.map((m, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name={m.icon} size={15} className="text-primary shrink-0" />
                        {m.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-muted-foreground border-l-2 border-primary pl-3">
                  <span className="font-medium text-foreground">Материалы:</span> {product.materials}
                </p>

                <a href="tel:+79055021502">
                  <Button>Записаться на консультацию</Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-muted rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="font-semibold text-foreground">Гипоаллергенные материалы · Регулируемые крепления · Обучение ношению</p>
            <p className="text-sm text-muted-foreground">Все изделия изготавливаются по индивидуальным параметрам. Срок — от 20 дней.</p>
          </div>
          <a href="tel:+79055021502" className="shrink-0">
            <Button variant="outline">Позвонить нам</Button>
          </a>
        </div>
      </div>
    </section>
  )
}
