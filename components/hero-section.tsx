import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-solar-panels-on-residential-rooftop-at-suns.jpg')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center">
          {/* Grouped Badge + Text */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-0">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs sm:text-sm text-white/90">Nigeria&apos;s Leading Solar Solutions Provider</span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-2 sm:mb-4 text-balance leading-tight">
              Power Your Future with <span className="text-accent">Clean Solar Energy</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base xs:text-lg sm:text-xl text-white/80 mb-6 sm:mb-10 max-w-2xl mx-auto text-pretty">
              Professional solar panel installation for homes, businesses, and communities. Save up to 80% on electricity
              bills with our premium solar solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto min-w-[160px] sm:min-w-[180px] w-full sm:w-auto"
            >
              <a href="#products">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto min-w-[160px] sm:min-w-[180px] w-full sm:w-auto"
            >
              <a href="#products">
                <Play className="mr-2 w-5 h-5" />
                View Products
              </a>
            </Button>
          </div>

          {/* ...removed stats from hero section... */}
        </div>
      </div>

      {/* ...removed scroll indicator... */}
    </section>
  )
}
