// import React from "react";

// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";

// import ExperienceSection from "./components/ExperienceSection";
// import UpskillSection from "./components/UpskillSection";
// import ContactSection from "./components/ContactSection";
// import Footer from "./components/Footer";
// import ProgramsSection from "./components/ProgramsSection";
// import BannerSection from "./components/BannerSection";
// import WorkshopSection from "./components/WorkshopSection";
// import FellowshipSection from "./components/FellowshipSection";
// import NewsletterSection from "./components/NewsletterSection";
// import CourseFeatures from "./components/CourseFeatures";
// import StatsSection from "./components/StatsSection";
// import ProfileCard from "./components/ProfileCard";

// const App = () => {
//   return (
//     <div className="w-full max-w-full overflow-x-hidden">
//       <Navbar />
//       <HeroSection />
//       <ExperienceSection />
//       <ProgramsSection />
//       <CourseFeatures />
//       <FellowshipSection />
//       <WorkshopSection />
//       <UpskillSection />
//       <BannerSection />
//       <StatsSection />
//       <NewsletterSection />
//       <ProfileCard />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
// import UpskillSection from "./components/UpskillSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
// import ProgramsSection from "./components/ProgramsSection";
import BannerSection from "./components/BannerSection";
import WorkshopSection from "./components/WorkshopSection";
// import FellowshipSection from "./components/FellowshipSection";
// import NewsletterSection from "./components/NewsletterSection";
import CourseFeatures from "./components/CourseFeatures";
import StatsSection from "./components/StatsSection";
import ProfileCard from "./components/ProfileCard";

// Import static pages

import TermsAndConditions from "./Pages/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import ContactPage from "./Pages/Contact";
import ProfessionalNetwork from "./components/ProfessionalNetwork";
import Testimonials from "./components/Testimonials";

// Home page layout
const Home = () => (
  <>
    <HeroSection />
    <ExperienceSection />
    <WorkshopSection />
    {/* <ProgramsSection /> */}
    <CourseFeatures />

    {/* <FellowshipSection /> */}

    {/* <UpskillSection /> */}
    <BannerSection />
    <ProfessionalNetwork />
    <StatsSection />
    {/* <NewsletterSection /> */}
    <Testimonials />
    <ProfileCard />
    <ContactSection />
  </>
);

const App = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
