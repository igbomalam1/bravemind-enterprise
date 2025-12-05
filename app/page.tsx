import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { InstallationPlaces } from "@/components/installation-places"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <InstallationPlaces />
      <ProductsSection />
      <AboutSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
