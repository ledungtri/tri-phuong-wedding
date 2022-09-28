import Navbar from "./navbar";
import Footer from "./footer";
import WebsiteHeader from "./response/websiteHeader";
import BackgroundWrapper from "./backgroundWrapper";

export default function Layout({ children }) {

  return (
    <div className="relative text-white">
      <WebsiteHeader/>
      <Navbar />

      <BackgroundWrapper>
        <main className="text-center content h-max">{children}</main>
      </BackgroundWrapper>

      <Footer />
    </div>
  );
}
