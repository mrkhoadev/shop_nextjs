import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function SearchForm() {
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const [status, setStatus] = useState(false);
  const activeForm = 300;
  const formWidth = 45;

  const handleClick = (e) => {
    e.stopPropagation();
    if (!status) {
      inputRef.current.focus();
      setStatus(true);
    }
  };
  const handleFormBlur = (e) => {
    e.preventDefault();
    if (inputRef.current && status && inputRef.current.value === "") {
      buttonRef.current.style.transitionDelay = "";
      buttonRef.current.style.transitionDuration = "";
      buttonRef.current.style.transform = ``;
      inputRef.current.style.width = `${0}px`;
      inputRef.current.style.paddingRight = `${0}px`;
      setStatus(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (buttonRef.current && inputRef.current) {
      if (status) {
        buttonRef.current.style.transitionDelay = "300ms";
        buttonRef.current.style.transitionDuration = "700ms";
        inputRef.current.style.width = `${activeForm}px`;
        inputRef.current.style.paddingRight = `${formWidth - 10}px`;
        buttonRef.current.style.transform = `translateX(${
          (activeForm - 32) / 2
        }px) rotate(360deg)`;
      }
    }
  }, [status]);
  return (
    <form
      onSubmit={handleSubmit}
      onBlur={handleFormBlur}
      className={
        "transition-width border-3 flex items-center justify-center border-yellow rounded-full p-1 relative min-w-[45px]"
      }
    >
      <input
        type="search"
        placeholder="Tìm kiếm..."
        className={`rounded-full text-lg py-0.5 px-3 transition-width outline-0 text-light-100 bg-[#fff]${
          status ? "" : " w-0"
        }`}
        ref={inputRef}
      />
      <button
        onClick={handleClick}
        className={`bg-yellow text-[#fff] rounded-full p-1 flex items-center justify-center transition-transform absolute`}
        ref={buttonRef}
      >
        <i className="bx bx-search"></i>
      </button>
    </form>
  );
}
