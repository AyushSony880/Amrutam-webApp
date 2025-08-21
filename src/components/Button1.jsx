import React from "react";

const Button1 = ({ text, BtnWidth }) => {
  return (
    <button
      className={`bg-[#3A643C] cursor-pointer text-center text-[#FFFFFF] rounded-xl text-xl  px-9 py-2 lg:py-3.5 mt-5 lg:mt-10 font-medium md:font-bold lg:w-[${BtnWidth}px]`}
    >
      {text}
    </button>
  );
};

export default Button1;
