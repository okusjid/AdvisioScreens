import React from "react";
import { Link } from "react-router-dom";
import OwnerHeroSection from "../components/Media Owner/OwnerHeroSection";
import BenefitsSection from "../components/Media Owner/BenefitSections";
import ContactSection from "../components/Media Owner/ContactSec";
import CEOMessage from "../components/Media Owner/CeoMessage";

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

  