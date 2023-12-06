import React from "react";

export default function Review() {
  return (
    <section id="review">
      <div className="container mx-auto max-w-7xl min-h-[100vh] pt-[85px]">
        <div className="section-title">
          <h2 className="text-4xl font-bold text-100 flex gap-x-6 justify-center">
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Đ
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Á
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                N
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                H
              </span>
            </p>
            <p className="flex gap-x-2">
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                G
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                Í
              </span>
              <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
                A
              </span>
            </p>
          </h2>
          {/* Content  */}
        </div>
        <div>
          {/* Top */}
          <div className=" shadow-md">
            {/* Left  */}
            <div>
              <h2>Đánh Giá Chuyến Đi Của Bạn</h2>
              <span>
                <input
                  type="radio"
                  name="start"
                  className=" before:font-display before:content-['\eeb8'] relative w-[20px] h-[20px] flex justify-center appearance-none before:text-xl"
                />
              </span>
            </div>
            {/* Right  */}
            <div></div>
          </div>
          {/* down */}
        </div>
      </div>
    </section>
  );
}
