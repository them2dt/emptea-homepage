import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";

// Load the Satoshi font as specified in the style guide.
const satoshi = localFont({
  src: "./styles/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emptea Studios",
  description: "A software development studio specializing in modern web applications and innovative digital solutions.",
  generator: "Next.js",
  applicationName: "Emptea Studios",
  category: "Technology",
  creator: "Maruthan",
  publisher: "Maruthan",
  authors: [{ name: "Maruthan", url: "https://emptea.xyz" }],
  keywords: [
    "Software Development",
    "Web Applications",
    "Digital Solutions",
    "Technology",
    "Programming",
    "Development Studio",
    "Custom Software",
    "Web Development"
  ],
  metadataBase: new URL("https://emptea.xyz"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Emptea Studios",
    description: "A software development studio specializing in modern web applications and innovative digital solutions.",
    url: "https://emptea.xyz",
    siteName: "Emptea Studios",
    images: [
      {
        url: "/social-image.png",
        width: 1200,
        height: 630,
        alt: "Emptea Studios - Software Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emptea Studios",
    description: "A software development studio specializing in modern web applications and innovative digital solutions.",
    creator: "@maruthan",
    images: ["/social-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },
  manifest: "/site.webmanifest",
};

/**
 * Root layout for the Emptea Studios application.
 * It applies the global stylesheet and the Satoshi font.
 * @param {object} props The properties for the component.
 * @param {React.ReactNode} props.children The content to be rendered within the layout.
 * @returns {JSX.Element} The HTML structure with the base layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
