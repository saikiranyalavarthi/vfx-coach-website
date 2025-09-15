// TalentProfileCard.jsx
import React from "react";
import { MapPin, Briefcase, Languages } from "lucide-react";

export default function TalentProfileCard() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-sm text-gray-400 uppercase tracking-widest">
          OUTSKILL DIRECTORY
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Curated AI-First Talent Network
        </h1>

        {/* Profile Card */}
        <div className="mt-10 flex flex-col md:flex-row items-start gap-12 bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/Arun.png" // Replace with actual profile image
              alt="Arun Kumar Etikapally"
              className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 max-w-3xl">
            {/* Name + Role */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Arun Kumar Etikapally
            </h2>
            <span className="inline-block bg-[#FF991C]  text-black text-sm md:text-base font-medium px-3 py-1 rounded-md mt-3">
              Founder of VFXCoach
            </span>

            {/* Bio */}
            <p className="text-gray-300 mt-6 leading-relaxed text-base md:text-lg">
              As the Head of 3D, Motion Graphics, and Video Editing at Tutorac,
              I led the creative and technical teams in producing high-quality
              3D animations, motion graphics, and video content for educational
              materials. My role encompassed overseeing the production process
              from concept to delivery, ensuring alignment with academic goals
              and quality standards.
            </p>

            {/* Info Row */}
            <div className="flex flex-wrap gap-8 mt-8 text-gray-400 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={20} />
                <span>15+ years of experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages size={20} />
                <span>English, Telugu, Hindi</span>
              </div>
            </div>

            {/* Connect Button */}
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/arun-kumar-etikapally-6a823239/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-600 px-8 py-3 rounded-lg hover:bg-gray-800 transition text-sm md:text-base font-semibold"
              >
                <span className="bg-[#0A66C2] text-white rounded-sm px-1.5 py-0.5 text-xs font-bold">
                  in
                </span>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
