"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons"
import IconTransparent from "./assets/icon-transparent.png"

const APPS = [
  {
    id: 1,
    name: "rise",
    tagline: "Achieve your goals",
    logo: IconTransparent,
  },
  {
    id: 2,
    name: "flow",
    tagline: "Master your workflow",
    logo: IconTransparent,
  },
  {
    id: 3,
    name: "focus",
    tagline: "Eliminate distractions",
    logo: IconTransparent,
  },
] as const

const APP_BACKGROUNDS = [
  "#000000", // rise - black
  "rgba(59, 130, 246, 0.15)", // flow - blue
  "rgba(168, 85, 247, 0.15)", // focus - purple
  "rgba(236, 72, 153, 0.15)", // sync - pink
  "rgba(239, 68, 68, 0.15)", // pulse - red
  "rgba(245, 158, 11, 0.15)", // nest - amber
  "rgba(16, 185, 129, 0.15)", // glow - emerald
  "rgba(6, 182, 212, 0.15)", // wave - cyan
] as const

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0) // Index 0 = app 1 (Rise)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [isLoading, setIsLoading] = useState(true)
  const currentApp = APPS[activeIndex]

  // Simulate haptic feedback for mobile
  const triggerHapticFeedback = () => {
    if (typeof window !== 'undefined' && 'navigator' in window) {
      // Check for vibration API (works on most mobile devices)
      if ('vibrate' in navigator) {
        navigator.vibrate(50) // 50ms vibration
      }
    }
  }

  const handleNavigation = (newIndex: number) => {
    // Allow navigation to the first three apps (Rise, Flow, Focus)
    if (newIndex > 2 || newIndex < 0) return

    // Trigger haptic feedback on mobile
    triggerHapticFeedback()

    if (newIndex > activeIndex) {
      setDirection("right")
    } else {
      setDirection("left")
    }
    setActiveIndex(newIndex)
  }

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50
    const swipeVelocity = 500

    if (Math.abs(info.velocity.x) > swipeVelocity || Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        // Swipe right - go to previous app
        handleNavigation(activeIndex - 1)
      } else {
        // Swipe left - go to next app
        handleNavigation(activeIndex + 1)
      }
    }
  }

  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Simulate loading time

    return () => clearTimeout(timer)
  }, [])

  const slideVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -30 : 30,
      opacity: 0,
    }),
  }

  // Loading screen
  if (isLoading) {
    return (
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-gray-500 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-4xl font-mono font-light text-white mb-4">emptea</div>
          <div className="text-sm font-mono font-light text-gray-400">studios</div>
        </motion.div>
      </main>
    )
  }

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-gray-500"
      style={{
        background: APP_BACKGROUNDS[activeIndex],
      }}
    >
      {/* White opacity gradient overlay layer */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 5,
          background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 1) 70%)',
        }}
      />

      <header className="pointer-events-none absolute left-0 right-0 top-16 z-20 text-center font-mono font-light text-xs sm:text-sm">
        <span className="text-gray-100">emptea</span>
        <span className="ml-3 text-gray-700">studios</span>
      </header>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-12 text-center w-80 h-96 sm:w-96 sm:h-112 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        <motion.div
          key={activeIndex}
          className="rise-icon-tile h-64 w-64 sm:h-72 sm:w-72"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {activeIndex === 0 ? (
            <></>

          ) : (
            <FontAwesomeIcon icon={faLock} className="h-24 w-24 text-gray-500" />
          )}
        </motion.div>

        <motion.div
          key={`text-${activeIndex}`}
          className="space-y-4 font-mono"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-2xl lowercase text-white sm:text-3xl font-mono font-light">
            {activeIndex === 0 ? currentApp.name : "***"}
          </p>
          <p className="text-xs text-gray-600 sm:text-sm font-mono font-light">
            {activeIndex === 0 ? currentApp.tagline : "***"}
          </p>
        </motion.div>

        {activeIndex === 0 && (
          <div className="flex items-center gap-8 text-gray-700">
            <span className="rise-store-icon text-sm font-mono font-light">
              Google Play
            </span>
            <span className="rise-store-icon text-sm font-mono font-light">
              App Store
            </span>
          </div>
        )}

        <nav aria-label="Featured apps" className="font-mono font-light text-xs text-gray-700">
          <ul className="flex items-center gap-4">
            {APPS.map((app, index) => (
              <li key={app.id}>
                {index <= 2 ? (
                  <button
                    onClick={() => handleNavigation(index)}
                    className={`transition-colors ${
                      index === activeIndex ? "text-white" : "text-gray-700/60 hover:text-gray-500"
                    }`}
                    aria-label={`View ${app.name}`}
                    aria-current={index === activeIndex ? "page" : undefined}
                  >
                    {app.id}
                  </button>
                ) : (
                  <span className="text-gray-700/30 cursor-not-allowed flex items-center justify-center">
                    <FontAwesomeIcon icon={faLock} className="h-3 w-3" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </main>
  )
}

