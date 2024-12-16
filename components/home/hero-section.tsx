"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Search Your Browser Like Never Before
      </h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        QuickPeek gives you instant access to your tabs, history, bookmarks, and downloads with lightning-fast search.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" asChild>
          <Link href="/download">Install QuickPeek</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/docs">Learn More</Link>
        </Button>
      </div>
    </section>
  )
}