"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"

const stories = [
  {
    id: 1,
    title: "Navigating the Wonders of Hạ Long Bay",
    excerpt:
      "Cruise through thousands of limestone karsts, discover hidden grottos, and witness the magical sunrise over emerald waters in Vietnam's most iconic natural wonder.",
    image: "/ha-long-cruise.jpg",
    date: "December 20, 2024",
    readTime: "8 min read",
    category: "Adventure",
  },
  {
    id: 2,
    title: "Trekking Through the Mountains of Sapa",
    excerpt:
      "Experience the authentic culture of ethnic minorities, trek through terraced rice paddies, and stay in traditional villages in Vietnam's misty northern highlands.",
    image: "/sapa-trekking.jpg",
    date: "December 15, 2024",
    readTime: "7 min read",
    category: "Culture",
  },
  {
    id: 3,
    title: "Underground Marvels: Exploring Phong Nha Caves",
    excerpt:
      "Descend into Vietnam's most spectacular cave systems including the famous Son Doong, surrounded by karst mountains and pristine rivers in central Vietnam.",
    image: "/phong-nha-cave.jpg",
    date: "December 10, 2024",
    readTime: "9 min read",
    category: "Adventure",
  },
]

export function LatestStories() {
  return (
    <section id="stories" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Vietnam Travel Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Discover authentic travel experiences, cultural insights, and unforgettable adventures throughout Vietnam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-card"
            >
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground rounded-full">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors text-balance">
                  {story.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{story.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{story.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{story.readTime}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
