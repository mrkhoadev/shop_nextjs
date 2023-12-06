import Controls from "@/app/components/home/Controls";
import React from "react";

export default function Home() {
  return (
    <section className="relative h-[100vh] w-full flex justify-center items-center flex-col gap-y-12 min-h-[100vh]">
      <div className=" text-2xl text-[#fff] text-center flex flex-col gap-y-4">
        <h1 className="text-5xl font-bold dark:text-100 transition-colors">
          Mọi chuyến đi đều đáng giá
        </h1>
        <p>Khám phá các vùng đất mới cùng chúng tôi</p>
        <p>Những chuyến đi đang chờ đợi bạn</p>
        <a href="#" className=" bg-yellow w-fit mx-auto py-2 px-5 text-xl">
          Khám phá ngay
        </a>
      </div>
      <Controls />
    </section>
  );
}
