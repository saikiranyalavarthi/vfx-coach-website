import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden pt-24 md:pt-32">
      <div className="w-full max-w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-center min-h-[auto] lg:min-h-screen overflow-x-hidden">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start justify-center gap-6 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight">
            Stay ahead in the{" "}
            <span className="text-lime-400">
              AI-First World & Become a VFX PRO with our VFX Intro Workshop
            </span>
          </h1>
          <p className="text-gray-300 max-w-xl text-sm sm:text-base">
            Build hands-on capabilities that translate directly into workplace
            advantage & tangible outcomes.
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
            <button
              onClick={() => {
                const element = document.getElementById("programs");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-lime-500 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:brightness-90 transition transform hover:scale-105 cursor-pointer"
            >
              Explore Courses
            </button>
            <button className="bg-gray-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-700 transition cursor-pointer">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
        </div>

        {/* Right Image / Visual */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 overflow-hidden">
          {/* Example Image */}
          {/* <img
            src="/heroImage.png"
            alt="Hero Visual"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-xl shadow-xl"
          /> */}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-transparent to-gray-900/40 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
