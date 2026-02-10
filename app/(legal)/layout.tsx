import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            {/* Header */}
            <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                <div className="container flex h-16 max-w-screen-2xl items-center px-8">
                    <Link href="/" className="mr-8 flex items-center space-x-2 transition-opacity hover:opacity-80">
                        <span className="text-lg font-bold tracking-tight">Emptea</span>
                        <span className="text-lg font-serif italic tracking-tight">Studios</span>
                    </Link>
                    <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
                        {/* Add navigation links if needed, for now just home link is good */}
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 py-12 md:py-16 lg:py-24">
                <div className="container max-w-3xl px-8">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-border/40 py-6 md:px-8 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} Maruthan Thanabalasingam. All rights reserved.
                    </p>
                    <nav className="flex gap-4 sm:gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/terms-of-service" className="hover:underline underline-offset-4">Terms</Link>
                        <Link href="/privacy-policy" className="hover:underline underline-offset-4">Privacy</Link>
                        <Link href="/eula" className="hover:underline underline-offset-4">EULA</Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
