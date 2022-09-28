import Link from "next/link";

export default function LinkButton ({ href, label }) {
  return (
    <Link href={href}>
      <button className="border-solid border-amber-200 text-amber-200 font-bold text-xl border-[4px] w-[280px] h-[50px] rounded-3xl m-2">
        {label}
      </button>
    </Link>
  );
}