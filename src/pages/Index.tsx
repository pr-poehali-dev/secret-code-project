import { LpNavbar1 } from "@/components/LpNavbar1"
import { HeroSection7 } from "@/components/HeroSection7"
import { FeatureSection9 } from "@/components/FeatureSection9"
import { FeatureSection3 } from "@/components/FeatureSection3"
import { ProductsSection } from "@/components/ProductsSection"
import { GalleryCarousel } from "@/components/GalleryCarousel"
import { TestimonialsSection5 } from "@/components/TestimonialsSection5"
import { TsrBanner } from "@/components/TsrBanner"
import { SpecialistsSection } from "@/components/SpecialistsSection"
import { PricingSection4 } from "@/components/PricingSection4"
import { LeadForm } from "@/components/LeadForm"
import { FaqSection1 } from "@/components/FaqSection1"
import { Footer2 } from "@/components/Footer2"
import { CookieBanner } from "@/components/CookieBanner"

const Index = () => {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection7 />
      <FeatureSection9 />
      <FeatureSection3 />
      <ProductsSection />
      <GalleryCarousel />
      <TestimonialsSection5 />
      <section className="py-6 md:py-8 bg-background">
        <TsrBanner />
      </section>
      <SpecialistsSection />
      <PricingSection4 />
      <LeadForm />
      <FaqSection1 />
      <Footer2 />
      <CookieBanner />
    </main>
  )
}

export default Index