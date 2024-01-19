import "./styles/globals.css";
import "./styles/intro.css";
import "./styles/about.css";
import "./styles/team.css";
import "./styles/collabs.css";
import "./styles/footer.css";

import Head from "next/head";

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
        url: "https://bafkreifzxtg23dbae6xw5vsazrwhgbf2h25kymlct4lsgqauxakvs46kfa.ipfs.nftstorage.link/",
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
    images: ["https://bafkreifzxtg23dbae6xw5vsazrwhgbf2h25kymlct4lsgqauxakvs46kfa.ipfs.nftstorage.link/"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
