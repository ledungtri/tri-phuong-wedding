import Greeting from "../components/greeting";

export default function Home() {
  return (
    <section className='h-screen fade-in'>
      <Greeting/>
    </section>
  );

  {/* DESKTOP SNAPSCROLL */}
  {/*<div className='hidden md:block snap-y snap-mandatory h-screen overflow-y-scroll'>*/}
  {/*  <>*/}
  {/*    <section className='snap-start h-screen fade-in'>*/}
  {/*      <Greeting/>*/}
  {/*    </section>*/}

  {/*    <section className='snap-start h-screen fade-in'>*/}
  {/*      <Response/>*/}
  {/*    </section>*/}

  {/*    <div className='sticky bottom-0 flex justify-center'>*/}
  {/*      <IoIosArrowDown size='50' className='animate-bounce fill-white/20'/>*/}
  {/*    </div>*/}

  {/*  </>*/}

  {/*  <section className='snap-start h-screen fade-in'>*/}
  {/*    <Map/>*/}
  {/*  </section>*/}
  {/*</div>*/}
}
