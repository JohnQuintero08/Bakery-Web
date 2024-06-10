import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ className, toogle }) => {
  return (
    <nav
      className={`border-b-2 items-center gap-4 py-4 sm:inline-block ${className}`}
    >
      <button onClick={toogle}>
        <NavLink className={({ isActive }) => isActive && "underline"} to="/">
          HOME
        </NavLink>
      </button>
      <button onClick={toogle}>
        <NavLink
          className={({ isActive }) => isActive && "underline"}
          to="menu"
        >
          MENU
        </NavLink>
      </button>
      <button onClick={toogle}>
        <NavLink
          className={({ isActive }) => isActive && "underline"}
          to="aboutUs"
        >
          SOBRE NOSOTROS
        </NavLink>
      </button>
      <button onClick={toogle}>
        <NavLink
          className={({ isActive }) => isActive && "underline"}
          to="contact"
        >
          CONTACTO
        </NavLink>
      </button>
    </nav>
  );
};

export default NavBar;
