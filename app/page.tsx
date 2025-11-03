"use client"

import { useState } from "react"
import AppShowcase from "@/components/app-showcase"

const APPS = [
  {
    id: 1,
    name: "Rise",
    description: "Achieve your goals",
    icon: "feather",
  },
  {
    id: 2,
    name: "Flow",
    description: "Master your workflow",
    icon: "zap",
  },
  {
    id: 3,
    name: "Focus",
    description: "Eliminate distractions",
    icon: "target",
  },
  {
    id: 4,
    name: "Sync",
    description: "Connect everything",
    icon: "link",
  },
  {
    id: 5,
    name: "Pulse",
    description: "Feel the rhythm",
    icon: "activity",
  },
  {
    id: 6,
    name: "Nest",
    description: "Organize your world",
    icon: "grid",
  },
  {
    id: 7,
    name: "Glow",
    description: "Illuminate your path",
    icon: "sun",
  },
  {
    id: 8,
    name: "Wave",
    description: "Ride the momentum",
    icon: "wave-3",
  },
]

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(4)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % APPS.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + APPS.length) % APPS.length)
  }

  const goToApp = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <main className="min-h-screen bg-black flex flex-col justify-center items-center px-4">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 pt-8 md:pt-12">
        <div className="text-center">
          <h1 className="text-base md:text-lg font-light tracking-widest">
            <span className="text-white">emptea</span> <span className="text-gray-600">studios</span>
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-col items-center gap-12 md:gap-16">
        {/* App Showcase */}
        <AppShowcase app={APPS[currentIndex]} />

        {/* Navigation Controls */}
        <div className="flex items-center gap-6 md:gap-8">
          <button
            onClick={handlePrev}
            className="text-gray-600 hover:text-gray-400 transition-colors p-2"
            aria-label="Previous app"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="text-gray-600 hover:text-gray-400 transition-colors p-2"
            aria-label="Next app"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* App Info */}
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h2 className="text-xl md:text-2xl font-light text-white">{APPS[currentIndex].name}</h2>
          <p className="text-gray-600 text-sm md:text-base">{APPS[currentIndex].description}</p>
        </div>

        {/* Pagination */}
        <div className="flex gap-2 md:gap-3">
          {APPS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToApp(index)}
              className={`text-sm md:text-base transition-colors ${
                index === currentIndex ? "text-white" : "text-gray-700 hover:text-gray-500"
              }`}
              aria-label={`Go to app ${index + 1}`}
              aria-current={index === currentIndex ? "page" : undefined}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
