import React from "react";

const IphoneCard = ({ index, title, image }) => {
  return (
    <div className={`flex flex-col  p-5`}>
      <h3
        className={`text-[#3A643C] text-center  text-2xl font-bold  ${
          index % 2 === 0 ? "order-1 mt-8" : "order-2"
        }`}
      >
        {title}
      </h3>
      <img
        className={`w-[260px] flex flex-col p-5 ${
          index % 2 === 0 ? "order-2" : "order-1"
        }`}
        src={image}
      />
    </div>
  );
};

export default IphoneCard;
