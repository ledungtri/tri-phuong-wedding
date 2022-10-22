import React from "react";
import Button from "../components/Button";
import Greeting from "../components/greeting";

function ThankYou() {
  return (
    <section className='h-screen fade-in'>
      <div className="w-full flex h-screen justify-center bg-thanks_bg bg-cover bg-center">
        <div className="w-full h-full bg-black/50 flex flex-col place-items-center place-content-around">
          <div>
            <h1 className="text-2xl italic font-bold text-amber-200 mb-8">
              CHÂN THÀNH CẢM ƠN QUÝ KHÁCH
            </h1>
            <Button href='/map' label='BẢN ĐỒ ĐƯỜNG ĐI' bounce/>
          </div>
        </div>
    </div>
    </section>

  );
}

export default ThankYou;
