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
      className={`bg-[#FFEEC3] rounded-xl shadow-sm
  ${
    isCardSmall
      ? "w-[clamp(260px,92vw,360px)] p-4"
      : "w-[clamp(300px,92vw,480px)] p-6"
  }`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <img
          src={image}
          alt={name}
          className="size-10 sm:size-11 md:size-12 2xl:size-14 rounded-full object-cover shrink-0"
        />

        <div className="min-w-0">
          <h3
            className={`leading-tight
        ${
          isCardSmall
            ? "text-sm sm:text-base font-semibold"
            : "text-sm md:text-base lg:text-lg font-semibold 2xl:font-bold"
        }`}
          >
            {name}
            <span className="text-[#7E7E7E] font-normal">, {role}</span>
          </h3>

          <div className="flex items-center gap-x-1 mt-2 sm:mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <IoStar
                key={i}
                className={`${i < rating ? "text-yellow-500" : "text-gray-300"}
            ${
              isCardSmall
                ? "text-[12px] sm:text-[14px]"
                : "text-[12px] sm:text-[14px] md:text-[16px] 2xl:text-[18px]"
            }`}
              />
            ))}
          </div>
        </div>
      </div>

      <p
        className={`text-[#7E7E7E] mt-4 sm:mt-6
    ${isCardSmall ? "text-xs sm:text-sm" : "text-xs sm:text-sm md:text-base"}`}
      >
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;
