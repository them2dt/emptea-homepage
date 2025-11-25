"use client"

import type React from "react"

interface AppShowcaseProps {
  app: {
    id: number
    name: string
    description: string
    icon: string
  }
}

const ICON_MAP: Record<string, React.ReactNode> = {
  feather: (
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l7 7-7 7-7-7z" />
      <path d="M5 9l7-7 7 7" />
    </svg>
  ),
  zap: (
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  target: (
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  link: (
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  activity: (
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  grid: (
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  sun: (
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  "wave-3": (
    <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12c0-2.5 1-5 3-6.5S8 3 12 3s5 1.5 7 3.5 3 4 3 6.5" />
      <path d="M2 18c0 2.5 1 5 3 6.5s4.5 3.5 7 3.5 5-1.5 7-3.5 3-4 3-6.5" />
    </svg>
  ),
}

export default function AppShowcase({ app }: AppShowcaseProps) {
  return (
    <div className="flex justify-center">
      <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl flex items-center justify-center shadow-2xl text-white">
        {ICON_MAP[app.icon] || ICON_MAP.feather}
      </div>
    </div>
  )
}
