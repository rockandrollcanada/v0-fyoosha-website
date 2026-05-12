"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Eyes */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fyoosha-eyes-h9FtOIgoCgja5bG06TSHDovafXfpYF.jpg"
          alt="fyoosha eyes"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-oswald)] text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter mb-6 leading-none">
            <span className="text-primary">fy</span>oosha
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-2xl mx-auto mb-4 leading-relaxed">
            An original instrumental rock duo from Toronto
          </p>

          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-12">
            A rock-based melodic fusion of contemporary music elements from rock, jazz, classical, and blues with a touch of electronica
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#videos"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider text-sm hover:bg-primary/80 transition-colors"
            >
              Watch Videos
            </Link>
            <Link
              href="#listen"
              className="px-8 py-4 bg-secondary/80 text-secondary-foreground font-medium uppercase tracking-wider text-sm hover:bg-muted transition-colors border border-border"
            >
              Listen Now
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </Link>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-8 w-px h-24 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent hidden lg:block" />
    </section>
  )
}
