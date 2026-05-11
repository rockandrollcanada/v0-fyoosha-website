"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-oswald)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-6">
            <span className="text-primary">fy</span>oosha
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            An original instrumental rock duo from Toronto
          </p>
          
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto mb-12">
            A rock-based melodic fusion of contemporary music elements from rock, jazz, classical, and blues with a touch of electronica
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#viveos"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
            >
              Watch Viveos
            </Link>
            <Link
              href="#listen"
              className="px-8 py-4 bg-secondary text-secondary-foreground font-medium uppercase tracking-wider text-sm hover:bg-muted transition-colors border border-border"
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

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-8 w-px h-24 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent hidden lg:block" />
    </section>
  )
}
