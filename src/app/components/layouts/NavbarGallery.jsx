import React from "react";

export default function NavbarGallery({ active }) {
  return (
    <ul className=" flex gap-3 text-xl h-full">
      <li className="h-full">
        <a
          href="#home"
          className={`transition-colors px-4 h-full flex items-center justify-center border-b-3 pt-1${
            active === "home"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Tổng hợp
        </a>
      </li>
      <li className="h-full">
        <a
          href="#hawaii"
          className={`transition-colors px-4 h-full flex items-center justify-center border-b-3 pt-1${
            active === "hawaii"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Hawaii
        </a>
      </li>
      <li className="h-full">
        <a
          href="#mumbai"
          className={`transition-colors px-4 h-full flex items-center justify-center border-b-3 pt-1${
            active === "mumbai"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Mumbai
        </a>
      </li>
      <li className="h-full">
        <a
          href="#paris"
          className={`transition-colors px-4 h-full flex items-center justify-center border-b-3 pt-1${
            active === "paris"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Paris
        </a>
      </li>
      <li className="h-full">
        <a
          href="#sydney"
          className={`transition-colors px-4 h-full flex items-center justify-center border-b-3 pt-1${
            active === "sydney"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Sydney
        </a>
      </li>
      <li className="h-full">
        <a
          href="#tokyo"
          className={`transition-colors px-4 h-full flex items-center justify-center border-b-3 pt-1${
            active === "tokyo"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Tokyo
        </a>
      </li>
      <li className="h-full">
        <a
          href="#egypt"
          className={`transition-colors px-4 h-full flex items-center justify-center border-b-3 pt-1${
            active === "egypt"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Tokyo
        </a>
      </li>
    </ul>
  );
}
