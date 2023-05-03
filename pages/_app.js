import React from "react";
import Head from "next/head";

import "../styles/globals.css";
import "../styles/tabs.css";
import "../styles/home.css";
import "../styles/tabs-mobile.css";
import "../styles/home-mobile.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>emptea</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="emptea" />
        <meta name="twitter:creator" content="@emptea" />
        <meta name="twitter:title" content="emptea." />
        <meta
          name="twitter:description"
          content="Building the next generation of products and services."
        />
        <meta
          name="twitter:image:src"
          content="https://bafkreicsctvtrwky6csbllm4dxox3634sj5wykbrx2ifhcdhymmuypcjae.ipfs.nftstorage.link/"
        />
        <meta name="title" content="emptea" />
        <meta
          name="description"
          content="Building the next generation of products & services."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
