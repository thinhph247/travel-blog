import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { LatestStories } from "@/components/latest-stories"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedDestinations />
      <LatestStories />
      <Newsletter />
      <Footer />
    </div>
  )
}
