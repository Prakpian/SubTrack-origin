import { useState, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../partials/Logo";
import Button from "../partials/Button";
import { GoArrowRight } from "react-icons/go";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className={"sticky w-full z-50"}>
      <div className="h-15 place-content-center">
        <div className="flex items-center justify-between w-full">
          <Logo />

          <div className="hidden md:flex gap-2">
            <Link to={"/login"}>
              <Button btnText={"Log in"} variant={"outline"} />
            </Link>
            <Link to={"/signup"}>
              <Button
                btnText={
                  <div className="flex items-center gap-1">
                    Sign up <GoArrowRight />
                  </div>
                }
                variant={"primary"}
              />
            </Link>
          </div>

          <div className="md:hidden">
            {!openMenu ? (
              <MdMenu size={24} onClick={closeMenu} />
            ) : (
              <MdClose size={24} onClick={closeMenu} />
            )}
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="md:hidden bg-gray-100">
          <div className="grid place-items-center py-5 gap-2 font-medium">
            <Link to={"/login"}>LOG IN</Link>
            <Link to={"/signup"}>SIGN UP</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
