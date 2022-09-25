import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 h-screen grid gap-4 grid-cols-1 grid-rows-2">
      <div className='flex'>
        <div className="m-auto">
          <h1 className="loichua uppercase text-3xl font-bold italic flex item-center">&ldquo;Hãy đến mà xem&rdquo;</h1>
          <p className="loichua text-sm font-thin">(Ga 1, 39)</p>
        </div>
      </div>
      <div className='flex items-end p-5'>
        <div className="">
          <button className="button-guide border-solid border-amber-200 text-amber-200 font-bold text-xl capitalize border-[4px] w-[280px] h-[50px] rounded-3xl m-2">
            <Link href='response'>PHÚC ĐÁP</Link>
          </button>
          <button className="button-guide border-solid border-amber-200 text-amber-200 font-bold text-xl capitalize border-[4px] w-[280px] h-[50px] rounded-3xl m-2">
            <Link href='map'>BẢN ĐỒ ĐƯỜNG ĐI</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
