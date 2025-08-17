import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className=" bg-[#FFF7E2] w-full h-28 flex flex-col mt-16 items-center justify-around   ">
      <img className="h-[37px] " src={logo} alt="logo" />
      <ul className=" flex gap-x-10 text-[20px] font-normal text-[#474747] ">
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
