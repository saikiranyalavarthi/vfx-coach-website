// NewsletterSection.jsx
import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto border-2 border-lime-400 rounded-2xl p-8 flex flex-col-reverse lg:flex-row items-center gap-12 bg-gray-900/20">
        {/* Left Side - Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Join thousands already learning smarter with our{" "}
            <span className="text-lime-400">VfxCoach Newsletter</span>
          </h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg md:text-xl">
            Subscribe to VfxCoach with AI and get practical insights, industry
            trends, and hands-on tools that make learning a habit—not a hassle.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/vfx1.jpg"
            alt="Newsletter"
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
