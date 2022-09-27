import React from "react";
import Link from "next/link";

function Thank() {
  return (
    <div className="appear-desktop xl:bg-thanks_bg_desk xl:bg-contain xl:bg-no-repeat flex h-screen justify-center bg-thanks_bg bg-cover bg-center">
      <div className="xl:mt-10 mt-[50%]">
        <div className="mb-8">
          <h1 className="text-2xl uppercase italic font-bold xl:text-[#544c48]">
            chân thành cám ơn bạn
          </h1>
        </div>
        <div className="xl:flex xl:items-center xl:justify-center">
          <button className="xl:hidden border-solid border-amber-200 text-amber-200 font-bold text-xl capitalize border-[4px] w-[260px] h-[50px] rounded-3xl m-2 animate-bounce">
            <Link href="map">BẢN ĐỒ ĐƯỜNG ĐI</Link>
          </button>
          <button className="hidden xl:block border-solid border-amber-200 text-amber-200 font-bold text-xl capitalize border-[4px] w-[260px] h-[50px] rounded-3xl m-2 animate-bounce">
            <Link href="/">BẢN ĐỒ ĐƯỜNG ĐI</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Thank;
