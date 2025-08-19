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
  description: "A software development studio.",
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
