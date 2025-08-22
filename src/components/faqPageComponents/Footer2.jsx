import FooterInfoList from "../FooterInfoList";
import SocialMedia from "../SocialMedia";

const Footer2 = () => {
  const info = [
    "About Us",
    "Terms and Conditions",
    "Privacy Policy",
    "Privacy Policy for Mobile App",
    "Shipping and Return Policy",
    "International Delivery",
    "For Business, Hotels and Resorts",
  ];
  const getInTouch = [
    "support@amrutam.global",
    "Amrutam Pharmaceuticals Pvt Ltd., Chitragupt Ganj, Nai Sadak, Lashkar, Gwalior - 474001",
    "+91 9713171999",
  ];

  return (
    <footer className="bg-[#DBDCC4] w-full px-6 sm:px-12 lg:px-24 py-10 sm:py-16 flex flex-col lg:flex-row items-start justify-between ">
      <div className="flex flex-col items-start gap-6 lg:gap-5 lg:justify-between h-auto lg:h-full">
        <FooterInfoList title={"Get in touch"} arrayList={getInTouch} />
        <SocialMedia />
      </div>
      <FooterInfoList title={"Information"} arrayList={info} />
      <div className="flex  flex-col items-center lg:items-start">
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#33643F] py-2 sm:py-3">
          Subscribe to our Newsletter and join Amrutam Family today!
        </h3>
        <div className="flex  items-center border border-[#3A643B] rounded-full overflow-hidden w-full max-w-[350px]">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 text-xs px-2 py-1 outline-none rounded-l-full"
          />
          <button className="bg-black text-white font-semibold px-6 py-2 rounded-r-full">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
