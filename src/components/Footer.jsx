import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Refund Policy", path: "/refund" },
];

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
      <a
        href="https://www.linkedin.com/in/arun-kumar-etikapally-6a823239/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-14h4v2h.1a4 4 0 014-2zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
        </svg>
      </a>
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
              {/* Logo image */}
              <img
                src="/logos/VFX Coach Logo-01.svg"
                alt="Vfx Coach Logo"
                className="h-20 w-auto"
              />
            </div>

            {/* Copyright + Tooltip */}
            <p className="text-gray-400 text-sm relative group cursor-pointer w-fit">
              © 2025 Vfx Coach Pvt. Ltd. All rights reserved
              <span className="absolute left-0 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
                Website designed by Saikiran Yalavarthi
              </span>
            </p>
          </div>

          {/* Footer Links - Horizontal */}
          <div className="flex flex-wrap items-center gap-6 md:w-2/3 md:pl-12">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#FF991C] transition-colors text-gray-400 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-400 space-y-6 md:space-y-0">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {socialIcons.map(({ name, icon }) => (
              <button
                key={name}
                aria-label={name}
                className="bg-black/40 hover:bg-[#FF991C] hover:text-black p-2 rounded-full transition transform hover:scale-110"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
