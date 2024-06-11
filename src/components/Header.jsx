import React, { useState } from "react";
import NavBar from "./NavBar";
import { IoIosMenu } from "react-icons/io";
import logo from "/logo_2.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toogle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="py-4 px-8 sm:px-0 sm:w-3/4 lg:w-[1024px] mx-auto w-full ">
      <div className=" flex items-center  justify-between mb-4 ">
        <Link to="/">
          <img
            src={logo}
            className="w-20 h-20 object-cover"
            alt="logo de Ututuy"
          />
        </Link>
        <button
          onClick={toogle}
          className="w-12 h-12 flex justify-center items-center sm:hidden"
        >
          <IoIosMenu style={{ width: "2rem", height: "2rem" }} />
        </button>
        <NavBar className="hidden sm:flex" />
      </div>
      {isOpen && (
        <NavBar
          className="flex flex-col sm:hidden border-t-2"
          toogle={toogle}
        />
      )}
    </header>
  );
};

export default Header;
