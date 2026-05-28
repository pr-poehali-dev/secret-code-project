import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex gap-12 lg:gap-16">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold flex-1">
              Ортоаппараты для детей с ДЦП и <span className="text-primary">нарушениями ОПДА</span>
            </h1>
            <div className="flex-1 w-full flex flex-col gap-8">
              <p className="text-muted-foreground text-base lg:text-lg">
                Специализируемся на изготовлении индивидуальных ортоаппаратов, туторов и ортезов для детей с ДЦП и нарушениями опорно-двигательного аппарата. Каждое изделие создаётся под конкретного ребёнка с учётом его диагноза и анатомии.
              </p>

              <div className="flex flex-col lg:flex-row gap-3">
                <a href="tel:+79055021502">
                  <Button>Заказать изделие</Button>
                </a>
                <Button variant="ghost">
                  Узнать больше
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl border bg-background shadow-xl">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/457e83a7-2470-4d79-b5d9-0544bde34d0b.jpg"
              alt="Аппарат на всю ногу — индивидуальное изготовление"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}