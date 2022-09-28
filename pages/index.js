import { useEffect, useState } from "react";

import Image from "next/future/image";
import Link from "next/link";
import Form from "../components/response/form";
// Image
import bg_desktop from "../public/background.jpg";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [isImageLoading, setIsImageLoading] = useState(true)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsImageLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])
  
  return (
    <div className="xl:bg-wedding_bg xl:z-0 xl:bg-no-repeat xl:bg-cover xl:overflow-hidden xl:px-0 xl:flex xl:items-center xl:flex-col xl:grid-rows-none xl:grid-cols-none xl:h-max xl:gap-0 px-4 h-screen grid gap-4 grid-cols-1 grid-rows-2">
      {/* MAIN PAGE RESPONSIVE */}
      {/* BACKGROUND DESKTOP */}
      <div className="flex xl:flex-col xl:items-center xl:py-2 xl:max-w-7xl xl:h-[70vh] xl:w-full xl:relative">
        
        {isImageLoading ? <div className="hidden appear-desktop xl:flex xl:rounded-xl xl:absolute xl:h-full xl:w-[411px] xl:right-0 xl:left-[34%] xl:animate-pulse xl:ease-linear xl:bg-[#ccc]"></div>
          :
          <Image
          className="hidden appear-desktop xl:flex xl:rounded-xl xl:absolute xl:h-full xl:w-auto xl:right-0 xl:left-[34%]"
          src={bg_desktop}
          alt="bg"
        />}
        <div className="m-auto xl:z-10 xl:my-10">
          <h1 className="xl:text-amber-200 xl:text-4xl loichua uppercase text-3xl font-bold italic flex item-center">
            &ldquo;Hãy đến mà xem&rdquo;
          </h1>
          <p className="xl:text-amber-200 xl:text-xl loichua text-sm font-thin">
            (Ga 1, 39)
          </p>
        </div>
        
      </div>
      {/* RESPONSE */}
      <div className="hidden appear-desktop xl:max-w-7xl xl:flex xl:flex-col xl:w-full xl:items-center xl:justify-center xl:pt-[40px] xl:pb-5">
        <h1 className="xl:text-amber-200 xl:text-4xl xl:uppercase xl:italic xl:font-bold xl:mb-4">
          Phúc Đáp
        </h1>
        <div className="xl:w-[30%] xl:border xl:border-solid xl:border-[#f0e0d8] rounded-lg xl:p-2">
          <Form />
        </div>
      </div>
      {/* MAP */}
      <div className="hidden appear-desktop xl:overflow-hidden xl:rounded-b-2xl xl:max-w-7xl xl:flex xl:flex-col xl:w-full xl:items-center xl:justify-center xl:pt-[20px] xl:pb-10">
        <h1 className="xl:text-amber-200 xl:text-4xl xl:uppercase xl:italic xl:font-bold xl:mb-4">
          Bản Đồ Đường Đi
        </h1>
        <div className="xl:grid xl:gap-4 xl:grid-cols-2 xl:w-full xl:h-[40vh]">
          <div className="xl:text-center">
            <h2 className="xl:text-amber-200 xl:font-bold xl:text-2xl xl:uppercase xl:my-2">Nhà Thờ Mẫu Tâm</h2>
            {loading ? <div className="xl:w-full xl:h-[100%] xl:animate-pulse xl:ease-linear xl:bg-[#ccc]"></div>
            :
              <iframe
              className="w-full h-[100%] rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8278147019746!2d106.70464261538773!3d10.747750192340941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7666e90cd9%3A0x7c0d5a124f8008b3!2sMau%20Tam%20Church!5e0!3m2!1sen!2s!4v1663954587899!5m2!1sen!2s"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>}
          </div>
          <div className="xl:text-center">
            <h2 className="xl:text-amber-200 xl:font-bold xl:text-2xl xl:uppercase xl:my-2">Nhà hàng Crystal Palace</h2>
            {loading ? <div className="xl:w-full xl:h-[100%] xl:animate-pulse xl:ease-linear xl:bg-[#ccc]"></div>
            :
              <iframe
              className="w-full h-[100%] rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.1009417821238!2d106.72143341538758!3d10.726697392355277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f8a74cf73c9%3A0xaa3133b00d64f650!2sMerPerle%20Crystal%20Palace%20Hotel!5e0!3m2!1sen!2s!4v1663954665207!5m2!1sen!2s"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>}
          </div>
        </div>
      </div>

      {/* MOBILE BUTTON */}
      <div className="flex items-end p-5">
        <div className="xl:hidden">
          <button className="button-guide border-solid border-amber-200 text-amber-200 font-bold text-xl capitalize border-[4px] w-[280px] h-[50px] rounded-3xl m-2">
            <Link href="response">PHÚC ĐÁP</Link>
          </button>
          <button className="button-guide border-solid border-amber-200 text-amber-200 font-bold text-xl capitalize border-[4px] w-[280px] h-[50px] rounded-3xl m-2">
            <Link href="map">BẢN ĐỒ ĐƯỜNG ĐI</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
