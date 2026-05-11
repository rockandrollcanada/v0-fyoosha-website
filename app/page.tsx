import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VideoGrid } from "@/components/video-grid"
import { Listen } from "@/components/listen"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <VideoGrid />
      <Listen />
      <Footer />
    </main>
  )
}
