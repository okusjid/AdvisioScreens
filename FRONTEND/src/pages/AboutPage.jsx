import React from "react";
import AboutSection from "../components/About/AboutSection";
import TeamSection from "../components/About/TeamSection";
import ValuesSection from "../components/About/ValuesSection";
import Contact from "../components/About/Contact";
import OurCustomer from "../components/About/OurCustomer";
import OurInvestor from "../components/About/OurInvestor";
const AboutPage = () => {
  return (
    <>
      <AboutSection />
      <TeamSection />
      <ValuesSection />
      <OurCustomer />
      <OurInvestor />

      <Contact />
    </>
  );
};

export default AboutPage;
