import Link from "next/link"

const socialLinks = [
  { name: "SoundCloud", url: "https://soundcloud.com/fyoosha" },
  { name: "BandMix", url: "https://www.bandmix.ca/fyoosha/" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100029087688902" },
]

export function Footer() {
  return (
    <footer id="connect" className="py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-oswald)] text-3xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors inline-block"
            >
              fyoosha
            </Link>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Toronto rock duo exploring political rhetoric through a fusion of rock, jazz, classical, blues, and electronica.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-foreground uppercase tracking-wider text-sm mb-4">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                About
              </Link>
              <Link href="#videos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Videos
              </Link>
              <Link href="#listen" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Listen
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-medium text-foreground uppercase tracking-wider text-sm mb-4">
              Connect
            </h3>
            <nav className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            fyoosha - Toronto, Canada
          </p>
          <p className="text-muted-foreground/60 text-xs">
            The resolution is cheerful and ominous.
          </p>
        </div>
      </div>
    </footer>
  )
}
