// WorkshopSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const workshops = [
  {
    title: "Ai - VFX Workshop for Creators",
    description:
      "Kickstart your AI journey by creating powerful social content using trending tools",
    duration: "16 hours",
    price: "Rs.999",
    mode: "Live",
    items: [
      "Social Media Content Creation",
      "AI Tools for Reels, Videos & Shorts",
    ],
    image:
      "https://images.unsplash.com/photo-1574169208507-84376174827f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI for Filmmakers",
    description:
      "Hands-on training for creators to harness AI in storytelling and video production.",
    duration: "14 Days",
    mode: "Live",
    price: "Rs.9900",
    items: ["AI for Advance Video Production", "AI for Film Making"],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI for YouTubers & Instagram Creators",
    description:
      "Master cinematic visuals and motion graphics with VFX & AI-integrated workflows.",
    duration: "Self-Paced",
    mode: "Live",
    price: "Rs.19900",
    items: ["Advance VFX with AI Tools", "AI-Powered Advanced Video Editing"],
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
  items,
  price,
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

          {/* Items List */}
          {items && items.length > 0 && (
            <ul className="text-gray-200 text-sm md:text-base mb-4 list-disc list-inside space-y-1">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Info Section */}
        <div className="flex flex-wrap gap-4 text-gray-200 text-sm md:text-base mb-4">
          <span className="bg-gray-800 px-3 py-1 rounded-full">{duration}</span>
          <span className="bg-gray-800 px-3 py-1 rounded-full">{mode}</span>
          {countries && (
            <span className="bg-gray-800 px-3 py-1 rounded-full">
              {countries}
            </span>
          )}
        </div>

        {/* Price */}
        {price && (
          <div className="text-xl font-bold text-[#FF991C] mb-4">{price}</div>
        )}

        <button className="mt-2 bg-[#FF991C] text-white px-5 py-2 rounded-lg font-semibold hover:brightness-90 transition transform hover:scale-105">
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
