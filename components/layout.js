import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="text-center">
      <Head>
        <title>Trí &amp; Phương&#x27;s Wedding</title>
        <link rel="icon" href="/wedding-icon.png" />
      </Head>
      <div className="px-2 py-3 max-w-2xl">
        <div className="bg-wedding_bg bg-contain bg-no-repeat h-[600px] text-white">
          <div className="header">
            <Navbar />
          </div>
          <main className="text-center content">{children}</main>
          <div className="footer">
            <Footer />
          </div>
        </div>

      </div>
    </div>
  );
}
