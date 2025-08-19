import React from "react";
import Hero from "../components/Hero";
import TrustHolders from "../components/TrustHolders";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JoinCircle from "../components/JoinCircle";
import Consultation from "../components/Consultation";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <section className="bg-[#FFF7E2]">
      <Header />
      <Hero />
      <TrustHolders />
      <MainContent />
      <JoinCircle />
      <Consultation />
      <Testimonials/>
      <Footer />
    </section>
  );
};

export default Home;
