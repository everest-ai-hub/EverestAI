import { Header } from "@/components/header"
import { AboutHeroSection } from "@/components/about-hero-section"
import { MissionSection } from "@/components/mission-section"
import { TeamSection } from "@/components/team-section"
import { StorySection } from "@/components/story-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - Everest AI",
  description: "Learn about Everest AI's mission to democratize artificial intelligence for enterprises worldwide.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHeroSection />
      <MissionSection />
      <StorySection />
      <TeamSection />
      <Footer />
    </main>
  )
}
