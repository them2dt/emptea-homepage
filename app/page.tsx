"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/footer";

const ease = [0.22, 1, 0.36, 1] as const;

const works = [
  { name: "Crank", href: "https://getcrank.app" },
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between px-6 md:px-12">
      <div className="mx-auto w-full max-w-[1280px] flex-1 flex flex-col justify-center py-20">
        {/* Studio name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
          className="heading-caption mb-16 md:mb-24"
        >
          emptea studios
        </motion.p>

        {/* Work links */}
        <nav className="space-y-2">
          {works.map((work, i) => (
            <motion.div
              key={work.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
            >
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between border-b border-border py-5 md:py-6 transition-colors hover:border-foreground"
              >
                <span className="text-[2rem] md:text-[3.75rem] font-bold tracking-[-0.025em] leading-none">
                  {work.name}
                </span>
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  &rarr;
                </span>
              </a>
            </motion.div>
          ))}
        </nav>
      </div>

      <Footer />
    </main>
  );
}
