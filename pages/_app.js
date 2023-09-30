import "../styles/globals.css";
import "../styles/home.css";
import "../styles/atelier.css";

import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Emptea</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Emptea" />
        <meta name="twitter:title" content="Emptea" />
        <meta name="twitter:description" content="Building dreams.  " />
        <meta
          name="twitter:image"
          content="https://bafkreicvmlugn7gqyxl3vmk5usuqk2klotzlbwvvvbdsselsgkbbwrohui.ipfs.nftstorage.link/"
        />

        <meta property="og:title" content="Emptea" />
        <meta property="og:description" content="Building dreams." />
        <meta
          property="og:image"
          content="https://bafkreicvmlugn7gqyxl3vmk5usuqk2klotzlbwvvvbdsselsgkbbwrohui.ipfs.nftstorage.link/"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
