import { FaUserDoctor } from "react-icons/fa6";

const TopStrip = () => {
  return (
    <div className="flex z-50 fixed top-0  items-center justify-end  px-1 sm:px-[5%] gap-x-2 sm:gap-x-[5%] bg-[#373636] w-full h-9 sm:h-12 md:h-16 ">
      <p className="text-[#D9D9D9] font-normal  md:font-medium text-xs sm:text-lg lg:text-[20px]">
        Register Yourself As An Amrutam Doctor
      </p>
      <button
        aria-label="Join as an Amrutam Doctor"
        className="outline-none cursor-pointer flex items-center justify-center gap-2 bg-[#3A643B] sm:w-[200px] lg:w-[355px] sm:h-10 md:h-[51px] px-2 py-1 rounded-[16px] text-sm  md:text-[16px] md:font-bold text-[#FFFFFF] "
      >
        <FaUserDoctor aria-hidden="true" className="pointer-events-none" />
        Join Now
      </button>
    </div>
  );
};

export default TopStrip;
