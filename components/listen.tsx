import { ExternalLink } from "lucide-react"

const platforms = [
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/fyoosha",
    description: "Stream our full catalog",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.084-.1zm-.899 1.256c-.057 0-.094.034-.101.09L0 14.479l.175.933c.007.055.045.089.1.089.057 0 .092-.034.099-.089l.217-.933-.217-.976c-.007-.056-.042-.09-.098-.09zm1.83-1.458c-.063 0-.103.039-.113.1l-.196 2.356.196 2.268c.01.061.05.1.113.1.062 0 .102-.039.112-.1l.222-2.268-.222-2.356c-.01-.061-.05-.1-.112-.1zm.899-.107c-.069 0-.109.045-.117.106l-.169 2.463.169 2.334c.008.061.048.106.117.106.068 0 .108-.045.116-.106l.191-2.334-.191-2.463c-.008-.061-.048-.106-.116-.106zm.906-.023c-.075 0-.116.051-.121.113l-.143 2.486.143 2.386c.005.062.046.113.121.113.074 0 .115-.051.12-.113l.163-2.386-.163-2.486c-.005-.062-.046-.113-.12-.113zm.903.011c-.081 0-.122.057-.127.119l-.119 2.475.119 2.451c.005.062.046.119.127.119.08 0 .121-.057.126-.119l.135-2.451-.135-2.475c-.005-.062-.046-.119-.126-.119zm.906-.025c-.087 0-.128.063-.132.125l-.096 2.5.096 2.505c.004.062.045.125.132.125.086 0 .127-.063.131-.125l.11-2.505-.11-2.5c-.004-.062-.045-.125-.131-.125zm.899.012c-.093 0-.134.069-.138.131l-.072 2.488.072 2.558c.004.062.045.131.138.131.092 0 .133-.069.137-.131l.084-2.558-.084-2.488c-.004-.062-.045-.131-.137-.131zm.906.001c-.099 0-.14.075-.143.137l-.048 2.487.048 2.611c.003.062.044.137.143.137.098 0 .139-.075.142-.137l.056-2.611-.056-2.487c-.003-.062-.044-.137-.142-.137zm.903-.006c-.105 0-.146.081-.148.143l-.024 2.493.024 2.664c.002.062.043.143.148.143.104 0 .145-.081.147-.143l.028-2.664-.028-2.493c-.002-.062-.043-.143-.147-.143zm2.038-1.033c-.166 0-.303.137-.303.303v6.091c0 .166.137.303.303.303h5.091c1.675 0 3.034-1.358 3.034-3.034 0-1.675-1.358-3.034-3.034-3.034-.397 0-.776.076-1.124.214-.22-1.894-1.846-3.366-3.813-3.366-.517 0-1.013.107-1.464.3-.13.055-.166.109-.166.219v6.004c0 .078.063.137.138.143z"/>
      </svg>
    ),
  },
  {
    name: "BandMix",
    url: "https://www.bandmix.ca/fyoosha/",
    description: "Band profile",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100029087688902",
    description: "Follow us",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export function Listen() {
  return (
    <section id="listen" className="py-24 md:py-32 bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Stream
          </span>
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mt-4">
            Listen Now
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Find <span className="font-[family-name:var(--font-georgian)]">ფიუშა</span> on your favorite platform
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                {platform.icon}
              </div>
              <div className="flex-1">
                <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {platform.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {platform.description}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* SoundCloud Embed */}
        <div className="mt-16 max-w-4xl mx-auto">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/fyoosha&color=%23c74e4e&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            className="bg-card"
          />
        </div>
      </div>
    </section>
  )
}
