import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayOut = () => {
  return (
    <div className=" text-customBlack flex flex-col justify-between items-center h-screen">
      <Header />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
