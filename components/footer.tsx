import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Wanderlust</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Inspiring travelers to explore the world, one destination at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#destinations" className="text-muted-foreground hover:text-accent transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#stories" className="text-muted-foreground hover:text-accent transition-colors">
                  Travel Stories
                </a>
              </li>
              <li>
                <a href="#guides" className="text-muted-foreground hover:text-accent transition-colors">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#tips" className="text-muted-foreground hover:text-accent transition-colors">
                  Travel Tips
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Wanderlust Travel Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
