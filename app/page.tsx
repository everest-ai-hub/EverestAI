import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import TestimonialsSection from "@/components/testimonials-section"
import { AISolutionsSection } from "@/components/ai-solutions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <AISolutionsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
