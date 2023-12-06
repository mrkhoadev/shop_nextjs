import Image from "next/image";
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
        <div className="mt-5">
          {/* Top */}
          <div className=" shadow-md p-5 dark:bg-dark-300 flex justify-center items-center">
            {/* Left  */}
            <div className="flex-1">
              <h2 className="text-100 text-3xl font-medium text-center">
                Đánh Giá Chuyến Đi Của Bạn
              </h2>
              <span className="flex mx-auto w-fit mt-5">
                <input
                  type="radio"
                  name="start"
                  className="before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[100%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
                <input
                  type="radio"
                  name="start"
                  className=" before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[0%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
                <input
                  type="radio"
                  name="start"
                  className="before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[100%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
                <input
                  type="radio"
                  name="start"
                  className=" before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[0%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
                <input
                  type="radio"
                  name="start"
                  className="before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[100%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
                <input
                  type="radio"
                  name="start"
                  className=" before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[0%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
                <input
                  type="radio"
                  name="start"
                  className="before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[100%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
                <input
                  type="radio"
                  name="start"
                  className=" before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[0%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
                <input
                  type="radio"
                  name="start"
                  className="before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[100%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
                <input
                  type="radio"
                  name="start"
                  className=" before:font-display before:content-['\eeb8'] relative w-[20px] flex justify-center h-[40px] appearance-none before:text-3xl before:absolute before:left-[0%] before:translate-x-[-50%] overflow-hidden before:text-[#aaa]"
                />
              </span>
            </div>
            {/* Right  */}
            <div className="flex-[1_1_350px] bg-[#fff] transition-colors dark:bg-dark-300">
              <form className="w-full p-3 ">
                <textarea
                  className="resize-none w-full outline-none border-2 border-yellow p-3 min-h-[150px] text-xl"
                  placeholder="Viết đánh giá của bạn"
                ></textarea>
                <button className="bg-yellow text-[#fff] w-full py-2 mt-3 text-lg">
                  Gửi tới chúng tôi
                </button>
              </form>
            </div>
          </div>
          {/* down */}
          <div className="section-content mt-4 grid grid-cols-3 gap-4 dark:text-100">
            {/* Item 1 */}
            <div className="text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 transition-colors dark:bg-dark-300">
              <div className="h-[120px] w-[120px] rounded-full overflow-hidden mx-auto relative">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/pic1.png"
                  }
                  fill
                  sizes="100%"
                  alt="anh"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold mt-4">Some People</h3>
              <span className="text-light-200 mt-2 block">Some Text...</span>
            </div>
            {/* Item 2 */}
            <div className="text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 transition-colors dark:bg-dark-300">
              <div className="h-[120px] w-[120px] rounded-full overflow-hidden mx-auto relative">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/pic2.png"
                  }
                  fill
                  sizes="100%"
                  alt="anh"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold mt-4">Some People</h3>
              <span className="text-light-200 mt-2 block">Some Text...</span>
            </div>
            {/* Item 3 */}
            <div className="text-center shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] p-6 transition-colors dark:bg-dark-300">
              <div className="h-[120px] w-[120px] rounded-full overflow-hidden mx-auto relative">
                <Image
                  src={
                    "https://code-fullstack-exercise49.vercel.app/images/pic3.png"
                  }
                  fill
                  sizes="100%"
                  alt="anh"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold mt-4">Some People</h3>
              <span className="text-light-200 mt-2 block">Some Text...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
