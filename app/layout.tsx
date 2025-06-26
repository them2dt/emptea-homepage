import "./styles/globals.css";

export const metadata = {
  metadataBase: new URL('https://emptea.xyz'),
  title: {
    template: '%s | Emptea Studios',
    default: 'Emptea Studios | Custom Software Development & Design',
  },
  description: "Emptea Studios is a software agency specializing in crafting high-performance, scalable web and mobile applications with precision and transparent communication.",
  keywords: ["software agency", "web development", "mobile app development", "UI/UX design", "custom software", "product design", "React", "Next.js"],
  authors: [{ name: "Emptea Studios", url: "https://emptea.xyz" }],
  creator: "Emptea Studios",
  publisher: "Emptea Studios",
  robots: "index, follow",
  
  // Updated OpenGraph metadata with correct paths
  openGraph: {
    title: "Emptea Studios | Custom Software Development & Design",
    description: "Emptea Studios is a software agency specializing in crafting high-performance, scalable web and mobile applications with precision and transparent communication.",
    url: "https://emptea.xyz",
    siteName: "Emptea Studios",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Updated path to actual file location
        width: 1200,
        height: 630,
        alt: "Emptea Studios - Custom Software Development"
      },
      {
        url: "/android-chrome-512x512.png", // Using existing square image
        width: 512,
        height: 512,
        alt: "Emptea Studios Logo"
      }
    ],
  },
  
  // Updated Twitter metadata with correct paths
  twitter: {
    card: "summary_large_image",
    title: "Emptea Studios | Custom Software Development & Design",
    description: "Emptea Studios is a software agency specializing in crafting high-performance, scalable web and mobile applications with precision and transparent communication.",
    creator: "@them2dt",
    site: "@empteastudios",
    images: ["/og-image.png"], // Using OG image for Twitter
  },
  
  // Updated icons with correct paths
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
    other: [
      { 
        rel: "manifest", 
        url: "/site.webmanifest" 
      }
    ]
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://emptea.xyz"
  },
  
  // Verification for search engines (mock values)
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
