import Link from "next/link";

export default function Navbar() {
  return (
    <div className="header h-32 text-4xl md:text-6xl windSong fixed inset-x-0 text-white">
      <div className="h-full flex items-center justify-center ml-3">
        <Link href='/'>
          Trí &amp; Phương&#x27;s Wedding
        </Link>
      </div>
    </div>
  )
}