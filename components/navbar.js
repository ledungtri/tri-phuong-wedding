import Link from "next/link";

export default function Navbar() {
  return (
    <div className="header h-14 md:h-20 text-2xl font-semibold bg-gradient-to-b from-white/80 fixed inset-x-0 text-white">
      <div className="h-full flex items-center ml-3">
        <Link href='/'>
          Trí &amp; Phương&#x27;s Wedding
        </Link>
      </div>
    </div>
  )
}