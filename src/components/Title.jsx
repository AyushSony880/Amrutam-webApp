const Title = ({ title, text, boxWidth = "785" }) => {
  return (
    <div className={`max-w-[${boxWidth}px] text-center h-[86px]`}>
      <h2 className="text-[#33643F] text-[40px] font-bold">{title} </h2>
      <p className="text-[#4C4C4C] text-xl font-normal">{text}</p>
    </div>
  );
};

export default Title;
