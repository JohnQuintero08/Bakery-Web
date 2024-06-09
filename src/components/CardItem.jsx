import React from "react";

const CardItem = ({
  title,
  content,
  imagen,
  alt,
  classImage,
  classContainer,
  classText,
}) => {
  return (
    <div className={`grid grid-cols-[1fr_1fr] w-full h-60 ${classContainer}`}>
      <img
        src={imagen}
        alt={alt}
        className={`object-cover w-full h-60 ${classImage}`}
      />
      <div className={`flex items-center justify-center p-4 ${classText}`}>
        <div className="flex flex-col items-center justify-center border-4 p-4 h-full">
          <h4 className="font-title font-bold text-xl">{title}</h4>
          <p className="text-center">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
