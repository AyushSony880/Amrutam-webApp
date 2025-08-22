import { useEffect, useState } from "react";
import iphone1 from "../assets/ConsultationsImage/iphone1.svg";
import iphone2 from "../assets/ConsultationsImage/iphone2.svg";
import iphone3 from "../assets/ConsultationsImage/iphone3.svg";
import iphone4 from "../assets/ConsultationsImage/iphone4.png";
import iphone5 from "../assets/ConsultationsImage/iphone5.png";
import iphone6 from "../assets/ConsultationsImage/iphone6.png";
import iphone7 from "../assets/ConsultationsImage/iphone7.png";
import iphone8 from "../assets/ConsultationsImage/iphone8.png";
import iphone9 from "../assets/ConsultationsImage/iphone9.png";
import Button2 from "./Button2";
import IphoneCard from "./IphoneCard";
import Button1 from "./Button1";

const Consultation = () => {
  const [tab, setTab] = useState("Consultations");

  const dataMap = {
    Consultations: [
      { title: "Value Your Practice", image: iphone1 },
      { title: "Today's Healing Journey", image: iphone2 },
      { title: "Consultation Details", image: iphone3 },
    ],
    Payment: [
      { title: "Your Earnings", image: iphone4 },
      { title: "Trusted Transfers", image: iphone5 },
      { title: "Smooth Settlement", image: iphone6 },
    ],
    Schedule: [
      { title: "Choose Your Perfect Day", image: iphone7 },
      { title: "Time That Works For You", image: iphone8 },
      { title: "Effortless Overview", image: iphone9 },
    ],
  };

  const loopingArr = dataMap[tab] || [];
  return (
    <section className="flex flex-col items-center justify-around">
      <div className="flex w-full px-2 sm:w-[80%] lg:w-[50%] justify-around gap-1">
        <Button2
          isActive={tab === "Consultations"}
          tabFn={() => setTab("Consultations")}
          text={"Consultations"}
          BtnWidth={156}
        />
        <Button2
          isActive={tab === "Payment"}
          tabFn={() => setTab("Payment")}
          text={"Payment withdrawal"}
          BtnWidth={219}
        />
        <Button2
          isActive={tab === "Schedule"}
          tabFn={() => setTab("Schedule")}
          text={"Schedule"}
          BtnWidth={115}
        />
      </div>
      <div className=" flex max-w-[90%]  w-full  justify-around p-8 ">
        {loopingArr.map((data, i) => (
          <IphoneCard key={i} title={data.title} index={i} image={data.image} />
        ))}
      </div>
      <Button1 BtnWidth="161" text={"Join Now"} />
    </section>
  );
};

export default Consultation;
