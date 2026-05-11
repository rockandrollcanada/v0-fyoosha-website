import Image from "next/image"

const artworks = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fyoosha-9-mfieSNFqWiB3N4QnbcjOJVy40zML8a.jpg",
    alt: "fyoosha neural network artwork",
    title: "Digital Mind",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fyoosha-7-2mg0A8icAS0VNnQaqHo7yBtxiT1vyo.jpeg",
    alt: "fyoosha dollar collage",
    title: "Political Rhetoric",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fyoosha-two-VUHlCwGQPzOeCcLqcuEbON4R7jlWmd.gif",
    alt: "fyoosha portrait",
    title: "The Vision",
  },
]

export function Gallery() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Visual
          </span>
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mt-4">
            Imagery
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Exploring political rhetoric through visual art
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {artworks.map((artwork, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden image-glow transition-all duration-500"
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-foreground font-medium uppercase tracking-wider text-sm">
                  {artwork.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width banner image */}
        <div className="mt-16 relative h-64 md:h-96 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fyoosha-one-RqonKFGUGqQPLcgav6sIBnE6Eg7Khq.jpg"
            alt="fyoosha live"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-[family-name:var(--font-oswald)] text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tighter text-foreground/90">
              Raw Sound
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
