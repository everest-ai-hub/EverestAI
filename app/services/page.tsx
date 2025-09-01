import { Header } from "@/components/header"
import { ServicesHeroSection } from "@/components/services-hero-section"
import { ServiceCategoriesSection } from "@/components/service-categories-section"
import { ServicePackagesSection } from "@/components/service-packages-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Services - Everest AI",
  description:
    "Comprehensive AI services including consulting, development, implementation, and support for enterprises.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHeroSection />
      <ServiceCategoriesSection />
      <ServicePackagesSection />
      <Footer />
    </main>
  )
}
