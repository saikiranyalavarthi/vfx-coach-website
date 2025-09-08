// FellowshipSection.jsx
import React from "react";

const fellowshipData = [
  {
    title: "AI Engineering Fellowship",
    subtitle:
      "Turn AI Concepts into Reality—Build & Deploy AI Models Like a Pro",
    duration: "6 Months",
    mode: "Hybrid Mode",
    countries: "8+ Countries",
    mentors: [
      "https://randomuser.me/api/portraits/men/32.jpg",
      "https://randomuser.me/api/portraits/women/44.jpg",
      "https://randomuser.me/api/portraits/men/65.jpg",
    ],
    extraMentorsCount: 2,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  },
];

const MentorAvatars = ({ mentors, extraCount }) => {
  return (
    <div className="flex items-center -space-x-3">
      {mentors.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`Mentor ${i + 1}`}
          className="w-10 h-10 rounded-full border-2 border-black/80 object-cover shadow-md hover:scale-110 hover:border-lime-400 transition"
          loading="lazy"
        />
      ))}
      <div className="w-10 h-10 rounded-full border-2 border-black/80 bg-[#FF991C] flex items-center justify-center text-black font-semibold text-sm shadow-md">
        +{extraCount}
      </div>
    </div>
  );
};

const FellowshipBanner = ({
  title,
  subtitle,
  duration,
  mode,
  countries,
  mentors,
  extraMentorsCount,
  image,
}) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 p-8 md:p-12 max-w-7xl mx-auto my-10 shadow-xl hover:scale-[1.01] transition"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Left side text */}
      <div className="relative flex-1 max-w-xl text-white">
        <h2 className="text-2xl md:text-4xl font-serif font-semibold mb-3">
          {title}
        </h2>
        <p className="mb-6 text-gray-300 leading-relaxed">{subtitle}</p>

        <div className="flex flex-wrap gap-3 text-sm md:text-base text-gray-300">
          <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
            {duration}
          </span>
          <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
            {mode}
          </span>
          <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
            {countries}
          </span>
        </div>
      </div>

      {/* Right side mentors + button */}
      <div className="relative flex flex-col items-center md:items-end gap-4">
        <MentorAvatars mentors={mentors} extraCount={extraMentorsCount} />
        <p className="text-gray-300 text-sm md:text-base whitespace-nowrap">
          Multiple mentors from <span className="text-lime-400">Google</span>,{" "}
          <span className="text-lime-400">Adobe</span> & more
        </p>
        <button className="bg-[#FF991C] text-black font-bold rounded-lg px-6 py-2 hover:bg-[#FF991C] hover:shadow-lg transition">
          Explore Courses
        </button>
      </div>
    </div>
  );
};

const FellowshipSection = () => {
  return (
    <section className="bg-gray-950 py-16 space-y-12">
      {fellowshipData.map((banner, idx) => (
        <FellowshipBanner key={idx} {...banner} />
      ))}
    </section>
  );
};

export default FellowshipSection;
