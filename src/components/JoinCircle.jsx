import React, { useState } from "react";
import Title from "./Title";
import joinImage1 from "../assets/homePageAssets/joinCircleImage/joinImage1.png";
import joinImage2 from "../assets/homePageAssets/joinCircleImage/joinImage2.png";
import joinImage3 from "../assets/homePageAssets/joinCircleImage/joinImage3.png";
import joinImage4 from "../assets/homePageAssets/joinCircleImage/joinImage4.png";

const JoinCircle = () => {
  const joinCircleDAta = [
    {
      title: "Step 1: Get your referral code",
      text: "Contact us to receive your unique referral code.",
      image: joinImage1,
    },
    {
      title: "Step 2: Register on Amrutam ",
      text: "Sign up on the Amrutam Doctors app or website to join our specialist network.",
      image: joinImage2,
    },
    {
      title: "Step 3: Complete KYC",
      text: "Fill in your details and upload the required documents for verification.",
      image: joinImage3,
    },
    {
      title: "Step 4: Start consulting",
      text: "Once verified, begin offering consultations and helping patients.",
      image: joinImage4,
    },
  ];

  const [boxImage, setBoxImage] = useState(joinImage1);

  return (
    <section>
      <Title
        title={"Join Our Circle of Care"}
        text={"Becoming a part of Amrutam is simple"}
        boxWidth="449"
      />
      <div className="flex flex-col md:flex-row px-5 sm:px-10 mt-3 lg:px-20 items-center justify-between gap-6 md:gap-10">
        <figure className="relative w-full md:max-w-[645px] h-[220px] sm:h-[300px] md:h-[540px] order-1 md:order-2">
          {joinCircleDAta.map((data, i) => (
            <img
              src={data.image}
              alt=""
              key={i}
              className={`absolute top-0 right-0 w-full h-full object-contain rounded-lg transition-opacity duration-700 ease-in-out ${
                boxImage === data.image ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </figure>
        <aside className="w-full md:max-w-[580px] py-6 md:py-16 order-2 md:order-1">
          {joinCircleDAta.map((data, i) => (
            <div
              onMouseEnter={() => setBoxImage(data.image)}
              onMouseLeave={() => setBoxImage(joinImage1)}
              key={i}
              className="mt-3 sm:mt-5 hover:text-[#FFF7E2] text-[#3A643C] w-full px-5 sm:px-8 py-4 sm:py-5 border border-[#33643F80] rounded-lg cursor-pointer duration-700 ease-in-out hover:bg-[#3A643C]"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold">
                {data.title}
              </h3>
              <p className="font-normal text-sm sm:text-[14px]">{data.text}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};

export default JoinCircle;
