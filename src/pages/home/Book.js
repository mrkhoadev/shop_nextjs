import React from "react";

export default function Book() {
  return (
    <section
      className="h-screen min-h-[740px] container max-w-7xl mx-auto flex flex-col items-center justify-end gap-y-4 pb-5"
      id="book"
    >
      <div className="section-title">
        <h2 className="text-4xl font-bold text-100 flex gap-x-6">
          <p className="flex gap-x-2">
            <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
              T
            </span>
            <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
              Ì
            </span>
            <span className="bg-200 py-2 w-[50px] text-center rounded-lg">
              M
            </span>
          </p>
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
      <div className="flex flex-row justify-center items-center gap-x-10">
        <div className="section-image">
          <img
            src={
              "https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
            }
            style={{ width: "500px", height: "500px" }}
          />
        </div>
        <div className="section-formBox">
          <form className="p-5 shadow-[0_0px_15px_1px_rgba(0,0,0,0.1)] rounded-md text-light-200 flex flex-col gap-y-4 text-md">
            <div className="item">
              <label htmlFor="email" className=" block font-bold">
                Hãy Liên Hệ Với Tôi Bằng :
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd] mt-2"
                placeholder="Email hoặc Số điện thoại"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="maps" className=" block font-bold">
                Tôi Muốn Đến :
              </label>
              <select
                name=""
                id=""
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd]"
              >
                <option value="1">Việt Nam</option>
              </select>
              <input
                type="text"
                name="maps"
                id="maps"
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd]"
                placeholder="Địa điểm chính xác"
              />
            </div>
            <div className="item">
              <label htmlFor="number" className=" block font-bold">
                Chúng Tôi Có :
              </label>
              <input
                type="number"
                name="number"
                id="number"
                min={1}
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd] mt-2"
                placeholder="Số người"
              />
            </div>
            <div className="item">
              <label htmlFor="start" className=" block font-bold">
                Bắt Đầu Từ :
              </label>
              <input
                type="date"
                name="start"
                id="start"
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd] mt-2"
                placeholder="Bắt đầu từ"
              />
            </div>
            <div className="item">
              <label htmlFor="end" className=" block font-bold">
                Kết Thúc Vào :
              </label>
              <input
                type="date"
                name="end"
                id="end"
                className="w-[500px] px-2 py-1.5 border-1 border-[#ddd] mt-2"
                placeholder="Bắt đầu từ"
              />
            </div>
            <button
              type="button"
              className="bg-yellow border-2 border-transparent text-[#fff] w-fit px-7 py-2 hover:bg-200 hover:border-yellow hover:text-100"
            >
              Tìm Ngay
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
