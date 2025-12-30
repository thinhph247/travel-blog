import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/ha-long-bay.jpg" 
          alt="Ha Long Bay Vietnam" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight">
          Experience Vietnam's
          <br />
          Timeless Charm
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          Journey through Vietnam's most stunning landscapes, from the misty mountains of the north to the pristine waters of the south. Discover timeless beauty at every turn.
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
          Explore Destinations
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
