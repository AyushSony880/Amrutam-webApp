import { Link, Links } from "react-router-dom";
import icon1 from "../assets/footerImage/icon1.svg";
import icon2 from "../assets/footerImage/icon2.svg";
import icon3 from "../assets/footerImage/icon3.svg";
import icon4 from "../assets/footerImage/icon4.svg";
import icon5 from "../assets/footerImage/icon5.svg";
const SocialMedia = () => {
  const allIcon = [
    {
      link: "https://www.linkedin.com/in/ayush-880-link/",
      icon: icon1,
    },
    {
      link: "https://www.linkedin.com/in/ayush-880-link/",
      icon: icon2,
    },
    {
      link: "https://www.linkedin.com/in/ayush-880-link/",
      icon: icon3,
    },
    {
      link: "https://www.linkedin.com/in/ayush-880-link/",
      icon: icon4,
    },
    {
      link: "https://www.linkedin.com/in/ayush-880-link/",
      icon: icon5,
    },
  ];
  return (
    <div className="flex items-center gap-x-5">
      {allIcon.map((list,i) => (
        <Link key={i} target="_blank" to={list.link}>
          <img
            className="w-9 h-9 object-center "
            src={list.icon}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
