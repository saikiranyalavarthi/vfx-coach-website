// WorkshopSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const workshops = [
  {
    title: "2 Day Gen-AI Mastermind",
    description:
      "Build your own AI-driven apps, create stunning visuals, and automate workflows.",
    duration: "16 hours",
    mode: "Hybrid Mode",
    countries: "32+ Countries",
    image:
      "https://images.unsplash.com/photo-1574169208507-84376174827f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "14 Day Gen-AI Bootcamp",
    description:
      "Build your own AI-driven apps, create stunning visuals, and automate workflows.",
    duration: "14 Days",
    mode: "Hybrid Mode",
    countries: "32+ Countries",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Tools Mastery",
    description:
      "Master the latest AI tools and techniques to enhance your productivity and creativity.",
    duration: "Self-Paced",
    mode: "Online",
    countries: "Global Access",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

const WorkshopCard = ({
  title,
  description,
  duration,
  mode,
  countries,
  image,
}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300 max-w-lg mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative p-6 md:p-8 flex flex-col justify-between h-full text-white">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300 text-sm md:text-base mb-4">
            {description}
          </p>
        </div>

        {/* Info Section */}
        <div className="flex flex-wrap gap-4 text-gray-200 text-sm md:text-base mb-4">
          <span className="bg-gray-800 px-3 py-1 rounded-full">{duration}</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">{mode}</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">
            {countries}
          </span>
        </div>

        <button className="mt-4 bg-[#FF991C] text-white px-5 py-2 rounded-lg font-semibold hover:brightness-90 transition transform hover:scale-105">
          <Link to="/contact">Enroll Now</Link>
        </button>
      </div>
    </div>
  );
};

const WorkshopSection = () => {
  return (
    <section className="bg-gray-900 p-6 md:p-10 ">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Workshops
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Interactive AI sessions for hands-on tool mastery and applications.
        </p>
      </div>

      {/* Workshop Cards Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {workshops.map((workshop, i) => (
          <WorkshopCard key={i} {...workshop} />
        ))}
      </div>
    </section>
  );
};

export default WorkshopSection;
