import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ className }) => {
  return (
    <nav
      className={`border-b-2 items-center gap-4 py-4 sm:inline-block ${className}`}
    >
      <NavLink className={({ isActive }) => isActive && "underline"} to="/">
        HOME
      </NavLink>
      <NavLink className={({ isActive }) => isActive && "underline"} to="menu">
        MENU
      </NavLink>
      <NavLink
        className={({ isActive }) => isActive && "underline"}
        to="aboutUs"
      >
        SOBRE NOSOTROS
      </NavLink>
      <NavLink
        className={({ isActive }) => isActive && "underline"}
        to="contact"
      >
        CONTACTO
      </NavLink>
    </nav>
  );
};

export default NavBar;
