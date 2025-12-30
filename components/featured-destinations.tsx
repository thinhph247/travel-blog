"use client"

import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Hạ Long Bay, Quảng Ninh",
    description: "A breathtaking UNESCO World Heritage site featuring thousands of limestone karsts rising majestically from emerald waters, creating one of Vietnam's most iconic landscapes.",
    image: "/ha-long-bay.jpg",
    country: "North Vietnam",
  },
  {
    id: 2,
    name: "Sapa, Lào Cai",
    description: "Misty mountain town nestled in the Hoang Lien Son Mountains, known for its terraced rice paddies, ethnic minority villages, and stunning natural scenery.",
    image: "/sapa.jpg",
    country: "North Vietnam",
  },
  {
    id: 3,
    name: "Phong Nha Ke Bang, Quảng Bình",
    description: "A paradise for cave explorers and nature lovers, featuring spectacular limestone mountains, pristine rivers, and Vietnam's most magnificent caves including Son Doong.",
    image: "/phong-nha.jpg",
    country: "Central Vietnam",
  },
  {
    id: 4,
    name: "Mekong Delta, Cần Thơ",
    description: "Experience the rhythm of rural Vietnam with its vast network of waterways, floating villages, lush orchards, and vibrant floating markets teeming with local life.",
    image: "/mekong-delta.jpg",
    country: "South Vietnam",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Vietnam's Must-See Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Explore Vietnam's most stunning landscapes, from mystical karsts and misty mountains to vibrant waterways and pristine beaches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
