import React, { useState } from "react";
import Title from "./Title";
import joinImage1 from "../assets/joinImage1.png";
import joinImage2 from "../assets/joinImage2.png";
import joinImage3 from "../assets/joinImage3.png";
import joinImage4 from "../assets/joinImage4.png";

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
      <div className="flex px-20  items-center justify-around">
        <aside className=" w-[580px] py-20">
          {joinCircleDAta.map((data, i) => (
            <div
              onMouseEnter={() => setBoxImage(data.image)}
              onMouseLeave={() => setBoxImage(joinImage1)}
              key={i}
              className="h-[110px] mt-5 hover:text-[#FFF7E2] text-[#3A643C] w-[578px] px-8 py-7 border border-[#33643F80] rounded-lg cursor-pointer duration-700 ease-in-out hover:bg-[#3A643C]"
            >
              <h3 className="text-xl font-bold">{data.title}</h3>
              <p className="font-normal text-[14px]">{data.text}</p>
            </div>
          ))}
        </aside>

        <figure className="relative w-[645px] h-[540px]">
          {joinCircleDAta.map((data, i) => (
            <img
              src={data.image}
              alt=""
              className={`absolute top-0 right-0-0 w-full h-full object-contain  rounded-lg transition-opacity duration-700 ease-in-out ${
                boxImage === data.image ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </figure>
      </div>
    </section>
  );
};

export default JoinCircle;
