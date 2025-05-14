import React from "react";

export default function Button({
  variant,
  handleClick,
  btnText,
  className,
  type,
}) {
  const baseClass =
    "py-2 px-3 font-medium rounded-md cursor-pointer active:scale-95";
  const variants = {
    primary: "bg-(--primary-color) text-white hover:bg-[#12964f]",
    danger: "bg-(--danger) text-white hover:bg-[#d90303]",
    outline: "bg-white border hover:bg-[#f0f0f0]",
  };
  return (
    <button
      className={`${baseClass} ${variants[variant]} ${className}`}
      onClick={handleClick}
      type={type}
    >
      {btnText}
    </button>
  );
}
