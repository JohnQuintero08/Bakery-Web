import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ className, toogle }) => {
  return (
    <nav
      className={`ml-auto border-b-2 items-center gap-8 py-4 sm:inline-block ${className}`}
    >
      <button onClick={toogle}>
        <NavLink
          className={({ isActive }) =>
            isActive && "underline underline-offset-2"
          }
          to="/"
        >
          HOME
        </NavLink>
      </button>
      <button onClick={toogle}>
        <NavLink
          className={({ isActive }) =>
            isActive && "underline underline-offset-2"
          }
          to="menu"
        >
          MENU
        </NavLink>
      </button>
      <button onClick={toogle}>
        <NavLink
          className={({ isActive }) =>
            isActive && "underline underline-offset-2"
          }
          to="aboutUs"
        >
          SOBRE NOSOTROS
        </NavLink>
      </button>
      <button onClick={toogle}>
        <NavLink
          className={({ isActive }) =>
            isActive && "underline underline-offset-2"
          }
          to="contact"
        >
          CONTACTO
        </NavLink>
      </button>
    </nav>
  );
};

export default NavBar;
