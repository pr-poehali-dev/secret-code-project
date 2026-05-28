import { useEffect, useState } from "react"

const images = [
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/047d72e4-b48b-4d15-a0d0-f313df739a94.jpg",
    alt: "Ребёнок с ДЦП в ортезах на прогулке",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/d2cca491-d9be-4758-8a7b-9e087988cacf.jpg",
    alt: "Индивидуальные туторы на голеностоп для ребёнка",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/98e2bb84-87e6-4fcf-9765-fa2018b8cc82.jpg",
    alt: "Специалист подгоняет ортез ребёнку",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/e032dbc5-950e-416c-9dd9-f9a34f92c0ce.jpg",
    alt: "Аппарат на всю ногу с узором для ребёнка",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/b48a4408-7648-4e24-a523-953e1cac576c.jpg",
    alt: "Ребёнок в ортезах играет на полу",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/3dd3617d-5daf-4218-9dea-42a0faaf677a.jpg",
    alt: "Яркие туторы на голеностоп оранжевые и синие",
  },
  {
    src: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/6a5d7d34-554f-41a1-8ce1-303aaa26fbb1.jpg",
    alt: "Первые шаги ребёнка в ортопедических опорах",
  },
]

export function GalleryCarousel() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length)
        setFading(false)
      }, 500)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

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

        <div className="relative w-full max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl border shadow-md aspect-[16/9] bg-card">
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: fading ? 0 : 1 }}
            />
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false) }, 400) }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Фото ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
