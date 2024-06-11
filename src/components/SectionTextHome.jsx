import React from "react";

const SectionTextHome = ({ title, children }) => {
  return (
    <section className=" my-20 mx-16 sm:mx-0 sm:w-3/4 lg:w-[1024px] flex flex-col items-center  ">
      <h2 className=" font-title text-3xl">{title}</h2>
      <span className="border-b-2 w-1/2 my-4"></span>
      <p className="text-center">{children}</p>
    </section>
  );
};

export default SectionTextHome;
