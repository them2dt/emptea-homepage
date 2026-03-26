"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const fallbackMessage = "An error occurred during authentication";

function ErrorContent() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message") || fallbackMessage;

  return (
    <p className="text-sm text-muted-foreground">{message}</p>
  );
}

export default function AuthErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <h1 className="text-3xl font-bold tracking-[-0.02em]">Error.</h1>
        <Suspense
          fallback={
            <p className="text-sm text-muted-foreground">{fallbackMessage}</p>
          }
        >
          <ErrorContent />
        </Suspense>
        <Link
          href="/"
          className="heading-caption transition-opacity hover:opacity-60"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
