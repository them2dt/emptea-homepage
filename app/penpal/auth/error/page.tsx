"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ErrorContent() {
  const searchParams = useSearchParams()
  const message = searchParams.get("message") || "An error occurred during authentication"

  return (
    <div className="space-y-4 font-mono">
      <h1 className="text-3xl lowercase text-white font-light">
        oops
      </h1>
      <p className="text-sm text-gray-400 font-light">
        {message}
      </p>
    </div>
  )
}

export default function AuthErrorPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 bg-black">
      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-md">
        <Suspense fallback={
          <div className="space-y-4 font-mono">
            <h1 className="text-3xl lowercase text-white font-light">
              oops
            </h1>
            <p className="text-sm text-gray-400 font-light">
              An error occurred during authentication
            </p>
          </div>
        }>
          <ErrorContent />
        </Suspense>

        <Link
          href="/"
          className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-mono font-light"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}

