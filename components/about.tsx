import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              The Sound
            </span>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mt-4 mb-6">
              Guitar & Drums
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                fyoosha is an original instrumental recording duo - guitar and drums - creating a 
                rock-based melodic fusion of various contemporary music elements from rock, jazz, 
                classical and blues with a touch of electronica.
              </p>
              <p>
                A very original sound covering a full-spectrum soundscape, but not too far from the center.
              </p>
              <p className="text-foreground font-medium">
                Thematically, an exploration and provocation of political rhetoric, set as lyrical epic 
                journeys fueled by raging guitars, a fusion of music, imagery and historical sound clips.
              </p>
              <p className="text-primary italic text-lg">
                &ldquo;The resolution is cheerful and ominous.&rdquo;
              </p>
            </div>
          </div>

          {/* Band Member Photos */}
          <div className="relative">
            <div className="aspect-[2/1] relative overflow-hidden image-glow transition-all duration-500">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fyoosha-three-ejIDc1Qh1hM54VMCXFTewfw2LrMO7N.jpg"
                alt="fyoosha - guitar and drums duo"
                fill
                className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Location Badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card border border-border p-4 md:p-6">
              <div className="font-[family-name:var(--font-oswald)] text-2xl md:text-4xl font-bold text-primary">
                Toronto
              </div>
              <div className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mt-1">
                Canada
              </div>
            </div>
          </div>
        </div>

        {/* Additional Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          <div className="aspect-square relative overflow-hidden image-glow transition-all duration-500">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fyoosha-one-RqonKFGUGqQPLcgav6sIBnE6Eg7Khq.jpg"
              alt="fyoosha live performance"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-square relative overflow-hidden image-glow transition-all duration-500">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fyoosha-5-dQF08n9UV3ETmPi9hclgKuUz2jv7NM.jpg"
              alt="fyoosha on stage"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>


        </div>
      </div>
    </section>
  )
}
