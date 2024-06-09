import React from "react";

const ImgMainHome = ({ image, alt, className }) => {
  return (
    <img
      className={`object-cover w-full h-64 sm:max-w-96 ${className}`}
      src={image}
      alt={alt}
    />
  );
};

export default ImgMainHome;
