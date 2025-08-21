import React from "react";

const FeatureCard = ({ image, title, text, index }) => {
  return (
    <div className="flex w-full mb-10 sm:mb-5 gap-2 flex-col sm:flex-row  items-center justify-between md:justify-around my-7 sm:my-12 lg:my-28">
      <figure
        className={` w-[80%] sm:w-[70%] md:max-w-1/2 ${
          index % 2 === 0 ? "sm:order-1 order-none" : "sm:order-2 order-none"
        }  `}
      >
        <img
          className="object-center w-full h-auto"
          src={image}
          alt={title}
          loading="lazy"
        />
      </figure>

      <div
        className={`w-[80%] sm:max-w-[40%] ${
          index % 2 === 0 ? "sm:order-2 order-none" : "sm:order-1 order-none"
        }`}
      >
        <h2 className="text-[#3A643C] md:text-xl lg:text-[28px] font-bold">
          {title}
        </h2>
        <p className="text-xs md:text-sm lg:text-[18px] mt-3 font-medium text-[#666666]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
