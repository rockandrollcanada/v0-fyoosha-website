"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface Video {
  id: string
  title: string
  category: "viveos" | "fyooshavision"
}

const videos: Video[] = [
  { id: "pngVA2c-kD0", title: "Viveo 1", category: "viveos" },
  { id: "X3Skd3SwuxY", title: "Viveo 2", category: "viveos" },
  { id: "xO61dFM_hy0", title: "Viveo 3", category: "viveos" },
  { id: "8Is9N5cqBms", title: "Viveo 4", category: "viveos" },
  { id: "e5wtrUOTIWU", title: "Viveo 5", category: "viveos" },
  { id: "e_dhoB2CDKM", title: "Viveo 6", category: "viveos" },
  { id: "seAaWuKzp0c", title: "Viveo 7", category: "viveos" },
  { id: "hA6byocYXiY", title: "Viveo 8", category: "viveos" },
  { id: "A2E5chb2ruY", title: "Viveo 9", category: "viveos" },
  { id: "ikcgZqQzJTg", title: "Viveo 10", category: "viveos" },
  { id: "IhOu3q8wFpY", title: "Viveo 11", category: "viveos" },
  { id: "h2v_1ziAYTE", title: "Fyooshavision 1", category: "fyooshavision" },
  { id: "0_CAWLxYnDg", title: "Fyooshavision 2", category: "fyooshavision" },
  { id: "3eN6qVGEaDg", title: "Fyooshavision 3", category: "fyooshavision" },
]

interface VideoCardProps {
  video: Video
  onPlay: (id: string) => void
  isPlaying: boolean
}

function VideoCard({ video, onPlay, isPlaying }: VideoCardProps) {
  return (
    <div className="group relative aspect-video bg-secondary overflow-hidden">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
            }}
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
          <button
            onClick={() => onPlay(video.id)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label={`Play ${video.title}`}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </button>
        </>
      )}
    </div>
  )
}

export function VideoGrid() {
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [filter, setFilter] = useState<"all" | "viveos" | "fyooshavision">("all")

  const filteredVideos = filter === "all" 
    ? videos 
    : videos.filter(v => v.category === filter)

  return (
    <section id="viveos" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Viveos
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Visual journeys fueled by raging guitars, fusing music, imagery, and historical sound clips.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                filter === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("viveos")}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                filter === "viveos" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              Viveos
            </button>
            <button
              onClick={() => setFilter("fyooshavision")}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                filter === "fyooshavision" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              Fyooshavision
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={setPlayingId}
              isPlaying={playingId === video.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
