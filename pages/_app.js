import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/products.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>emptea.</title>
        <meta name="description" content="Building a better tomorrow." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
