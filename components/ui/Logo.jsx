import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-[1.6rem] font-bengali font-bold cursor-pointer">
        খাই চাটগাঁ
      </span>
    </Link>
  );
};

export default Logo;
