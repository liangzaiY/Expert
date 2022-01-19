import { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import "antd/dist/antd.css";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document
      .getElementById("__next")
      .addEventListener("touchstart", function () {});
    document.body.addEventListener("touchstart", function () {});
  }, []);

  return (
    <>
      <Head>
        <title>马拉丁</title>
        <link rel="icon" href=""></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
