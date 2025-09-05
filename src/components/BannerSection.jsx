import React from "react";

const bannersData = [
  {
    quote:
      "AI is the most powerful technology force of our time. It's enabling breakthroughs in every industry, from healthcare to transportation to finance.",
    author: "Jensen Huang",
    role: "Founder, NVIDIA",
    img: "image1.jpg", // optional image path
  },
  {
    quote:
      "Innovation distinguishes between a leader and a follower. Always push the boundaries.",
    author: "Steve Jobs",
    role: "Co-founder, Apple",
    img: "image2.jpg",
  },
  {
    quote:
      "The future belongs to those who learn more skills and combine them in creative ways.",
    author: "Robert Greene",
    role: "Author",
    img: "image3.jpg",
  },
  {
    quote:
      "AI is reshaping our world, and those who embrace it will define the next era.",
    author: "Satya Nadella",
    role: "CEO, Microsoft",
    img: "image4.jpg",
  },
];

const Banner = ({ quote, author, role, img }) => {
  return (
    <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-green-800 to-green-600 p-6 md:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:scale-105 transform transition duration-300">
      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <span className="block mb-4 text-6xl font-bold select-none">“</span>
        <p className="text-lg md:text-xl leading-relaxed">{quote}</p>
        <div className="mt-6">
          <p className="text-lg md:text-xl font-semibold">{author}</p>
          <p className="text-sm md:text-base opacity-80">{role}</p>
        </div>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-green-900 shadow-inner">
        {img ? (
          <img src={img} alt={author} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-green-700 to-green-900 animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

const BannerSection = () => {
  return (
    <section className="bg-gray-900 min-h-screen p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {bannersData.map(({ quote, author, role, img }, idx) => (
        <Banner key={idx} quote={quote} author={author} role={role} img={img} />
      ))}
    </section>
  );
};

export default BannerSection;
