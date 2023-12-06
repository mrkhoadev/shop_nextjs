import React from "react";
import { FaUtensils } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaPersonHiking } from "react-icons/fa6";

export default function Services() {
  return (
    <section id="services">
      <div className="container max-w-7xl mx-auto min-h-[100vh] flex flex-col justify-center">
        <div className="section-title">
          <h2 className="text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                D
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Ị
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                C
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                H
              </span>
            </p>
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                V
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Ụ
              </span>
            </p>
          </h2>
        </div>
        <div className="section-content mt-12 grid grid-cols-3 gap-4 dark:text-100">
          {/* Item 1 */}
          <div className="text-center hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 transition-colors hover:dark:bg-dark-300">
            <span className="text-100 text-7xl">
              <i className="bx bxs-hotel"></i>
            </span>
            <h3 className="text-3xl font-bold">Nghỉ Dưỡng Cao Cấp</h3>
            <span className="text-light-200 mt-2 block">Some Text...</span>
          </div>
          {/* Item 2 */}
          <div className="text-center hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-end items-center gap-2 transition-colors hover:dark:bg-dark-300">
            <span className="text-100 text-6xl flex justify-center">
              <FaUtensils />
            </span>
            <h3 className="text-3xl font-bold mt-1">Dịch Vụ Ăn Uống</h3>
            <span className="text-light-200 block">Some Text...</span>
          </div>
          {/* Item 3 */}
          <div className="text-center hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-end items-center gap-2 transition-colors hover:dark:bg-dark-300">
            <span className="text-100 text-6xl flex justify-center">
              <FaBullhorn />
            </span>
            <h3 className="text-3xl font-bold mt-1">Chính Sách An Toàn</h3>
            <span className="text-light-200 block">Some Text...</span>
          </div>
          {/* Item 4 */}
          <div className="text-center hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-end items-center gap-2 transition-colors hover:dark:bg-dark-300">
            <span className="text-100 text-6xl flex justify-center">
              <FaGlobeAsia />
            </span>
            <h3 className="text-3xl font-bold mt-1">Rộng Khắp Thế Giới</h3>
            <span className="text-light-200 block">Some Text...</span>
          </div>
          {/* Item 5 */}
          <div className="text-center hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-end items-center gap-2 transition-colors hover:dark:bg-dark-300">
            <span className="text-100 text-6xl flex justify-center">
              <FaPlane />
            </span>
            <h3 className="text-3xl font-bold mt-1">Tốc Độ Cao</h3>
            <span className="text-light-200 block">Some Text...</span>
          </div>
          {/* Item 6 */}
          <div className="text-center hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-end items-center gap-2 transition-colors hover:dark:bg-dark-300">
            <span className="text-100 text-6xl flex justify-center">
              <FaPersonHiking />
            </span>
            <h3 className="text-3xl font-bold mt-1">Tốc Độ Cao</h3>
            <span className="text-light-200 block">Some Text...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
