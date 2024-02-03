import React from "react";
import AboutSection from "../components/About/AboutSection";
import TeamSection from "../components/About/TeamSection";
import ValuesSection from "../components/About/ValuesSection";
import Contact from "../components/About/Contact";
import OurCustomer from "../components/About/OurCustomer";
import OurInvestor from "../components/About/OurInvestor";
import ByNumber from "../components/About/ByNumber";
import Rating from "../components/About/rating";
import Top from "../components/About/top";
const AboutPage = () => {
  return (
    <>
      <Top />
      <AboutSection />
      <TeamSection />
      <ValuesSection />
      <OurCustomer />
      <OurInvestor />
      <ByNumber />
      <Rating />
      <Contact />
    </>
  );
};

export default AboutPage;
