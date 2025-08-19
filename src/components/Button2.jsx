import React from "react";

const Button2 = ({ text, BtnWidth, tabFn, isActive }) => {
  return (
    <button
      onClick={tabFn}
      className={` ${
        isActive
          ? "text-[#FFFFFF] bg-[#3A643C] "
          : "bg-[#FFF7E2] text-[#3A643C]"
      } border border-[#3A643C]  text-center cursor-pointer  rounded-xl text-xl py-3 px-4 mt-10 font-normal w-[${BtnWidth}px]`}
    >
      {text}
    </button>
  );
};

export default Button2;
