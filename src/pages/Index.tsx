import { useSeo } from "@/hooks/useSeo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { HeroSection7 } from "@/components/HeroSection7"
import { FeatureSection9 } from "@/components/FeatureSection9"
import { FeatureSection3 } from "@/components/FeatureSection3"
import { ProductsSection } from "@/components/ProductsSection"
import { GalleryCarousel } from "@/components/GalleryCarousel"
import { TestimonialsSection5 } from "@/components/TestimonialsSection5"
import { CatalogPreview } from "@/components/CatalogPreview"
import { TsrBanner } from "@/components/TsrBanner"
import { SpecialistsSection } from "@/components/SpecialistsSection"
import { PricingSection4 } from "@/components/PricingSection4"
import { LeadForm } from "@/components/LeadForm"
import { FaqSection1 } from "@/components/FaqSection1"
import { ArticlesSection } from "@/components/ArticlesSection"
import { Footer2 } from "@/components/Footer2"
import { CookieBanner } from "@/components/CookieBanner"

const Index = () => {
  useSeo({
    title: "ОртоЦентр — индивидуальные ортоаппараты и туторы в Мытищах",
    description: "Изготовление индивидуальных ортопедических аппаратов и туторов для детей с ДЦП и нарушениями ОПДА. Опыт более 25 лет. Мытищи, ул. Карла Маркса д.2. Тел: +7 905 502-15-02.",
    canonical: "https://ortocentr.ru/",
  })
  return (
    <main>
      <LpNavbar1 />
      <HeroSection7 />
      <FeatureSection9 />
      <FeatureSection3 />
      <ProductsSection />
      <CatalogPreview />
      <GalleryCarousel />
      <TestimonialsSection5 />
      <section className="py-6 md:py-8 bg-background">
        <TsrBanner />
      </section>
      {/* Временно скрыто, восстановим позже */}
      {/* <SpecialistsSection /> */}
      <PricingSection4 />
      <LeadForm />
      <FaqSection1 />
      <ArticlesSection />
      <Footer2 />
      <CookieBanner />
    </main>
  )
}

export default Index