"use client";
import NavbarGallery from "@/app/components/layouts/NavbarGallery";
import NavbarHome from "@/app/components/layouts/NavbarHome";
import SearchForm from "@/components/SearchForm";
import ThemeBtn from "@/components/ThemeBtn";
import UserBtn from "@/components/UserBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [path, setPath] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let found = false;

      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height && !found) {
          setActiveSection(id);
          found = true;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const newPath = pathname.split("/");
    setPath(newPath[1]);
  }, [pathname]);
  return (
    <header className="header relative z-20">
      <div className="header-inner fixed inset-x-0 top-0 shadow-md z-10 bg-dark-400 transition-colors text-dark-100">
        <div className="container max-w-7xl xl:mx-auto flex justify-between items-center z-2">
          <div className="header-logo">
            <Link href={"/"} className=" text-2xl font-bold">
              <span className="text-100">S</span>TRAVEL
            </Link>
          </div>
          <nav className="header-navbar flex justify-between items-center h-[70px] px-2">
            {/* {element ? element : "Lỗi rồi :<"} */}
            {path === "gallery" ? (
              <NavbarGallery active={activeSection} />
            ) : (
              <NavbarHome active={activeSection} />
            )}
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
