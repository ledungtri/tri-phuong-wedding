import Link from "next/link";

export default function Home() {
  return (
    <div className="my-10 px-4">
      <div>
        <h1 className="uppercase text-3xl font-bold">Hãy đến chung vui với chúng tôi</h1>
      </div>
      <div>
        <p className="font-semibold my-6">Sub Title</p>
      </div>
      <button className="border-solid border-blue-700 border-4 w-[150px] h-[50px] rounded-3xl">
        <Link href='response'>Phúc đáp</Link>
      </button>
    </div>
  )
}
