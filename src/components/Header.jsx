import TopStrip from "./TopStrip";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className=" shadow-2xl">
      <TopStrip />
      <NavBar cssValue={"mt-9 sm:mt-12 md:mt-16"} />
    </header>
  );
};

export default Header;
