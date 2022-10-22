import Link from "next/link";
import React from "react";

function Button({href, label, bounce = false}) {
  return (
    <button className={`border-solid border-amber-200 text-amber-200 font-bold text-xl border-[4px] w-[260px] h-[50px] rounded-3xl m-2 ${bounce && 'animate-bounce'}`}>
      <Link href={href}>{label}</Link>
    </button>
  );
}

export default Button;