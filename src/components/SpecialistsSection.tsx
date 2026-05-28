import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const specialists = [
  {
    name: "Тамбовцев Алексей Сергеевич",
    role: "Ортопед-протезист",
    shortBio: "Специалист по индивидуальному изготовлению ортоаппаратов и туторов для детей с ДЦП и нарушениями ОПДА.",
    photo: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/f242e20d-95a5-4aea-8b17-6b1cd938f79e.jpg",
    experience: "Более 10 лет опыта",
    education: [
      "Профессиональная переподготовка по специальности «Протезирование и ортезирование»",
      "Регулярное повышение квалификации в области детского ортезирования",
    ],
    about: [
      "Алексей Сергеевич специализируется на изготовлении индивидуальных ортопедических изделий для детей с ДЦП, косолапостью и нарушениями опорно-двигательного аппарата.",
      "Каждое изделие изготавливается вручную с учётом анатомии конкретного ребёнка — обеспечивая максимальный комфорт и терапевтический эффект.",
      "Работает в тесном взаимодействии с неврологами, ортопедами и реабилитологами для достижения наилучшего результата.",
    ],
    tags: ["Детское ортезирование", "ДЦП", "ОПДА", "Туторы", "Ортоаппараты"],
  },
]

function SpecialistModal({ specialist, onClose }: { specialist: typeof specialists[0]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-card w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Шапка */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border shrink-0">
          <div className="flex items-center gap-4">
            <img
              src={specialist.photo}
              alt={specialist.name}
              className="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-primary/20"
            />
            <div>
              <h2 className="text-base font-bold text-foreground leading-tight">{specialist.name}</h2>
              <p className="text-sm text-muted-foreground">{specialist.role}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors ml-3 shrink-0"
            aria-label="Закрыть"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Контент — скроллируется */}
        <div className="overflow-y-auto flex-1 px-6 py-5 flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <Icon name="Briefcase" size={16} />
            {specialist.experience}
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-foreground">О специалисте</p>
            {specialist.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-foreground">Образование</p>
            <ul className="flex flex-col gap-2">
              {specialist.education.map((e, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <Icon name="GraduationCap" size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {specialist.tags.map((tag, i) => (
              <span key={i} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Кнопка */}
        <div className="px-6 pb-6 pt-4 border-t border-border shrink-0">
          <Button onClick={onClose} className="w-full">Закрыть</Button>
        </div>
      </div>
    </div>
  )
}

export function SpecialistsSection() {
  const [selected, setSelected] = useState<typeof specialists[0] | null>(null)

  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Команда</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Наши специалисты</h2>
            <p className="text-base text-muted-foreground">
              Опытные ортопеды-протезисты с индивидуальным подходом к каждому пациенту
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {specialists.map((s, i) => (
              <div
                key={i}
                className="bg-card border rounded-2xl p-6 flex flex-col items-center gap-4 w-full max-w-xs text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-primary/15"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-foreground text-base">{s.name}</p>
                  <p className="text-sm text-primary font-medium">{s.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.experience}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.shortBio}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelected(s)}
                >
                  Подробнее
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && <SpecialistModal specialist={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
