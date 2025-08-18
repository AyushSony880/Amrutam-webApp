import { FaUserDoctor } from "react-icons/fa6";

const TopStrip = () => {
  return (
    <div className="flex z-50 fixed top-0  items-center justify-end px-28 gap-x-20 bg-[#373636] w-full h-16 ">
      <p className="text-[#D9D9D9] font-medium text-[20px]">
        Register Yourself As An Amrutam Doctor
      </p>
      <button
        aria-label="Join as an Amrutam Doctor"
        className="outline-none cursor-pointer flex items-center justify-center gap-2 bg-[#3A643B] w-[355px] h-[51px] rounded-[16px] text-[16px] font-bold text-[#FFFFFF] "
      >
        <FaUserDoctor aria-hidden="true" className="pointer-events-none" />
        Join Now
      </button>
    </div>
  );
};

export default TopStrip;
