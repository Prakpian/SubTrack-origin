import React from "react";

export default function Button({ variant, handleClick, btnText, className }) {
  const baseClass =
    "py-2 px-3 font-medium rounded-md cursor-pointer active:scale-95";
  const variants = {
    primary: "bg-(--primary-color) text-white hover:bg-[#12964f]",
    outline: "bg-white border",
  };
  return (
    <button
      className={`${baseClass} ${variants[variant]} ${className}`}
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
}
