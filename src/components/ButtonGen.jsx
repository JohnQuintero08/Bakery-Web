import React from "react";
import { Link } from "react-router-dom";

const ButtonGen = ({ children, className, to }) => {
  return (
    <Link
      className={`flex items-center justify-center border-4 py-4 w-32 text-lg font-bold ${className}`}
      to={`${to}`}
    >
      <p>{children}</p>
    </Link>
  );
};

export default ButtonGen;
