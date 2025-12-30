import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/stunning-aerial-view-of-turquoise-coastline-with-w.jpg" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight">
          Discover the World's
          <br />
          Hidden Treasures
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          Embark on unforgettable journeys to breathtaking destinations. Let us inspire your next adventure.
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
          Explore Destinations
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
