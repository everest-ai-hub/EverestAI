import { Header } from "@/components/header"
import { ContactHeroSection } from "@/components/contact-hero-section"
import { ContactFormSection } from "@/components/contact-form-section"
import { OfficesSection } from "@/components/offices-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us - Everest AI",
  description: "Get in touch with Everest AI for AI consulting, development, and enterprise solutions.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHeroSection />
      <ContactFormSection />
      <OfficesSection />
      <Footer />
    </main>
  )
}
