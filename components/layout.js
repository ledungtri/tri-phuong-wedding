import Navbar from "./navbar";
import Footer from "./footer";
import WebsiteHeader from "./websiteHeader";
import Background from "./background";

export default function Layout({ children }) {

  return (
    <div className="relative text-beige">
      <WebsiteHeader/>
      <Navbar />

      <Background>
        <main className="text-center content h-max">
          {children}
        </main>
      </Background>
      <Footer />
    </div>
  );
}
