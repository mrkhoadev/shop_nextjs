"use client";
import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";

export default function LoginForm() {
  const formBoxRef = useRef(null);
  const formLoginRef = useRef(null);
  const formRegisterRef = useRef(null);
  const [status, setStatus] = useState(false);
  useLayoutEffect(() => {
    if (formBoxRef.current) {
      if (status) {
        formBoxRef.current.style.height = `${
          formRegisterRef.current.clientHeight + 20
        }px`;
        formBoxRef.current.style.width = `${formRegisterRef.current.clientWidth}px`;
      } else {
        formBoxRef.current.style.height = `${
          formLoginRef.current.clientHeight + 20
        }px`;
        formBoxRef.current.style.width = `${formLoginRef.current.clientWidth}px`;
      }
    }
  }, [status]);
  return (
    <div
      className=" bg-light-100 text-light-100 p-5 dark:bg-100 dark:text-dark-100"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex text-3xl font-bold">
        <button
          className={`flex-1 py-2 ${status ? "" : "text-100"}`}
          onClick={() => setStatus(false)}
        >
          Đăng nhập
        </button>{" "}
        <button
          className={`flex-1 py-2 ${status ? "text-100" : ""}`}
          onClick={() => setStatus(true)}
        >
          Đăng ký
        </button>
      </div>
      <div ref={formBoxRef} className=" relative overflow-hidden">
        <form
          className={`flex flex-col gap-y-4 mt-5 absolute transition-transform top-0${
            status ? ` translate-y-[-120%] invisible` : ""
          }`}
          ref={formLoginRef}
        >
          <div>
            <input
              type="text"
              placeholder="Email của bạn"
              className=" w-[500px] border-[#aaa] dark:border-yellow border-1 p-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mật khẩu của bạn"
              className=" w-[500px] border-[#aaa] dark:border-yellow border-1 p-2"
            />
          </div>
          <div className="flex justify-between text-xl px-1 items-center">
            <Link href={"#"} className="text-100">
              Quên mật khẩu?
            </Link>
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="peer/remember"
              hidden
            />
            <label
              htmlFor="remember"
              className="before:inline-block relative before:border-yellow before:border-2 before:w-6 before:mr-2 before:h-6 before:align-middle after:font-display after:left-0  peer-checked/remember:after:content-['\ea41'] after:absolute after:text-2xl after:bottom-[0.5px] select-none"
            >
              Nhớ mật khẩu
            </label>
          </div>
          <button className=" bg-yellow py-2 text-[#fff] dark:text-light-100 font-bold">
            Đăng nhập
          </button>
        </form>
        <form
          className={`flex flex-col gap-y-4 mt-5 top-0 transition-transform ${
            status ? `` : " translate-y-[100%] invisible"
          }`}
          ref={formRegisterRef}
        >
          <div>
            <input
              type="text"
              placeholder="Email của bạn"
              className=" w-[500px] border-[#aaa] dark:border-yellow border-1 p-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mật khẩu của bạn"
              className=" w-[500px] border-[#aaa] dark:border-yellow border-1 p-2"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mật khẩu lại của bạn"
              className=" w-[500px] border-[#aaa] dark:border-yellow border-1 p-2"
            />
          </div>
          <button className="text-[#fff] bg-yellow py-2 dark:text-light-100 font-bold">
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}
