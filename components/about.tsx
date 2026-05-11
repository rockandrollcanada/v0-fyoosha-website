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
              <p className="text-primary italic">
                The resolution is cheerful and ominous.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-oswald)] text-8xl md:text-9xl font-bold text-primary/10">
                    2
                  </div>
                  <div className="text-muted-foreground uppercase tracking-widest text-sm mt-4">
                    Members
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-6">
              <div className="font-[family-name:var(--font-oswald)] text-4xl font-bold text-primary">
                Toronto
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
                Canada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
