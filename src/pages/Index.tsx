import { LpNavbar1 } from "@/components/LpNavbar1"
import { HeroSection7 } from "@/components/HeroSection7"
import { FeatureSection9 } from "@/components/FeatureSection9"
import { FeatureSection3 } from "@/components/FeatureSection3"
import { ProductsSection } from "@/components/ProductsSection"
import { TestimonialsSection5 } from "@/components/TestimonialsSection5"
import { TsrBanner } from "@/components/TsrBanner"
import { PricingSection4 } from "@/components/PricingSection4"
import { FaqSection1 } from "@/components/FaqSection1"
import { Footer2 } from "@/components/Footer2"

const Index = () => {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection7 />
      <FeatureSection9 />
      <FeatureSection3 />
      <ProductsSection />
      <TestimonialsSection5 />
      <section className="py-6 md:py-8 bg-background">
        <TsrBanner />
      </section>
      <PricingSection4 />
      <FaqSection1 />
      <Footer2 />
    </main>
  )
}

export default Index