import faqImage from "../../assets/faqPageAssets/faqImage.svg";
import { IoSearch } from "react-icons/io5";

const FaqSearch = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-3 sm:py-10 px-4 flex flex-col items-center"
      style={{
        backgroundImage: `url(${faqImage})`,
      }}
    >
      <h2 className="text-[36px] text-[#333448] font-bold mb-2 sm:mb-6">FAQ</h2>
      <div className="flex border border-[#F0F0F0] rounded-xl text-[#2E2F2E] items-center gap-2 px-4 py-2  shadow-md w-full max-w-md bg-white">
        <IoSearch className="text-[#2E2F2E]" />
        <input
          type="text"
          placeholder="Search for any queries that you have"
          className="flex-1 outline-none"
        />
      </div>
    </section>
  );
};

export default FaqSearch;
