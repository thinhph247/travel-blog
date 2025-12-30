import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "White-washed villages perched on dramatic cliffs overlooking the Aegean Sea",
    image: "/santorini-sunset.png",
    country: "Greece",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Ancient temples, serene gardens, and timeless traditions in Japan's cultural heart",
    image: "/kyoto-japan-temple-cherry-blossoms-traditional-arc.jpg",
    country: "Japan",
  },
  {
    id: 3,
    name: "Patagonia, Chile",
    description: "Untamed wilderness with glaciers, mountains, and pristine landscapes",
    image: "/patagonia-chile-torres-del-paine-mountains-glacier.jpg",
    country: "Chile",
  },
  {
    id: 4,
    name: "Marrakech, Morocco",
    description: "Vibrant markets, stunning palaces, and the magic of Moroccan culture",
    image: "/marrakech-morocco-colorful-market-souk-traditional.jpg",
    country: "Morocco",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Featured Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Handpicked locations that will take your breath away and create memories that last forever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">{destination.country}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-2 text-balance">{destination.name}</h3>
                  <p className="text-white/90 text-pretty leading-relaxed">{destination.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
