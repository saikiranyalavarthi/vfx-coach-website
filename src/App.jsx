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
import CourseFeatures from "./components/CourseFeatures";
import StatsSection from "./components/StatsSection";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProgramsSection />
      <CourseFeatures />
      <FellowshipSection />
      <WorkshopSection />
      <UpskillSection />
      <BannerSection />
      <StatsSection />
      <NewsletterSection />
      <ProfileCard />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
