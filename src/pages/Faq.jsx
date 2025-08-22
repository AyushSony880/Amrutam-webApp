
import Header from "../components/faqPageComponents/Header";
import FaqSearch from "../components/faqPageComponents/FaqSearch";
import Tab from "../components/faqPageComponents/Tabs";
import FaqSection2 from "../components/faqPageComponents/FaqSection2";
import AppDownload2 from "../components/faqPageComponents/AppDownload2";
import Footer2 from "../components/faqPageComponents/Footer2";

export const Faq = () => {
  return (
    <div className="bg-[#FFF7E2]">
      <Header />
      <FaqSearch />
      <Tab />
      <FaqSection2 />
      <AppDownload2 />
      <Footer2/>
    </div>
  );
};
