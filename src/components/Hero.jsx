import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffeec4] to-[#fff6de] w-full h-[calc(100vh-110px)] flex items-center justify-between px-20 py-10">
      <aside className=" max-w-1/2 mt-10">
        <p className="text-[#666666] text-[16px] font-medium ">
          Namaste, Welcome to Amrutam
        </p>
        <h1 className="text-[40px] font-extrabold ">
          Join Amrutam -{" "}
          <span className="text-[#3a633c]">Grow Your Practice</span>{" "}
        </h1>
        <p className="text-xl font-medium max-w-[500px] text-[#666666] pt-3">
          Connect with more patients, set your own schedule, and grow your
          Ayurvedic practice effortlessly.
        </p>
        <button className="bg-[#3A643C] text-[#FFFFFF] rounded-xl text-xl py-3.5 mt-10 font-bold w-[260px]">
          Join Now
        </button>
        <div className="w-64 flex items-center justify-between mt-12">
          <div className=" text-center w-[99px]">
            <p className="text-2xl  font-semibold">500+</p>
            <p className="text-[14px] font-medium text-[#4C4C4C] w-full ">
              Average Active Users
            </p>
          </div>
          <p className="bg-[#83A78580] w-[1.42px] h-11"></p>
          <div className=" text-center w-[97px]">
            <p className="text-2xl  font-semibold">40+</p>
            <p className="text-[14px] font-medium text-[#4C4C4C] w-full ">
              Average daily free calls
            </p>
          </div>
        </div>
      </aside>
      <aside className="max-w-1/2  h-full ">
        <img className="w-[569px]" src={heroImg} alt="hero image " />
      </aside>
    </section>
  );
};

export default Hero;
