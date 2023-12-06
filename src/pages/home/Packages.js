import Image from "next/image";
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
          {/* Item 1 */}
          <div className=" shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden w-[400px] mx-auto bg-[#fff] dark:bg-dark-300">
            <div className="w-full">
              <div className=" relative h-[270px]">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/p-1.jpg"
                  }
                  alt="Packages"
                  fill
                  sizes="100%"
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
          {/* Item 2 */}
          <div className=" shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden w-[400px] mx-auto bg-[#fff] dark:bg-dark-300">
            <div className="w-full">
              <div className=" relative h-[270px]">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/p-2.jpg"
                  }
                  alt="Packages"
                  fill
                  sizes="100%"
                />
              </div>
              <div className="p-5 font-medium">
                <h4 className="text-xl font-bold">
                  <span>
                    <i className="bx bxs-map"></i>
                  </span>{" "}
                  Hawaii
                </h4>
                <span>
                  Hawaii-Hòn Đảo Muôn Màu Và Thiên Đường Của Người Chơi Lướt Ván
                </span>
                <p className="mt-2">Chuyến Đi Dành Cho Gia Đình 5N/6Đ</p>
                <span className="flex text-100 text-2xl mt-1">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </span>
                <span className="block mt-3 text-xl dark:text-100">
                  50.000.000{" "}
                  <span className=" text-sm line-through text-light-200 dark:text-dark-200">
                    65.124.756
                  </span>
                </span>
                <button className="bg-yellow mt-3 py-2 px-5 text-[#fff]">
                  Đặt Ngay
                </button>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className=" shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden w-[400px] mx-auto bg-[#fff] dark:bg-dark-300">
            <div className="w-full">
              <div className=" relative h-[270px]">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/p-3.jpg"
                  }
                  alt="Packages"
                  fill
                  sizes="100%"
                />
              </div>
              <div className="p-5 font-medium">
                <h4 className="text-xl font-bold">
                  <span>
                    <i className="bx bxs-map"></i>
                  </span>{" "}
                  Sydney
                </h4>
                <span>
                  Sydney-Xứ Sở Chuột Túi Và Nhà Hát SYDNEY OPERA HOUSE
                </span>
                <p className="mt-2">Chuyến Đi Dành Cho Gia Đình 2N/3Đ</p>
                <span className="flex text-100 text-2xl mt-1">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </span>
                <span className="block mt-3 text-xl dark:text-100">
                  35.000.000{" "}
                  <span className=" text-sm line-through text-light-200 dark:text-dark-200">
                    43.354.657
                  </span>
                </span>
                <button className="bg-yellow mt-3 py-2 px-5 text-[#fff]">
                  Đặt Ngay
                </button>
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div className=" shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden w-[400px] mx-auto bg-[#fff] dark:bg-dark-300">
            <div className="w-full">
              <div className=" relative h-[270px]">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/p-4.jpg"
                  }
                  alt="Packages"
                  fill
                  sizes="100%"
                />
              </div>
              <div className="p-5 font-medium">
                <h4 className="text-xl font-bold">
                  <span>
                    <i className="bx bxs-map"></i>
                  </span>{" "}
                  Paris
                </h4>
                <span>Paris-Kinh Đô Thời Trang Và Thành Phố Về Đêm</span>
                <p className="mt-2">Chuyến Đi Dành Cho Gia Đình 5N/6Đ</p>
                <span className="flex text-100 text-2xl mt-1">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </span>
                <span className="block mt-3 text-xl dark:text-100">
                  70.000.000{" "}
                  <span className=" text-sm line-through text-light-200 dark:text-dark-200">
                    83.534.978
                  </span>
                </span>
                <button className="bg-yellow mt-3 py-2 px-5 text-[#fff]">
                  Đặt Ngay
                </button>
              </div>
            </div>
          </div>
          {/* Item 5 */}
          <div className=" shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden w-[400px] mx-auto bg-[#fff] dark:bg-dark-300">
            <div className="w-full">
              <div className=" relative h-[270px]">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/p-5.jpg"
                  }
                  alt="Packages"
                  fill
                  sizes="100%"
                />
              </div>
              <div className="p-5 font-medium">
                <h4 className="text-xl font-bold">
                  <span>
                    <i className="bx bxs-map"></i>
                  </span>{" "}
                  Tokyo
                </h4>
                <span>
                  Tokyo-Thủ Đô Có Sư Giao Thoa Hài Hoà Giữa Truyền Thống Và Hiện
                  Đại
                </span>
                <p className="mt-2">Chuyến Đi Tự Túc Cho 1 Người/7Ngày</p>
                <span className="flex text-100 text-2xl mt-1">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </span>
                <span className="block mt-3 text-xl dark:text-100">
                  6.500.000{" "}
                  <span className=" text-sm line-through text-light-200 dark:text-dark-200">
                    10.000.000
                  </span>
                </span>
                <button className="bg-yellow mt-3 py-2 px-5 text-[#fff]">
                  Đặt Ngay
                </button>
              </div>
            </div>
          </div>
          {/* Item 6 */}
          <div className=" shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden w-[400px] mx-auto bg-[#fff] dark:bg-dark-300">
            <div className="w-full">
              <div className=" relative h-[270px]">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/p-6.jpg"
                  }
                  alt="Packages"
                  fill
                  sizes="100%"
                />
              </div>
              <div className="p-5 font-medium">
                <h4 className="text-xl font-bold">
                  <span>
                    <i className="bx bxs-map"></i>
                  </span>{" "}
                  Egypt
                </h4>
                <span>
                  Egypt-Vùng Đất Của Pharaohs Và Kỳ Quan Thế Giới Cổ Đại
                </span>
                <p className="mt-2">Chuyến Đi Dành Cho Đoàn 7-10 Người/7Ngày</p>
                <span className="flex text-100 text-2xl mt-1">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </span>
                <span className="block mt-3 text-xl dark:text-100">
                  48.000.000{" "}
                  <span className=" text-sm line-through text-light-200 dark:text-dark-200">
                    54.346.456
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
