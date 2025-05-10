import React from "react";

export default function Dropdown({
  text,
  items,
  itemPosiiton = "dropdown-bottom",
  className,
  onClick,
}) {
  return (
    <div className={`dropdown ${itemPosiiton}`}>
      <div
        tabIndex={0}
        role="button"
        className={`btn border-none bg-(--primary-color) rounded-md text-white font-medium ${className}`}
      >
        {text}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 mt-2 shadow-(--box-shadow)"
      >
        {items?.map((item) => {
          return (
            <li key={item.name}>
              <a id={item.value} onClick={onClick}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
