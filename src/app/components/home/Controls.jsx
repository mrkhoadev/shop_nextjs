"use client";
import React, { useState } from "react";

export default function Controls() {
  const [number, setNumber] = useState(1);
  return (
    <>
      <div className=" bg-dark-400 rounded-full p-4 flex gap-x-3">
        <span
          className={`w-[20px] h-[20px] bg-[#fff] inline-block rounded-full${
            number === 1 ? " bg-yellow" : ""
          }`}
          onClick={() => setNumber(1)}
        ></span>
        <span
          className={`w-[20px] h-[20px] bg-[#fff] inline-block rounded-full${
            number === 2 ? " bg-yellow" : ""
          }`}
          onClick={() => setNumber(2)}
        ></span>
        <span
          className={`w-[20px] h-[20px] bg-[#fff] inline-block rounded-full${
            number === 3 ? " bg-yellow" : ""
          }`}
          onClick={() => setNumber(3)}
        ></span>
      </div>
      <div className=" absolute inset-0 overflow-hidden z-[-1] bg-[black]">
        <video
          src={`https://code-fullstack-exercise49.vercel.app/videos/vid-${number}.mp4`}
          loop
          autoPlay
          muted
          className="w-full"
        ></video>
      </div>
    </>
  );
}
