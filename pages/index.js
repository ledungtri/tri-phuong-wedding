import Greeting from "../components/greeting";
import Response from "../components/response";
import Map from "../components/map";

export default function Home() {
  const pages = [Greeting, Response, Map]
  return (
    <div className='snap-y snap-mandatory h-screen overflow-y-scroll'>
      {pages.map(page => (
        <section className='snap-start h-screen'>
          {page()}
        </section>
      ))}
    </div>
  );
}
