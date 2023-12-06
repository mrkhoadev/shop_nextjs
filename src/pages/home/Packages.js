import React from "react";

export default function Packages() {
  return (
    <section id="packages">
      <div className="container max-w-7xl mx-auto min-h-[100vh] pt-[85px]">
        <div className="section-title">
          <h2 className="text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Ư
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                U
              </span>
            </p>
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Đ
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Ã
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                I
              </span>
            </p>
          </h2>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-x-3 gap-y-7">
          <div className=" shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden w-[400px] mx-auto bg-light-200 dark:bg-dark-300">
            <div className="w-full">
              <div>
                <img
                  src={
                    "https://code-fullstack-exercise49.vercel.app/mumbai/images/home-bg.jpg"
                  }
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
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
                <span className="block mt-3 text-xl dark:text-100">
                  30.000.000{" "}
                  <span className=" text-sm line-through text-light-200 dark:text-dark-200">
                    52.845.245
                  </span>
                </span>
                <button className="bg-yellow mt-3 py-2 px-5 text-[#fff]">
                  Đặt Ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
