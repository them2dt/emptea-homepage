import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/home.css";

export const metadata = {
  title: "Emptea Studios",
  description: "Building usable apps for Solana.",
  openGraph: {
    title: "Emptea Studios",
    description: "Building usable apps for Solana.",
    url: "https://emptea.xyz",
    siteName: "Emptea Studios",
    images: [
      {
        url: "https://raw.githubusercontent.com/them2dt/emptea-seo-resources/76debb23e6028f9a6c2512f3f410723f0ab837ae/og-image.png.png",
        width: "1000",
        height: "500",
        alt: "Emptea Studios - Building usable apps for Solana"
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emptea Studios",
    description: "Building usable apps for Solana.",
    creator: "@them2dt",
    site: "@empteastudios",
    images: ["https://raw.githubusercontent.com/them2dt/emptea-seo-resources/76debb23e6028f9a6c2512f3f410723f0ab837ae/og-image.png.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
