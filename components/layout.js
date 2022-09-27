import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { useTransition } from "react";

export default function Layout({ children }) {

  return (
    <div className="overflow-hidden xl:overflow-auto relative text-white">
      <Head>
        <title>Trí &amp; Phương&#x27;s Wedding</title>
        <link rel="icon" href="/wedding-icon.png" />
      </Head>
      <div className="max-w-1xl tracking-wider">
        <div className="md:bg-wedding_bg bg-wedding_bg_phone bg-cover bg-center bg-no-repeat h-screen xl:bg-none">
          <div className="h-screen bg-black/40 xl:bg-white xl:h-max">
            <div className="xl:hidden">
              <Navbar />
            </div>
            <main className="text-center content xl:text-black xl:h-max">{children}</main>
            <div className="xl:text-black">
              <Footer />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
