import React from "react";
import { TbSquareMinusFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-1">
        <TbSquareMinusFilled size={28} className="text-(--primary-color)" />
        <p className="text-2xl font-bold">SubTrack</p>
      </div>
    </Link>
  );
}
