"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";

export default function UserBtn() {
  const [status, setStatus] = useState();
  const handleClick = () => {
    setStatus(true);
  };
  return (
    <>
      <button className="flex" onClick={handleClick}>
        <i className="bx bxs-user"></i>
      </button>
      <div
        className={`fixed inset-x-0 top-0 h-screen overflow-hidden flex justify-center items-center bg-light-500 dark:bg-light-500 transition-transform ${
          status ? "translate-y-[0%]" : "translate-y-[-100%]"
        }`}
        onClick={() => setStatus(false)}
      >
        <LoginForm />
      </div>
    </>
  );
}
