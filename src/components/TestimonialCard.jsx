import { IoStar } from "react-icons/io5";

const TestimonialCard = ({
  image,
  name,
  role,
  rating,
  text,
  isCardSmall = true,
}) => {
  return (
    <div
      className={`bg-[#FFEEC3]  rounded-lg ${
        isCardSmall ? "w-[347px] h-[190px] p-4" : "w-[480px] h-[283px] p-6"
      }`}
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          className={`${
            isCardSmall ? "w-11 h-11" : "w-12 h-12"
          } rounded-full object-cover`}
        />
        <div>
          <h3
            className={`${
              isCardSmall ? "font-semibold text-sm" : "font-bold text-lg"
            }`}
          >
            {name},<span className="text-[#7E7E7E] font-normal  ">{role}</span>
          </h3>
          <div className="flex items-center gap-x-1 mt-3 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <IoStar
                key={index}
                className={`${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                } ${isCardSmall ? "text-[12px]" : "text-[18px]"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p
        className={` text-[#7E7E7E] ${
          isCardSmall ? "text-xs mt-6" : "text-[16px] mt-10"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;
