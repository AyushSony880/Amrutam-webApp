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
      className=" border-b-2 border-[#C6C1B9] cursor-pointer mt-5   w-[1030px]"
    >
      <h3 className="text-[#666666] py-3   relative text-xl font-medium tracking-widest  ">
        {question}
        <span className="text-2xl  font-light absolute right-5 top-3">
          {showAns && opendTab === id ? icon[1] : icon[0]}
        </span>
      </h3>
      <p
        className={`text-[#4a4a4a]  transition-all  ease-in-out tracking-widest ${
          opendTab === id && showAns
            ? " opacity-100 max-h-40 py-3 "
            : "max-h-0 opacity-0"
        } duration-700  text-[16px] `}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqQuestion;
