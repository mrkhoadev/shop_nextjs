import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hawaii() {
  const ImgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section id="hawaii">
      <div className="min-h-[100vh] pt-[85px] container max-w-7xl mx-auto">
        <div className="section-title">
          <h2 className="text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                H
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                A
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                W
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                A
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                I
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                I
              </span>
            </p>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5 pb-5">
          {ImgArr.map((num, i) => (
            <div className="p-2 bg-[#fff] rounded-md shadow-lg" key={i}>
              <div className="relative group overflow-hidden h-[250px]">
                <div className="px-3 z-10 absolute group-hover:translate-y-[100%] transition-transform bg-[rgba(0,0,0,0.7)] inset-x-0 h-[100%] top-[-100%] flex flex-col gap-4 justify-center items-center">
                  <h4 className="text-100 text-2xl font-bold">Tổng hợp</h4>
                  <p className="text-center text-dark-100">
                    Tổng Hợp Những Bức Ảnh Đẹp Nhất Của Hawaii
                  </p>
                  <Link
                    href={"/"}
                    className=" text-[#fff] bg-yellow py-2 px-4 text-xl border-2 border-yellow hover:bg-200 hover:text-100 transition-colors"
                  >
                    Đặt ngay
                  </Link>
                </div>
                <Image
                  src={`https://code-fullstack-exercise49.vercel.app/hawaii/images/gallery-img-${num}.jpg`}
                  className="w-full h-full z-0"
                  alt="gallery"
                  fill
                  sizes="100%"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
