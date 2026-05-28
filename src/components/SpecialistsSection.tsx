import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const specialists = [
  {
    name: "Носаков Александр Юрьевич",
    role: "Техник-ортопед",
    shortBio: "Более 25 лет в ортопедии. Основатель собственного производства ортезов. Специалист по ортезированию детей и взрослых с нарушениями ОПДА.",
    photo: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/51701b7f-b91d-4021-9285-f2db989a57d7.jpg",
    experience: "Опыт с 1999 года — более 25 лет",
    work: [
      { years: "1999–2001", place: "ПРОП МП «ОРТЕЗ»", role: "Техник-ортопед" },
      { years: "2001–2016", place: "ЗАО «Конмет Р.С.»", role: "Руководитель протезно-ортопедического производства" },
      { years: "2018 — н.в.", place: "«Лаборатория ортезирования Носакова Александра»", role: "Основатель, собственное производство" },
    ],
    education: [
      "1993–1997 — Королёвский колледж космического машиностроения и технологий, специальность «Ортопедическая и реабилитационная техника», квалификация: техник-ортопед.",
      "1999–2002 — Московский государственный университет сервиса, специальность «Менеджмент организации», квалификация: менеджер.",
      "2003 — ФГУП «ФНПЦ медико-социальной экспертизы и реабилитации инвалидов» — семинар по ортезированию при деформации позвоночника.",
      "2006 — Отто Бокк Москва — изготовление ортопедического аппарата нижней конечности с унилатеральными шарнирами.",
      "2008 — ФГУП «Федеральное бюро МСЭ» — ортезирование по видам нарушения ОПДА.",
      "2012 — ФГУП «Федеральное бюро МСЭ» — протезирование как медико-технический комплекс.",
      "2014 — Московский протезный завод — ортезирование с применением низкотемпературных пластиков ORFIT.",
      "2017 — «Рехаб Медикал» — программа MOVE: двигательное обучение детей и взрослых с физическими нарушениями.",
      "2018 — «Сурсил-ОРТО» — ортезирование нижних конечностей, изготовление ортопедических стелек.",
      "2021 — Отто Бокк — курс «Материалы в ортопедической технике. Техника литья из смолы».",
      "2022 — Отто Бокк — изготовление аппарата на голеностопный сустав с карбоновой пружиной Ankle Seven.",
      "2024 — «Основы ортезирования по методу Шено» — НОЦ АО «Московское протезно-ортопедическое предприятие».",
    ],
    about: [
      "Александр Юрьевич — один из наиболее опытных специалистов по ортезированию в Подмосковье. За более чем 25 лет практики прошёл путь от техника-ортопеда до руководителя крупного производства и основателя собственной лаборатории.",
      "Специализируется на индивидуальном изготовлении ортоаппаратов и туторов для детей с ДЦП, нарушениями ОПДА и косолапостью. Каждое изделие создаётся вручную с точным учётом анатомии пациента.",
      "Регулярно проходит обучение у ведущих мировых производителей — Ottobock, ORFIT, Сурсил-ОРТО — и применяет актуальные технологии в своей работе.",
    ],
    tags: ["Детское ортезирование", "ДЦП", "ОПДА", "Туторы", "Ортоаппараты", "Карбоновые аппараты", "Метод Шено"],
  },
]

type Specialist = typeof specialists[0]

function SpecialistModal({ specialist, onClose }: { specialist: Specialist; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-card w-full sm:max-w-xl sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Шапка — фиксирована */}
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

          <div className="flex items-center gap-2 text-primary font-semibold">
            <Icon name="Briefcase" size={16} />
            {specialist.experience}
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-foreground">О специалисте</p>
            {specialist.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-foreground">Опыт работы</p>
            <div className="flex flex-col gap-3">
              {specialist.work.map((w, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-xs text-primary font-semibold bg-primary/10 rounded px-2 py-0.5 shrink-0 mt-0.5 whitespace-nowrap">{w.years}</span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-foreground font-medium">{w.place}</span>
                    <span className="text-xs text-muted-foreground">{w.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold text-foreground">Образование и повышение квалификации</p>
            <ul className="flex flex-col gap-2">
              {specialist.education.map((e, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <Icon name="GraduationCap" size={15} className="text-primary shrink-0 mt-0.5" />
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

        {/* Кнопка — фиксирована */}
        <div className="px-6 pb-6 pt-4 border-t border-border shrink-0">
          <Button onClick={onClose} className="w-full">Закрыть</Button>
        </div>
      </div>
    </div>
  )
}

export function SpecialistsSection() {
  const [selected, setSelected] = useState<Specialist | null>(null)

  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Команда</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Наши специалисты</h2>
            <p className="text-base text-muted-foreground">
              Опытные техники-ортопеды с индивидуальным подходом к каждому пациенту
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {specialists.map((s, i) => (
              <div
                key={i}
                className="bg-card border rounded-2xl p-6 flex flex-col items-center gap-4 w-full max-w-sm text-center shadow-sm hover:shadow-md transition-shadow"
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
                <Button variant="outline" className="w-full" onClick={() => setSelected(s)}>
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