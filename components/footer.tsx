import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 pb-8 pt-0">
      <div className="mx-auto max-w-[1280px]">
        <div className="h-px w-full bg-border" />
        <nav className="flex justify-center gap-6 pt-6">
          <Link
            href="/terms-of-service"
            className="heading-caption transition-opacity hover:opacity-60"
          >
            Terms
          </Link>
          <Link
            href="/privacy-policy"
            className="heading-caption transition-opacity hover:opacity-60"
          >
            Privacy
          </Link>
          <Link
            href="/eula"
            className="heading-caption transition-opacity hover:opacity-60"
          >
            EULA
          </Link>
        </nav>
      </div>
    </footer>
  );
}
