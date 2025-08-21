const Title = ({ title, text, boxWidth = "785" }) => {
  return (
    <div className={`w-[${boxWidth}px] mx-auto pb-5  text-center `}>
      <h2 className="text-[#33643F] text-xl sm:text-2xl lg:text-[40px] font-bold">
        {title}{" "}
      </h2>
      <p className="text-[#4C4C4C] text-xs sm:text-sm md:text-xl font-normal">
        {text}
      </p>
    </div>
  );
};

export default Title;
