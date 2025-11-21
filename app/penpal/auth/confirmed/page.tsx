"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import IconTransparent from "@/app/assets/icon-transparent.png"

export default function ConfirmedPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center gap-12 text-center"
      >
        <div className="rise-icon-tile h-48 w-48">
          <Image
            src={IconTransparent}
            alt="rise logo"
            width={96}
            height={96}
            className="h-24 w-24 object-contain"
          />
        </div>

        <div className="space-y-4 font-mono">
          <h1 className="text-3xl lowercase text-white font-light">
            you're all set
          </h1>
          <p className="text-sm text-gray-400 font-light">
            Your email has been confirmed.
            <br />
            You can now close this window and return to the app.
          </p>
        </div>

        <Link
          href="/"
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-mono font-light"
        >
          Return home
        </Link>
      </motion.div>
    </main>
  )
}

