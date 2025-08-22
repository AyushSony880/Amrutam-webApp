import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import FaqQuestions from "../FaqQuestions";

const FaqSection2 = () => {
  return (
    <section className="bg-[#FFF7E2] flex items-center flex-col">
      <FaqQuestions
        icons={[
          <FaChevronDown className="text-xs" />,
          <FaChevronUp className="text-xs" />,
        ]}
      />
      <button className="cursor-pointer flex items-center gap-2 px-6 py-2 sm:px-8 sm:py-3 bg-[#FFF7E2] text-[#3A643B] font-normal rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_8px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-200 ease-in-out text-sm sm:text-base md:text-lg">
        Load More
        <span className="text-lg sm:text-xl">➔</span>
      </button>
    </section>
  );
};

export default FaqSection2;
