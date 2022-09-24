import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 h-full relative">
      <div>
        <h1 className="uppercase text-3xl font-bold">Please Join Us</h1>
      </div>
      <div>
        <p className="font-semibold my-6">Sub Title</p>
      </div>
      <div className="absolute bottom-[60px] right-0 left-0">
        <button className="border-solid border-amber-200 text-amber-200 font-bold text-xl capitalize border-4 w-[150px] h-[50px] rounded-3xl">
          <Link href='response'>Phúc đáp</Link>
        </button>
      </div>
    </div>
  )
}
