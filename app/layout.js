import "./styles/globals.css";
import "./styles/home.css";

export const metadata = {
  title: "Emptea Studios",
  description: "Conquer horizons.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
