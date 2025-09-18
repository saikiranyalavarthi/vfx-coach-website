// components/ProfessionalNetwork.jsx
import React from "react";

const companies = [
  { name: "Microsoft", logo: "/logos/logo1.png" },
  { name: "Adobe", logo: "/logos/logo2.png" },
  { name: "Amazon", logo: "/logos/logo3.png" },
  { name: "Swiggy", logo: "/logos/logo4.png" },
  { name: "CRED", logo: "/logos/logo5.png" },
  { name: "Google", logo: "/logos/logo6.png" },
  { name: "Infosys", logo: "/logos/logo7.png" },
  { name: "Uber", logo: "/logos/logo8.png" },
  { name: "Disney+", logo: "/logos/logo9.png" },
  { name: "Zomato", logo: "/logos/logo10.png" },
  { name: "Byju's", logo: "/logos/logo11.png" },
  { name: "TCS", logo: "/logos/logo12.png" },
];

const ProfessionalNetwork = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          The Tools Behind <span className="text-[#FF991C]"> the Magic</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Explore cutting-edge VFX and AI-integrated software used
          across the industry.
        </p>
      </div>

      {/* Companies logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 mb-20">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center bg-gray-800 rounded-xl p-4 h-20 w-40 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalNetwork;
