import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Navbar/Footer/Footer";

const Layout = ({ children }) => {
  const { providers } = children.props;
  return (
    <>
      <Head>
        <title>Pamas</title>
        <meta name="description" content="E-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="sticky-top">
        <Navbar providers={providers} />
      </header>
      <main className="d-flex flex-column justify-content-center">
        <div id="page-mask"></div>
        {children}
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Layout;
