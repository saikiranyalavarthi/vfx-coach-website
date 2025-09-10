import React from "react";

const programs = [
  {
    id: 1,
    category: "AI-Powered ",
    duration: "  7days  |  Live + Recorded",
    price: "Rs.999",
    description:
      "In-depth fellowships to build and deploy AI projects with expert guidance.",
    items: ["Social Media Content Creation", "AI for Filmmakers"],
  },
  {
    id: 2,
    category: "VFX for Creators",
    duration: "2-14 days | Live",
    price: "Rs.9900",
    description:
      "Interactive AI sessions for hands-on tool mastery and applications.",
    items: ["AI for YouTubers", "AI for Instagram Creators"],
  },
  {
    id: 3,
    category: " VFX Mastery",
    duration: "Live + Recorded",
    price: "Rs.19900",
    description: " From Explainer Videos to Cinematic Visuals .",
    items: ["VFX with AI", "AI Video Editing"],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-black text-white py-16 px-6 md:px-14">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif font-bold">Explore Our Courses</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Choose from live fellowships, short workshops, or self-paced courses
          to upskill in AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map(
          ({ id, category, duration, description, price, items }) => (
            <div
              key={id}
              className="bg-gray-900 bg-opacity-20 p-6 rounded-xl hover:bg-opacity-40 transition shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#FF991C] mb-2">
                {category}
              </h3>

              <p className="text-sm text-gray-300 mb-4">{price}</p>
              <p className="text-sm text-gray-300 mb-4">{duration}</p>
              <p className="text-gray-400 mb-4">{description}</p>

              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-200 hover:text-lime-400 cursor-pointer transition"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
}
