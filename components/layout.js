import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { useTransition } from "react";

export default function Layout({ children }) {

  return (
    <div className="overflow-hidden relative text-white">
      <Head>
        <title>Trí &amp; Phương&#x27;s Wedding</title>
        <link rel="icon" href="/wedding-icon.png" />
      </Head>
      <div className="max-w-1xl">
        <div className="bg-wedding_bg bg-cover bg-center bg-no-repeat h-screen">
          <div className="h-screen bg-black/40">
            <Navbar />
            <main className="text-center content">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
