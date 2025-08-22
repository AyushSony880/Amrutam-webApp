import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const NavBar = ({cssValue =""}) => {
  return (
    <nav className={` bg-[#FFF7E2] p-2 w-full sm:h-24 md:h-28 flex flex-col  items-center justify-around  ${cssValue}`}>
      <img className=" h-8 sm:h-[37px] " src={logo} alt="logo" />
      <ul className=" flex items-center justify-around  text-nowrap gap-x-[5%] sm:gap-x-10 text-xs sm:text-sm md:text-[20px] font-normal text-[#474747] ">
        <li>
          <a href="https://www.linkedin.com/in/ayush-880-link/" target="_blank">About Us</a>
        </li>
        <li>
          <NavLink to="/">Onboarding</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/faq">Testimonials</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
