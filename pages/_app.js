import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const landingPoster =
    "https://genesis-landing-page.s3.eu-west-1.amazonaws.com/Token-v1-without-logo.png";
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={landingPoster} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
