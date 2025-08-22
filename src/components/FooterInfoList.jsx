import React from "react";

const FooterInfoList = ({ title, arrayList }) => {
  return (
    <div className="px-2 lg:max-w-[400px]  sm:px-4 md:px-6">
      <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#33643F] py-2 sm:py-3">
        {title}
      </h3>
      {arrayList.map((info, i) => (
        <p
          key={i}
          className="text-base sm:text-lg md:text-xl font-medium text-[#4C4C4C] w-full  pt-1 sm:pt-2"
        >
          {info}
        </p>
      ))}
    </div>
  );
};

export default FooterInfoList;
