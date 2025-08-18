import footerLogo from "../assets/footerLogo.svg";
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
    " Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj,Nai Sadak,Lashkar, Gwalior - 474001",
    "+91 9713171999",
  ];
  return (
    <footer className="bg-[#DBDCC4] h-[441px] w-full px-24 py-16 flex items-start justify-around">
      <div className="flex flex-col h-full items-start justify-between ">
        <figure className="h-[37px] pt-3 ">
          <img
            className="object-left object-contain   "
            src={footerLogo}
          />
        </figure>
        <FooterInfoList title={"Get in touch"} arrayList={getInTouch} />
      </div>
      <FooterInfoList title={"Information"} arrayList={info} />
      <div>
        <h3 className="text-[28px] font-semibold text-[#33643F] py-5">
          Follow Us
        </h3>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
