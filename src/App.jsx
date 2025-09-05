import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import ExperienceSection from "./components/ExperienceSection";
import UpskillSection from "./components/UpskillSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProgramsSection from "./components/ProgramsSection";
import BannerSection from "./components/BannerSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProgramsSection />
      <UpskillSection />
      <BannerSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
