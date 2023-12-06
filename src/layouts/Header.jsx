"use client";
import SearchForm from "@/components/SearchForm";
import ThemeBtn from "@/components/ThemeBtn";
import UserBtn from "@/components/UserBtn";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";

export default function Header() {
  const header = useRef(null);
  const headerInner = useRef(null);
  // useLayoutEffect(() => {
  //   if (headerInner.current && header.current) {
  //     header.current.style.height = `${headerInner.current.clientHeight}px`;
  //   }
  // }, [headerInner.current, header.current]);
  return (
    <header className="header relative z-1" ref={header}>
      <div
        className="header-inner fixed inset-x-0 top-0 shadow-md z-10 bg-dark-400 transition-colors text-dark-100"
        ref={headerInner}
      >
        <div className="container max-w-7xl xl:mx-auto flex justify-between items-center p-2 z-2">
          <div className="header-logo">
            <Link href={"#"} className=" text-2xl font-bold">
              <span className="text-100">S</span>TRAVEL
            </Link>
          </div>
          <nav className="header-navbar flex justify-between items-center py-4 px-2">
            <ul className=" flex gap-5 text-xl">
              <li>
                <a href="#">Trang chủ</a>
              </li>
              <li>
                <a href="#book">Đặt lịch</a>
              </li>
              <li>
                <a href="#packages">Ưu đãi</a>
              </li>
              <li>
                <a href="#services">Dịch vụ</a>
              </li>
              <li>
                <a href="#gallery">Thư viện</a>
              </li>
              <li>
                <a href="#review">Đánh giá</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
          </nav>
          <div className="header-button text-2xl flex gap-2 justify-center items-center">
            <SearchForm />
            <ThemeBtn />
            <UserBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
