import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { useTransition } from "react";

export default function Layout({ children }) {

  return (
    <div className="overflow-hidden relative">
      <Head>
        <title>Trí &amp; Phương&#x27;s Wedding</title>
        <link rel="icon" href="/wedding-icon.png" />
      </Head>
      <div className="max-w-1xl">
              <div className="select-none bg-wedding_bg bg-cover bg-right bg-no-repeat h-[100vh] w-full absolute z-[-1]">
              </div>
          <div className="h-[100vh] text-white z-10 bg-black/40">
            <div className="header h-[10%] select-none">
              <Navbar />
            </div>
            <main className="text-center content h-[80%] mt-4">{children}</main>
            <div className="footer h-[10%] select-none">
              <Footer />
            </div>
          </div>
      </div>
    </div>
  );
}
