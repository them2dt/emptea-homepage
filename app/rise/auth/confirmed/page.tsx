"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ConfirmedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="flex flex-col items-center gap-6 text-center"
      >
        <h1 className="text-3xl font-bold tracking-[-0.02em]">Confirmed.</h1>
        <p className="text-sm text-muted-foreground">
          Your email has been verified.
          <br />
          You can now close this window and return to the app.
        </p>
        <Link
          href="/"
          className="heading-caption transition-opacity hover:opacity-60"
        >
          Return home
        </Link>
      </motion.div>
    </main>
  );
}
