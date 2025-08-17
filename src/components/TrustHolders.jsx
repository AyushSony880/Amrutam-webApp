import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";
import image7 from "../assets/image7.svg";
import image8 from "../assets/image8.svg";
import image9 from "../assets/image9.svg";
import Title from "./Title";

const TrustHolders = () => {
  const trustHoldersImage = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  return (
    <section className="bg-[#FFF8E6] h-[294px] flex flex-col items-center justify-around">
      <Title
        title={"Featured"}
        text={
          "Unlock the Benefits of Smarter Healthcare Management and Patient Care"
        }
        boxWidth="785"
      />
      <div className="w-full px-10 h-24 flex items-center justify-around">
        {trustHoldersImage &&
          trustHoldersImage.map((img, i) => (
            <img
              key={i}
              className="  max-w-[148px] object-center "
              src={img}
              alt="trust-holders-image"
            />
          ))}
      </div>
    </section>
  );
};

export default TrustHolders;
