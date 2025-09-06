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

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? bannersData.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === bannersData.length - 1 ? 0 : prev + 1));

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // ✅ 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slides */}
      {bannersData.map((banner, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <img
            src={banner.img}
            alt={banner.author}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
            <span className="text-6xl md:text-7xl font-bold text-lime-400">
              “
            </span>
            <p className="text-lg md:text-2xl lg:text-3xl font-medium max-w-4xl leading-relaxed text-white">
              {banner.quote}
            </p>
            <div className="mt-6">
              <p className="text-base md:text-xl font-semibold text-lime-300">
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
        aria-label="Previous Slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full focus:outline-none"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 flex gap-3 justify-center w-full">
        {bannersData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
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
