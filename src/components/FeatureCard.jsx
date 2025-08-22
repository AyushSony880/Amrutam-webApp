import React from "react";

const FeatureCard = ({ image, title, text, index }) => {
  return (
    <div className="flex w-full mb-10 sm:mb-5 gap-2 flex-col sm:flex-row  items-center justify-between md:justify-around my-7 mt-2 ">
      <figure
        className={`  w-[80%] sm:w-[70%]  px-2 md:p-10 md:max-w-[550px] lg:max-w-[40%] ${
          index % 2 === 0 ? "sm:order-1 order-none self-start sm:self-auto " : "sm:order-2 order-none self-end sm:self-auto "
        }  `}
      >
        <img
          className="object-center "
          src={image}
          alt={title}
          loading="lazy"
        />
      </figure>

      <div
        className={`w-[80%]   sm:max-w-[40%] ${
          index % 2 === 0 ? "sm:order-2 order-none self-end sm:self-auto " : "sm:order-1 order-none self-start sm:self-auto "
        }`}
      >
        <h2 className="text-[#3A643C] md:text-xl lg:text-[28px] font-bold">
          {title}
        </h2>
        <p className="text-xs md:text-sm lg:text-[18px]  font-medium text-[#666666]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
