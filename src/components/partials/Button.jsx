import React from "react";

export default function Button({ variant, handleClick, btnText }) {
  const baseClass =
    "py-2 px-3 font-medium rounded-md cursor-pointer hover:brightness-98 active:scale-95";
  const variants = {
    primary: "bg-(--primary-color) text-white",
    outline: "bg-white border",
  };
  return (
    <button
      className={`${baseClass} ${variants[variant]}`}
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
}
