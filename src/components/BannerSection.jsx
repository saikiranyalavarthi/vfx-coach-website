// import React from "react";

// const bannersData = [
//   {
//     quote:
//       "AI is the most powerful technology force of our time. It's enabling breakthroughs in every industry, from healthcare to transportation to finance.",
//     author: "Jensen Huang",
//     role: "Founder, NVIDIA",
//     img: "image1.jpg", // optional image path
//   },
//   {
//     quote:
//       "Innovation distinguishes between a leader and a follower. Always push the boundaries.",
//     author: "Steve Jobs",
//     role: "Co-founder, Apple",
//     img: "image2.jpg",
//   },
//   {
//     quote:
//       "The future belongs to those who learn more skills and combine them in creative ways.",
//     author: "Robert Greene",
//     role: "Author",
//     img: "image3.jpg",
//   },
//   {
//     quote:
//       "AI is reshaping our world, and those who embrace it will define the next era.",
//     author: "Satya Nadella",
//     role: "CEO, Microsoft",
//     img: "image4.jpg",
//   },
// ];

// const Banner = ({ quote, author, role, img }) => {
//   return (
//     <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-green-800 to-green-600 p-6 md:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:scale-105 transform transition duration-300">
//       {/* Content */}
//       <div className="flex-1 text-center md:text-left">
//         <span className="block mb-4 text-6xl font-bold select-none">“</span>
//         <p className="text-lg md:text-xl leading-relaxed">{quote}</p>
//         <div className="mt-6">
//           <p className="text-lg md:text-xl font-semibold">{author}</p>
//           <p className="text-sm md:text-base opacity-80">{role}</p>
//         </div>
//       </div>

//       {/* Image */}
//       <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-green-900 shadow-inner">
//         {img ? (
//           <img src={img} alt={author} className="w-full h-full object-cover" />
//         ) : (
//           <div className="w-full h-full bg-gradient-to-tr from-green-700 to-green-900 animate-pulse"></div>
//         )}
//       </div>
//     </div>
//   );
// };

// const BannerSection = () => {
//   return (
//     <section className="bg-gray-900 min-h-screen p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//       {bannersData.map(({ quote, author, role, img }, idx) => (
//         <Banner key={idx} quote={quote} author={author} role={role} img={img} />
//       ))}
//     </section>
//   );
// };

// export default BannerSection;

import React, { useState, useEffect } from "react";

const bannersData = [
  {
    quote:
      "AI is the most powerful technology force of our time. It's enabling breakthroughs in every industry, from healthcare to transportation to finance.",
    author: "Jensen Huang",
    role: "Founder, NVIDIA",
    img: "image1.jpg",
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

const BannerSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? bannersData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === bannersData.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === bannersData.length - 1 ? 0 : prev + 1));
    }, 3000); // change every 5 seconds

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Slide */}
      {bannersData.map((banner, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={banner.img}
            alt={banner.author}
            className="w-full h-[500px] object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
            <span className="text-7xl font-bold text-lime-400">“</span>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium max-w-4xl leading-relaxed text-white">
              {banner.quote}
            </p>
            <div className="mt-6">
              <p className="text-lg md:text-xl font-semibold text-lime-300">
                {banner.author}
              </p>
              <p className="text-sm md:text-base text-gray-300">
                {banner.role}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 flex gap-3">
        {bannersData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-lime-400" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
