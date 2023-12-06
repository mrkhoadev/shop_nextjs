import React from "react";

export default function NavbarHome({ active }) {
  return (
    <ul className="flex gap-2 text-xl h-full">
      <li className="h-full">
        <a
          href="#home"
          className={`transition-colors px-2 h-full flex items-center justify-center border-b-4 pt-1${
            active === "home" || active === null
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#e09b466c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Trang chủ
        </a>
      </li>
      <li className="h-full">
        <a
          href="#book"
          className={`transition-colors px-2 h-full flex items-center justify-center border-b-4 pt-1${
            active === "book"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#e09b466c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Đặt lịch
        </a>
      </li>
      <li className="h-full">
        <a
          href="#packages"
          className={`transition-colors px-2 h-full flex items-center justify-center border-b-4 pt-1${
            active === "packages"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Ưu đãi
        </a>
      </li>
      <li className="h-full">
        <a
          href="#services"
          className={`transition-colors px-2 h-full flex items-center justify-center border-b-4 pt-1${
            active === "services"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Dịch vụ
        </a>
      </li>
      <li className="h-full">
        <a
          href="#gallery"
          className={`transition-colors px-2 h-full flex items-center justify-center border-b-4 pt-1${
            active === "gallery"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Thư viện
        </a>
      </li>
      <li className="h-full">
        <a
          href="#review"
          className={`transition-colors px-2 h-full flex items-center justify-center border-b-4 pt-1${
            active === "review"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Đánh giá
        </a>
      </li>
      <li className="h-full">
        <a
          href="#contact"
          className={`transition-colors px-2 h-full flex items-center justify-center border-b-4 pt-1${
            active === "contact"
              ? " text-100 border-yellow bg-gradient-to-b from-[#e8c1910a] to-[#cd8c3d6c]"
              : " border-[transparent]"
          } hover:border-yellow hover:text-100`}
        >
          Liên hệ
        </a>
      </li>
    </ul>
  );
}
