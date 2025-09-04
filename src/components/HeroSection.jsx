// HeroSection.jsx
import React from "react";
// import heroImage from "./heroImage.png"; // Uncomment and use your image path

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center min-h-screen">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay ahead in the{" "}
            <span className="text-lime-400">
              AI-First World&Become a VFX PRO with our VFX Intro Workshop
            </span>
          </h1>
          <p className="text-gray-300 mb-8">
            Build hands-on capabilities that translate directly into workplace
            advantage & tangible outcomes.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-500 transition">
              Explore Courses
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
              For Business
            </button>
          </div>
        </div>

        {/* Right Image / Visual */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          {/* Uncomment below to use your hero image */}
          {/* <img
            src={heroImage}
            alt="Hero Visual"
            className="w-full max-w-lg object-cover rounded-xl shadow-xl"
          /> */}
        </div>
      </div>

      {/* Lighter Overlay / Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-900/30 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
