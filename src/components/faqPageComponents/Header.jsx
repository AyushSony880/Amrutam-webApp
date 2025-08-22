import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FiPhone } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import navIcon1 from "../../assets/faqPageAssets/navIcons/navIcon1.svg";
import navIcon2 from "../../assets/faqPageAssets/navIcons/navIcon2.svg";
import navIcon3 from "../../assets/faqPageAssets/navIcons/navIcon3.svg";
import navIcon4 from "../../assets/faqPageAssets/navIcons/navIcon4.svg";

<i class="ri-phone-line"></i>;

const Header = () => {
  const allIcons = [navIcon2, navIcon2, navIcon3, navIcon4];
  return (
    <nav
      className={`relative  bg-[#FFF7E2] p-2 w-full sm:h-28 md:h-32 flex flex-col  items-center justify-around  `}
    >
      <p className="absolute top-2 sm:top-5 left-3 sm:left-10 text-xs sm:text-sm md:text-xl font-normal text-[#3A643C]">
        <FiPhone className="inline" /> 9826352321
      </p>
      <img className=" h-8 sm:h-[37px] " src={logo} alt="logo" />
      <div className="  flex flex-col lg:flex-row items-center gap-x-5 sm:px-5 justify-start lg:justify-end w-full ">
        <ul className="  flex-wrap  flex items-center justify-around  text-nowrap  gap-x-2.5 sm:gap-x-10 text-xs sm:text-sm md:text-[20px] font-medium sm:font-semibold  md:font-bold text-[#3A643B] ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/find-doctors">Find Doctors</NavLink>
          </li>
          <li>
            <NavLink to="/lab-tests">Lab Tests</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/forum">Forum</NavLink>
          </li>
          <li>
            <NavLink to="/forum">About Us</NavLink>
          </li>
        </ul>
        <div className="flex self-end flex-wrap my-2 items-center justify-center gap-1  md:gap-2">
          {allIcons.map((link, i) => (
            <Link key={i} target="_blank">
              <img
                className="w-7 h-7 sm:w-8 sm:h-8  md:w-9 md:h-9 lg:w-10 lg:h-10 object-center"
                src={link}
              />
            </Link>
          ))}
          <FaChevronDown className="text-xs " />
        </div>
      </div>
    </nav>
  );
};

export default Header;
