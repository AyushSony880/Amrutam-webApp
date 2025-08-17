import React from "react";

const FeatureCard = ({ image, title, text, index }) => {
  return (
    <div className="flex w-full  items-center justify-around my-28">
      <figure className={`max-w-[551px] order-${index % 2 === 0 ? "1" : "2"} `}>
        <img
          className="object-center w-full h-auto"
          src={image}
          alt={title}
          loading="lazy"
        />
      </figure>

      <aside className={`max-w-[545px] order-${index % 2 === 0 ? "2" : "1"}`}>
        <h2 className="text-[#3A643C] text-[28px] font-bold">{title}</h2>
        <p className="text-[18px] mt-3 font-medium text-[#666666]">{text}</p>
      </aside>
    </div>
  );
};

export default FeatureCard;
