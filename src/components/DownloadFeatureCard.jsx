import React from "react";

const DownloadFeatureCard = ({ image, text }) => {
  return (
    <div className="h-[60px] justify-between flex items-center w-[270px] border border-[#9E9E9E] p-2 rounded-xl">
      <img src={image} alt="icon" className="w-11 h-11 object-contain" />
      <p className="text-[#33643F]  w-[180px] text-[16px]  font-medium">
        {text}
      </p>
    </div>
  );
};

export default DownloadFeatureCard;
