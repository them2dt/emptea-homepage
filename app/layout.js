import "./styles/globals.css";
import "./styles/navbar.css";
import "./styles/home.css";

export const metadata = {
  title: "Emptea Studios",
  description: "Conquer horizons.",
  openGraph: {
    title: "Emptea Studios",
    description: "Conquer horizons.",
    url: "https://emptea.xyz",
    siteName: "Emptea Studios",
    images: [
      {
        url: "/og-image.png",
        width: "1000",
        height: "500",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emptea Studios.",
    description: "Conquer horizons.",
    creator: "@EmpteaStudios",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
