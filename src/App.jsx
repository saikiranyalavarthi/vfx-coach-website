import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import ExperienceSection from "./components/ExperienceSection";
import UpskillSection from "./components/UpskillSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProgramsSection from "./components/ProgramsSection";
import BannerSection from "./components/BannerSection";
import WorkshopSection from "./components/WorkshopSection";
import FellowshipSection from "./components/FellowshipSection";
import NewsletterSection from "./components/NewsletterSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProgramsSection />
      <FellowshipSection />
      <WorkshopSection />
      <UpskillSection />
      <BannerSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
