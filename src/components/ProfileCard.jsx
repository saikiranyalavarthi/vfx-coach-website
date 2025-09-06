// ProfileCard.jsx
import React from "react";

const ProfileCard = () => {
  return (
    <div
      id="profile"
      className="max-w-12xl mx-auto bg-black text-white shadow-xl overflow-hidden flex flex-col md:flex-row rounded-1xl"
    >
      {/* Left Side - Large Image */}
      <div className="md:w-1/3 w-full h-80 md:h-auto">
        <img
          src="/pic.jpeg" // Replace with actual profile image
          alt="Arun Kumar Etikapally"
          className="w-full h-full object-cover md:rounded-l-2xl rounded-t-2xl"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-2/3 w-full p-6 md:p-10 flex flex-col justify-between">
        <div>
          {/* Name and Position */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Arun Kumar Etikapally
          </h2>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">
            Head of VFX & Animation Department at Tutorac India Pvt
          </p>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            VFX & Animation Team Lead · Tutorac Inc · Full-time
          </p>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            Apr 2021 - Present · 4 yrs 6 mos
          </p>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            Hyderabad, Telangana, India · On-site
          </p>

          {/* Description */}
          <p className="text-gray-300 mt-4 leading-relaxed text-sm sm:text-base">
            As the Head of 3D, Motion Graphics, and Video Editing at Tutorac, I
            led the creative and technical teams in producing high-quality 3D
            animations, motion graphics, and video content for educational
            materials. My role encompassed overseeing the production process
            from initial concept to final delivery, ensuring all visual and
            video content aligned with Tutorac’s academic goals and maintained
            the highest quality standards.
          </p>

          {/* Skills */}
          <h3 className="text-lg sm:text-xl font-semibold text-white mt-6">
            Skills Acquired:
          </h3>
          <p className="text-gray-300 mt-1 text-sm sm:text-base">
            3D Animation, Motion Graphics, Video Editing, Graphic Design,
            Leadership, Project Management, Creative Direction.
          </p>
        </div>

        {/* LinkedIn Button */}
        <div className="mt-6">
          <a
            href="https://www.linkedin.com/in/arun-kumar-etikapally-6a823239/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-400 transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
