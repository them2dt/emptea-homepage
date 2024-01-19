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
      <Head>
        <title>Emptea Studios</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EmpteaStudios" />
        <meta name="twitter:title" content="Emptea Studios" />
        <meta name="twitter:description" content="Conquer horizons." />
        <meta
          name="twitter:image:alt"
          content="A cover image for the website."
        />
        <meta
          name="twitter:image"
          content="https://bafkreifzxtg23dbae6xw5vsazrwhgbf2h25kymlct4lsgqauxakvs46kfa.ipfs.nftstorage.link/"
        />

        <meta property="og:title" content="Emptea Studios" />
        <meta property="og:description" content="Conquer horizons." />
        <meta
          property="og:image"
          content="https://bafkreifzxtg23dbae6xw5vsazrwhgbf2h25kymlct4lsgqauxakvs46kfa.ipfs.nftstorage.link/"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="500" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
