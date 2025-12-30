"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            Never Miss an Adventure
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
            Subscribe to our newsletter and get the latest travel stories, tips, and inspiration delivered straight to
            your inbox
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary-foreground text-foreground border-0"
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
              Subscribe
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="text-sm text-primary-foreground/70 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
