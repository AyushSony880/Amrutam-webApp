import icon1 from "../assets/homePageAssets/footerImage/icon1.svg";
import icon2 from "../assets/homePageAssets/footerImage/icon2.svg";
import icon3 from "../assets/homePageAssets/footerImage/icon3.svg";
import icon4 from "../assets/homePageAssets/footerImage/icon4.svg";
import icon5 from "../assets/homePageAssets/footerImage/icon5.svg";

const SocialMedia = () => {
  const allIcon = [
    { link: "https://www.linkedin.com/in/ayush-880-link/", icon: icon1 },
    { link: "https://www.linkedin.com/in/ayush-880-link/", icon: icon2 },
    { link: "https://www.linkedin.com/in/ayush-880-link/", icon: icon3 },
    { link: "https://www.linkedin.com/in/ayush-880-link/", icon: icon4 },
    { link: "https://www.linkedin.com/in/ayush-880-link/", icon: icon5 },
  ];

  return (
    <div className="flex flex-wrap items-center min-w-[300px] justify-center gap-2 sm:gap-3 lg:gap-5">
      {allIcon.map((list, i) => (
        <a
          key={i}
          href={list.link}
          target="_blank"
        >
          <img
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-center"
            src={list.icon}
            alt={`social-icon-${i}`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
