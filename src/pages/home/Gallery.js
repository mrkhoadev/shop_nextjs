import React from "react";

export default function Gallery() {
  const ImgArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section id="gallery">
      <div className="min-h-[100vh] pt-[85px] container max-w-7xl mx-auto">
        <div className="section-title">
          <h2 className="text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                T
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                H
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Ư
              </span>
            </p>
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                V
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                I
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Ệ
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                N
              </span>
            </p>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5 pb-5">
          {ImgArr.map((num, i) => (
            <div className="p-2 bg-[#fff] rounded-md shadow-lg" key={i}>
              <div className="relative group overflow-hidden">
                <div className="px-3 absolute group-hover:translate-y-[100%] transition-transform bg-[rgba(0,0,0,0.7)] inset-x-0 h-[100%] top-[-100%] flex flex-col gap-4 justify-center items-center">
                  <h4 className="text-100 text-2xl font-bold">Ảnh chụp</h4>
                  <p className="text-center text-dark-100">
                    Những Bức Ảnh Đẹp Nhất Về Chuyến Du Lịch Của Bạn Sẽ Được
                    Chia Sẻ Lên Đây
                  </p>
                  <a
                    href="#"
                    className=" text-[#fff] bg-yellow py-2 px-4 text-xl border-2 border-yellow hover:bg-200 hover:text-100 transition-colors"
                  >
                    Xem Thêm
                  </a>
                </div>
                <img
                  src={`https://code-fullstack-exercise49.vercel.app/images/g-${num}.jpg`}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
