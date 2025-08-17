import React from "react";
import Hero from "../components/Hero";
import TrustHolders from "../components/TrustHolders";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="bg-[#FFF7E2]">
      <Header />
      <Hero />
      <TrustHolders />
      <MainContent />
      <Footer />
    </section>
  );
};

export default Home;
