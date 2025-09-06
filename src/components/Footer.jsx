import React from "react";

const footerLinks = {
  Fellowships: ["AI Generalist Fellowship", "AI Engineering Fellowship"],
  Workshops: ["Gen-AI Mastermind", "Gen-AI Bootcamp"],
  "Self-Paced": ["AI Accelerator", "AI Tools Mastery"],
  Company: ["Terms & Conditions", "Privacy Policy", "Refund Policy"],
};

const socialIcons = [
  {
    name: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.987h-2.54v-2.89h2.54v-2.204c0-2.507 1.493-3.89 3.778-3.89 1.094 0 2.238.196 2.238.196v2.466h-1.26c-1.243 0-1.63.772-1.63 1.562v1.87h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
        <path d="M16 11.37A4 4 0 1112.63 8a4 4 0 013.37 3.37z" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-14h4v2h.1a4 4 0 014-2zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-black to-green-900/80 text-white">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-700 pb-8 mb-6">
          {/* Logo & Info */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xl font-semibold">Vfx Coach</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Vfx Coach Pvt. Ltd. All rights reserved
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 justify-between md:w-2/3 md:pl-12">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="min-w-[140px]">
                <h4 className="font-semibold mb-3 uppercase text-sm tracking-wide">
                  {section}
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm cursor-pointer">
                  {links.map((link) => (
                    <li
                      key={link}
                      className="hover:text-lime-400 transition-colors"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-400 space-y-6 md:space-y-0">
          {/* Social Icons + Currency */}
          <div className="flex items-center space-x-4">
            {socialIcons.map(({ name, icon }) => (
              <button
                key={name}
                aria-label={name}
                className="bg-black/40 hover:bg-lime-500 hover:text-black p-2 rounded-full transition transform hover:scale-110"
              >
                {icon}
              </button>
            ))}
            <select className="text-white bg-gray-800 px-3 py-1 rounded focus:ring-2 focus:ring-lime-400">
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          {/* Newsletter */}
          <form
            className="flex flex-col md:flex-row md:items-center md:space-x-4 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col mb-3 md:mb-0">
              <label className="font-semibold text-white" htmlFor="email">
                Join our newsletter
              </label>
              <span className="text-sm text-gray-400">
                Stay updated with Outskill
              </span>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                id="email"
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md md:rounded-l-md md:rounded-r-none rounded-full md:rounded-full-0 text-black w-full focus:outline-none focus:ring-2 focus:ring-lime-400"
                required
              />
              <button
                type="submit"
                className="bg-lime-400 text-black px-6 rounded-r-md md:rounded-r-md md:rounded-l-none rounded-full font-semibold hover:bg-lime-500 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
