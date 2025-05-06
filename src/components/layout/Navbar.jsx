import { useState, useEffect, useContext } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Button from "../Button";
import { GoArrowRight } from "react-icons/go";
import { AuthContext } from "../../context/AuthContext";
import Dropdown from "../Dropdown";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const closeMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className={"sticky w-full z-50 max-w-[1200px] mx-auto px-2"}>
      <div className="min-h-15 mt-2 sm:mt-0 place-content-center">
        <div className="flex flex-col gap-2 mb-4 sm:m-0 sm:flex-row items-center justify-between w-full">
          <Link to={!currentUser.email ? "/" : "/dashboard"}>
            <Logo />
          </Link>

          {!currentUser && (
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
          )}

          {!currentUser && (
            <div className="md:hidden">
              {!openMenu ? (
                <MdMenu size={24} onClick={closeMenu} />
              ) : (
                <MdClose size={24} onClick={closeMenu} />
              )}
            </div>
          )}
          {currentUser && (
            <Dropdown
              text={currentUser.email}
              itemPosiiton="dropdown-bottom dropdown-center sm:dropdown-end"
              items={["Log Out"]}
            />
          )}
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
