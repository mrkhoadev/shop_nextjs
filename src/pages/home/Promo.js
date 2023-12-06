import Image from "next/image";
import React from "react";

export default function Promo() {
  return (
    <section id="promo">
      <div className="container max-w-7xl mx-auto min-h-screen flex flex-col justify-center gap-y-5 pt-12">
        <div className="section-title">
          <h2 className="text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                C
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                H
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                O
              </span>
            </p>
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                B
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Ạ
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                N
              </span>
            </p>
          </h2>
        </div>
        <div className=" shadow-[0_0_2px_1px_rgba(0,0,0,0.1)] w-[500px] mx-auto bg-light-200 dark:bg-dark-300">
          <div className="w-full">
            <div>
              <Image
                src={
                  "https://code-fullstack-exercise49.vercel.app/mumbai/images/home-bg.jpg"
                }
                alt="promo"
                width={500}
                height={250}
              />
            </div>
            <div className="p-5 font-medium">
              <h4 className="text-xl font-bold">
                <span>
                  <i className="bx bxs-map"></i>
                </span>{" "}
                Mumbai
              </h4>
              <span>Thành Phố Có Tất Cả</span>
              <p className="mt-2">Ưu Đãi 30.000.000 Cho 5người/3ngày</p>
              <span className="flex text-100 text-2xl mt-1">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </span>
              <button className="bg-yellow mt-3 py-2 px-5 text-[#fff]">
                Đặt Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
