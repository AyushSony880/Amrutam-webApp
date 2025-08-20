import iphoneWithDoctor from "../assets/downloadLinkImage/IphoneWithDoctor.svg";
import forum from "../assets/downloadLinkImage/Forum.svg";
import call from "../assets/downloadLinkImage/call.svg";
import earn from "../assets/downloadLinkImage/Earn.svg";
import wallet from "../assets/downloadLinkImage/wallet.svg";
import AppStore from "../assets/downloadLinkImage/AppStore.svg";
import GooglePlay from "../assets/downloadLinkImage/GooglePlay.svg";

import DownloadFeatureCard from "./DownloadFeatureCard";

const AppDownload = () => {
  const featureCardData = [
    {
      image: forum,
      text: "Build Trust and Community with Forum",
    },
    {
      image: wallet,
      text: "Instant Access to Your Earnings with Wallet",
    },
    {
      image: call,
      text: "Attract Patients with 5-Minute Free Call",
    },
    {
      image: earn,
      text: "Earn More with Pay Per Conversation",
    },
  ];
  return (
    <section className=" flex  h-[840px] my-5  ">
      <div className="bg-[#FFEDBF] px-20 py-10 relative h-[600  px] self-center w-full ">
        <div className="w-[600px]  h-full">
          <h2 className="text-[#33643F] mb-5  max-w-[450px] text-[40px] font-bold">
            Get Started Today – Download the App Now!{" "}
          </h2>
          <p className="text-[#4C4C4C] text-xl font-medium max-w-[450px]">
            Simplify consultations, manage patients, and grow your practice—all
            in one place.
          </p>
          <div className=" mt-2 py-10 w-full flex items-center flex-wrap justify-center gap-x-5 gap-y-10      ">
            {featureCardData.map(({ image, text }, i) => (
              <DownloadFeatureCard key={i} image={image} text={text} />
            ))}
          </div>
          <div className="flex p-2 gap-x-10">
            <img src={GooglePlay} />
            <img src={AppStore} />
          </div>
        </div>

        <article className="absolute right-20 h-[715px] w-[671px] bottom-[-15px] overflow-hidden align-top">
          <img src={iphoneWithDoctor} />
        </article>
      </div>
    </section>
  );
};

export default AppDownload;
