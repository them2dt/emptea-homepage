import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const title = "emptea — The powerhouse for the businesses of the future";
const description =
  "Three apps for what AI giants won't touch — distribution, operations, and market intelligence.";

export const metadata: Metadata = {
  metadataBase: new URL("https://emptea.xyz"),
  title: {
    default: title,
    template: "%s · emptea",
  },
  description,
  applicationName: "emptea",
  keywords: [
    "emptea",
    "Octo",
    "Aris",
    "Peck",
    "vibecoding",
    "app distribution",
    "app operations",
    "app market intelligence",
    "indie hackers",
    "AI tools",
  ],
  authors: [{ name: "emptea studios" }],
  creator: "emptea studios",
  publisher: "emptea studios",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://emptea.xyz",
    siteName: "emptea",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
