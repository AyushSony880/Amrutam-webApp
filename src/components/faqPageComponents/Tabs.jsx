import { useState } from "react";

const Tab = () => {
  const [active, setActive] = useState("Consultation");

  const links = ["Consultation", "Wallet", "Forum", "Shop"];

  return (
    <section className="bg-[#FFF7E2] flex font-semibold  sm:gap-x-16 items-center  justify-around sm:justify-center  text-[#414141]  p-4">
      {links.map((link) => (
        <p
          key={link}
          onClick={() => setActive(link)}
          className={`  text-lg sm:text-2xl cursor-pointer ${
            active === link ? "text-[#3A643B] underline   pb-1" : ""
          }`}
        >
          {link}
        </p>
      ))}
    </section>
  );
};

export default Tab;
