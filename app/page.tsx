import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { MethodSection } from "@/components/method-section"
import { AreaHighlights } from "@/components/area-highlights"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <MethodSection />
      <AreaHighlights />
      <FAQSection />
    </>
  )
}
