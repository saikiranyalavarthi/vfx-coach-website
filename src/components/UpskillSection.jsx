import React from "react";

const features = [
  {
    id: 1,
    title: "Self-paced video content",
    description:
      "Master new skills on your schedule with our flexible, self-paced video content.",
    icon: (
      <svg
        className="w-8 h-8 text-lime-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Office hours with Mentors",
    description: "Overcome challenges fast with dedicated mentor office hours.",
    icon: (
      <svg
        className="w-8 h-8 text-lime-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A12.08 12.08 0 0112 20.5a12.08 12.08 0 01-6.825-3.443 12.083 12.083 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Project-driven approach",
    description:
      "Gain practical skills through our project-driven approach for real results.",
    icon: (
      <svg
        className="w-8 h-8 text-lime-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6c1.657 0 3 1.343 3 3v7a3 3 0 01-6 0v-7c0-1.657 1.343-3 3-3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l-3 3m6-1l-3-3m16 3l-3-3m-1 6l3 3"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Access to network of 1000+ learners",
    description:
      "Tap into our vibrant network of learners, enhancing your learning experience.",
    icon: (
      <svg
        className="w-8 h-8 text-lime-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 12a7 7 0 11-7 7 7 7 0 017-7zM12 14a4 4 0 100-8 4 4 0 000 8z"
        />
      </svg>
    ),
  },
];

export default function UpskillSection() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-14">
      <div className="max-w-7xl mx-auto text-center">
        <p className="uppercase text-sm font-semibold tracking-wide text-gray-400">
          SKILL UP, SCALE UP
        </p>
        <h1 className="text-4xl md:text-5xl font-serif leading-tight mt-2 max-w-3xl mx-auto">
          Upskill your Team; <br /> Upscale your Business
        </h1>
        <p className="mt-4 max-w-xl text-gray-300 mx-auto">
          Elevate your team's skills to fuel efficiency and ongoing innovation
          for sustained business growth.
        </p>

        <button className="mt-8 mb-12 px-8 py-3 rounded-full bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold shadow-lg hover:scale-105 transition transform">
          Upskill Your Team
        </button>

        <h2 className="font-semibold text-lg mb-8 text-left md:text-center">
          Why learn with Outskill?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="flex space-x-4 items-start bg-gray-900 bg-opacity-20 rounded-xl p-5 hover:bg-gray-800 hover:shadow-lg transition"
            >
              <div className="p-3 border border-lime-400 rounded-lg flex justify-center items-center shrink-0">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-300 mt-1 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
