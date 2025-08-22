import footerLogo from "../assets/footerImage/footerLogo.svg";
import FooterInfoList from "./FooterInfoList";
import SocialMedia from "./SocialMedia";

const Footer = () => {
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
    <footer className="bg-[#DBDCC4] w-full px-6 sm:px-12 lg:px-24 py-10 sm:py-16 flex flex-col lg:flex-row items-start justify-between lg:gap-10">
      <div className="flex flex-col items-start gap-6 lg:gap-0 lg:justify-between h-auto lg:h-full">
        <figure className="h-[37px]">
          <img
            className="object-left object-contain"
            src={footerLogo}
            alt="Footer Logo"
          />
        </figure>
        <FooterInfoList title={"Get in touch"} arrayList={getInTouch} />
      </div>
      <FooterInfoList title={"Information"} arrayList={info} />
      <div className="flex  flex-col items-center lg:items-start">
        <h3 className="text-2xl sm:text-[28px] font-semibold text-[#33643F] py-3 sm:py-5">
          Follow Us
        </h3>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
