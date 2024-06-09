import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-customBlack-light p-4">
      <h3 className=" font-title text-2xl">Siguenos</h3>
      <div className="flex gap-2 my-2">
        <button className="w-10 h-10 flex justify-center items-center">
          <FaInstagram style={{ width: "25px", height: "25px" }} />
        </button>
        <button className="w-10 h-10 flex justify-center items-center">
          <FaWhatsapp style={{ width: "25px", height: "25px" }} />
        </button>
      </div>
      <h4 className="mt-1">De Ututuy Pastelería</h4>
    </div>
  );
};

export default Footer;
