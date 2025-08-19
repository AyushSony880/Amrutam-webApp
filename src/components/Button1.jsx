import React from "react";

const Button1 = ({ text, BtnWidth }) => {
  return (
    <button
      className={`bg-[#3A643C] text-center text-[#FFFFFF] rounded-xl text-xl py-3.5 mt-10 font-bold w-[${BtnWidth}px]`}
    >
      {text}
    </button>
  );
};

export default Button1;
