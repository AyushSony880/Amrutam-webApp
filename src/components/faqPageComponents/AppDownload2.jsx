import faqChatIcon from "../../assets/faqPageAssets/faqchatIcon.svg";
import faqDownloadImage from "../../assets/faqPageAssets/faqDownloadImage.png";
import AppStore from "../../assets/homePageAssets/downloadLinkImage/AppStore.svg";
import GooglePlay from "../../assets/homePageAssets/downloadLinkImage/GooglePlay.svg";
import DownloadFeatureCard from "../DownloadFeatureCard";

const AppDownload2 = () => {
  const featureCardData = [
    { image: faqChatIcon, text: "Access to Prescriptions" },
    { image: faqChatIcon, text: "Track health efficiently" },
    { image: faqChatIcon, text: "Direct Chat with Doctors" },
    { image: faqChatIcon, text: "In-app reminders for consultations" },
  ];

  return (
    <section className="w-full bg-[#FFF7E2] mt-20 py-10 sm:py-16 lg:py-20">
      <div className="container  mx-auto flex flex-col  lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 gap-10 relative">
        <div className="w-full order-2 min-[1024px]:order-1 lg:w-1/2 flex flex-col items-start">
          <h2 className="text-[#33643F] mb-5 text-2xl sm:text-3xl lg:text-[40px] font-bold max-w-[90%]">
            Get Started Today – Download the App Now!
          </h2>
          <p className="text-[#4C4C4C] text-base sm:text-lg lg:text-xl font-medium max-w-[90%] mb-6">
            Simplify consultations, manage patients, and grow your practice—all
            in one place.
          </p>
          <div className="w-full flex flex-wrap justify-center sm:justify-start gap-5 sm:gap-8 py-6">
            {featureCardData.map(({ image, text }, i) => (
              <DownloadFeatureCard key={i} image={image} text={text} />
            ))}
          </div>
          <div className="flex flex-wrap gap-5 sm:gap-10 mt-4">
            <img src={GooglePlay} alt="Google Play" className="w-32 sm:w-40" />
            <img src={AppStore} alt="App Store" className="w-32 sm:w-40" />
          </div>
        </div>
        <article className="w-full order-1 min-[1024px]:order-2 xl:absolute right-0 bottom-[-100px]  lg:w-1/2 flex justify-center ">
          <img
            src={faqDownloadImage}
            alt="Doctor iPhone"
            className="w-[80%] sm:w-[70%] lg:w-[671px] lg:h-[715px] object-contain"
          />
        </article>
      </div>
    </section>
  );
};

export default AppDownload2;
