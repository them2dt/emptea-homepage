import Link from "next/link";
import { Footer } from "@/components/footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-[680px] items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-bold tracking-[-0.02em] text-foreground"
          >
            emptea studios
          </Link>
          <Link
            href="/"
            className="link-hover text-sm text-muted-foreground"
          >
            Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-[680px] px-6">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
