import React from "react";
import { Link } from "react-router-dom";
import OwnerHeroSection from "../components/OwnerHeroSection";
import BenefitsSection from "../components/BenefitSections";
import ContactSection from "../components/ContactSec";
import CEOMessage from "../components/CeoMessage";

const MediaOwner = () => {
    return (
      <>
        <OwnerHeroSection />
        <BenefitsSection />
        <CEOMessage />
        <ContactSection />
      </>
    );
  };
  
  export default MediaOwner;

  