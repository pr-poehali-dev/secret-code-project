import { useEffect, useRef, useState } from "react"

const images = [
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/bucket/13c65837-cf03-48d1-bed6-aef79c9622cd.jpg",
    alt: "Туторы на голеностоп — пара красных",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/bucket/4a7b8f11-3cb2-44b0-8530-e8f53965d44c.jpg",
    alt: "Туторы синий и с принтом",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/bucket/d521ff26-2eec-4036-8e26-020098014db4.jpg",
    alt: "Аппарат на всю ногу с принтом бабочек",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/bucket/e09ebddf-2dad-4590-9e2b-acd0bea89a38.jpg",
    alt: "Тутор сбоку — синий и с принтом",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/047d72e4-b48b-4d15-a0d0-f313df739a94.jpg",
    alt: "Ребёнок с ДЦП в ортезах",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/d2cca491-d9be-4758-8a7b-9e087988cacf.jpg",
    alt: "Яркие туторы на ногах ребёнка",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/98e2bb84-87e6-4fcf-9765-fa2018b8cc82.jpg",
    alt: "Специалист подгоняет ортез ребёнку",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/e032dbc5-950e-416c-9dd9-f9a34f92c0ce.jpg",
    alt: "Аппарат на всю ногу с узором",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/b48a4408-7648-4e24-a523-953e1cac576c.jpg",
    alt: "Ребёнок в ортезах играет на полу",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/3dd3617d-5daf-4218-9dea-42a0faaf677a.jpg",
    alt: "Оранжево-синие туторы",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/6a5d7d34-554f-41a1-8ce1-303aaa26fbb1.jpg",
    alt: "Первые шаги ребёнка в опорах",
  },
]

export function GalleryCarousel() {
  const [current, setCurrent] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    setOpacity(0)
    setTimeout(() => {
      setCurrent(index)
      setOpacity(1)
    }, 400)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((current + 1) % images.length)
    }, 3000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [current])

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-10">
        <div className="flex flex-col gap-4 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Галерея</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Наши работы</h2>
          <p className="text-base text-muted-foreground">
            Индивидуальные ортоаппараты и туторы для детей с ДЦП и нарушениями ОПДА
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto flex flex-col gap-5">
          <div
            className="overflow-hidden rounded-2xl border shadow-md bg-card"
            style={{ aspectRatio: "16/9" }}
          >
            <img
              key={current}
              src={images[current].src}
              alt={images[current].alt}
              style={{
                opacity,
                transition: "opacity 0.4s ease",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div className="flex justify-center items-center gap-2 flex-wrap">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 24 : 10,
                  height: 10,
                  borderRadius: 999,
                  background: i === current ? "var(--primary)" : "var(--border)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
                aria-label={`Фото ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
