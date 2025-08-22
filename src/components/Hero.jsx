import heroImg from "../assets/homePageAssets/hero.svg";
import Button1 from "./Button1";

const Hero = () => {
  return (
    <section className="relative sm:static bg-gradient-to-r from-[#ffeec4] to-[#fff6de] w-full lg:h-auto   lh-[calc(100vh-110px)] flex flex-col md:flex-row items-center  md:items-start lg:items-center justify-around px-3 sm:px-7 lg:px-20  py-10">
      <aside className=" py-5 md:py-0  md:max-w-1/2  lg:mt-10 order-2 md:order-none">
        <p className="absolute sm:static top-3 left-5 text-[#666666] text-[16px] font-medium ">
          Namaste, Welcome to Amrutam
        </p>
        <h1 className=" text-xl sm:text-2xl lg:text-[40px] font-extrabold ">
          Join Amrutam -{" "}
          <span className="text-[#3a633c]">Grow Your Practice</span>{" "}
        </h1>
        <p className="text-xs sm:text-sm md:text-xl font-normal lg:font-medium md:max-w-[500px] text-[#666666] pt-1 lg:pt-3">
          Connect with more patients, set your own schedule, and grow your
          Ayurvedic practice effortlessly.
        </p>
        <Button1 text={"Join Now"} BtnWidth={"260"} />
        <div className=" w-64 flex  items-center justify-between mt-5 sm:mt-7 lg:mt-12">
          <div className=" text-center w-[99px]">
            <p className="text-xl sm:text-2xl  font-semibold">500+</p>
            <p className=" text-xs sm:text-sm font-medium text-[#4C4C4C] w-full ">
              Average Active Users
            </p>
          </div>
          <p className="bg-[#83A78580] w-[1.42px] h-11"></p>
          <div className=" text-center w-[97px]">
            <p className="text-xl sm:text-2xl  font-semibold">40+</p>
            <p className=" text-xs sm:text-sm  font-medium text-[#4C4C4C] w-full ">
              Average daily free calls
            </p>
          </div>
        </div>
      </aside>
      <aside className="w-[70%] md:max-w-1/2  flex items-center justify-center  order-1 md:order-none ">
        <img className="w-auto " src={heroImg} alt="hero image " />
      </aside>
    </section>
  );
};

export default Hero;
