"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="text-2xl lg:text-3xl font-serif font-bold tracking-tight text-foreground">
            Wanderlust
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#destinations" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Destinations
            </a>
            <a href="#stories" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Stories
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#destinations" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Destinations
            </a>
            <a href="#stories" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Stories
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
