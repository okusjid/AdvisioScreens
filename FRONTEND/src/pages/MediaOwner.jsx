import React from "react";
import { Link } from "react-router-dom";
import OwnerHeroSection from "../components/OwnerHeroSection";
import BenefitsSection from "../components/BenefitSections";
import ContactSection from "../components/ContactSec";

const MediaOwner = () => {
    return (
      <>
        <OwnerHeroSection />
        <BenefitsSection />
        <ContactSection />
      </>
    );
  };
  
  export default MediaOwner;

  