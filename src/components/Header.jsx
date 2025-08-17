import TopStrip from "./TopStrip";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className=" shadow-2xl">
      <TopStrip />
      <NavBar />
    </header>
  );
};

export default Header;
