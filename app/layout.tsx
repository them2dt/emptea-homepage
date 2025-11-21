import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "emptea.xyz - Apps by Maru",
  description: "Discover Rise and Penpal - productivity apps designed to help you achieve your goals and connect deeply.",
  keywords: ["productivity", "goals", "apps", "rise", "penpal", "emptea", "mobile apps"],
  authors: [{ name: "Maru" }],
  creator: "Maru",
  publisher: "emptea",
  openGraph: {
    title: "emptea.xyz - Apps by Maru",
    description: "Discover Rise and Penpal - productivity apps designed to help you achieve your goals and connect deeply.",
    url: "https://emptea.xyz",
    siteName: "emptea.xyz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "emptea.xyz - Apps by Maru",
    description: "Discover Rise and Penpal - productivity apps designed to help you achieve your goals and connect deeply.",
    creator: "@maru", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
