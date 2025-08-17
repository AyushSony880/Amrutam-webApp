import React from "react";

const FooterInfoList = ({ title, arrayList }) => {
  return (
    <div>
      <h3 className="text-[28px] font-semibold text-[#33643F] py-3">{title}</h3>
      {arrayList.map((info) => (
        <p className="text-xl font-medium text-[#4C4C4C] w-[354px] pt-2">
          {info}
        </p>
      ))}
    </div>
  );
};

export default FooterInfoList;
