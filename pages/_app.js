import Head from "next/head";
import React from "react";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>My Blog</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
