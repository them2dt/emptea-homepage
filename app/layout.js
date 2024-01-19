import "./styles/globals.css";
import "./styles/intro.css";
import "./styles/about.css";
import "./styles/team.css";
import "./styles/collabs.css";
import "./styles/footer.css";

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
