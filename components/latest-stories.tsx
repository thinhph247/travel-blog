import { Card } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

const stories = [
  {
    id: 1,
    title: "A Week in the Heart of Iceland",
    excerpt:
      "Exploring volcanic landscapes, cascading waterfalls, and the mesmerizing Northern Lights in one of Earth's most unique destinations.",
    image: "/iceland-landscape-waterfall-northern-lights.jpg",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Adventure",
  },
  {
    id: 2,
    title: "The Hidden Gems of Portugal",
    excerpt:
      "Beyond Lisbon and Porto lies a treasure trove of charming villages, pristine beaches, and authentic Portuguese culture.",
    image: "/portugal-algarve-beach-coastal-village-colorful-bu.jpg",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Culture",
  },
  {
    id: 3,
    title: "Safari Dreams in Tanzania",
    excerpt:
      "Witnessing the Great Migration, encountering majestic wildlife, and experiencing the raw beauty of the African savanna.",
    image: "/tanzania-serengeti-safari-wildlife-elephants-sunse.jpg",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Wildlife",
  },
]

export function LatestStories() {
  return (
    <section id="stories" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            Latest Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Real adventures, honest insights, and travel inspiration from around the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-card"
            >
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
