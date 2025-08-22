import React from "react";
import Hero from "../components/Hero";
import TrustHolders from "../components/TrustHolders";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JoinCircle from "../components/JoinCircle";
import Consultation from "../components/Consultation";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import AppDownload from "../components/AppDownload";
import LetsConnect from "../components/LetsConnect";

const Home = () => {
  return (
    <section className="bg-[#FFF7E2] flex flex-col">
      <Header />
      <Hero />
      <TrustHolders />
      <MainContent />
      <JoinCircle />
       <Consultation />
     {/* <Testimonials />
      <FaqSection />
      <AppDownload />
      <LetsConnect />
      <Footer /> */}
    </section>
  );
};

export default Home;
