import React from "react";

const FaqQuestion = ({
  setShowAns,
  showAns,
  setOpendTab,
  opendTab,
  id,
  question,
  answer,
  icon,
}) => {
  return (
    <div
      onClick={() => {
        setShowAns(!showAns);
        setOpendTab(id);
      }}
      className="border-b-2 border-[#C6C1B9] cursor-pointer mt-5 
  w-full max-w-[1030px] mx-auto px-3 sm:px-5"
    >
      <div
        className="text-[#666666]  py-3 relative 
  text-base sm:text-lg md:text-xl font-medium  tracking-wide sm:tracking-widest"
      >
        <h3 className=" w-[clamp(300px,70vw,320px)] sm:w-full">{question}</h3>
        <span className="text-xl  inline-block sm:text-2xl font-light absolute right-3 sm:right-5 top-3">
          {showAns && opendTab === id ? icon[1] : icon[0]}
        </span>
      </div>
      <p
        className={`text-[#4a4a4a] transition-all ease-in-out 
    ${
      opendTab === id && showAns
        ? "opacity-100 max-h-40 py-3"
        : "max-h-0 opacity-0"
    } duration-700 text-sm sm:text-[16px] tracking-normal sm:tracking-widest`}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqQuestion;
