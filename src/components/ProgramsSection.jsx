import React from "react";

const programs = [
  {
    id: 1,
    category: "Fellowships",
    duration: "6 months | Live",
    description:
      "Deep-dive AI programs to master advanced skills and real projects.",
    items: ["AI Generalist Fellowship", "AI Engineering Fellowship", "Board"],
  },
  {
    id: 2,
    category: "Workshops",
    duration: "2-14 days | Live",
    description:
      "Interactive AI sessions for hands-on tool mastery and applications.",
    items: ["2 Day Gen-AI Mastermind", "14 Day Gen-AI Bootcamp"],
  },
  {
    id: 3,
    category: "Self-Paced",
    duration: "Hybrid",
    description: "Learn AI fundamentals and tools at your own speed, anytime.",
    items: ["AI Accelerator - Live + Recorded", "AI Tools Mastery"],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-black text-white py-16 px-6 md:px-14">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-serif font-bold">Explore Our Programs</h2>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Choose from live fellowships, short workshops, or self-paced courses
          to upskill in AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map(({ id, category, duration, description, items }) => (
          <div
            key={id}
            className="bg-gray-900 bg-opacity-20 p-6 rounded-xl hover:bg-opacity-40 transition shadow-lg"
          >
            <h3 className="text-xl font-semibold text-lime-400 mb-2">
              {category}
            </h3>
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
        ))}
      </div>
    </section>
  );
}
