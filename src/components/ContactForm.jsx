"use client";
import React from "react";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex-[1_0_180px] bg-[#fff] rounded-lg shadow-lg dark:bg-dark-300 px-5 py-7 flex flex-col gap-y-4"
    >
      <div className="flex gap-x-5">
        <input
          className="flex-1 border-2 border-yellow p-2 outline-none"
          type="text"
          name="name"
          placeholder="Tên của bạn"
        />
        <input
          className="flex-1 border-2 border-yellow p-2 outline-none"
          type="email"
          name="email"
          placeholder="Email liên hệ"
        />
      </div>
      <div className="flex gap-x-5">
        <input
          type="number"
          name="number-phone"
          placeholder="Số điện thoại"
          className="flex-1 border-2 border-yellow p-2 outline-none"
        />
        <input
          type="text"
          name="theme"
          placeholder="Chủ đề"
          className="flex-1 border-2 border-yellow p-2 outline-none"
        />
      </div>
      <div>
        <textarea
          className=" resize-none w-full border-2 h-[150px] border-yellow p-2 outline-none "
          name="message"
          placeholder="Viết lời nhắn của bạn"
        ></textarea>
      </div>
      <button className="bg-yellow w-fit py-3 px-6 text-[#FFF]">
        Gửi tới chúng tôi
      </button>
    </form>
  );
}
