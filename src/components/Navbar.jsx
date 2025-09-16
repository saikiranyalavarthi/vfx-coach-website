import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:max-w-7xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg px-4 py-3 md:px-6 md:py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-white font-semibold text-lg">
          <Link to="/">
            <img
              src="/logos/VFX Coach Logo-01.svg"
              alt="VFX Coach Logo"
              className="h-16 md:h-20 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#profile" className="hover:text-[#FF991C] transition-colors">
            About
          </a>
          <a href="#Courses" className="hover:text-[#FF991C] transition-colors">
            Courses
          </a>
          <a href="#contact" className="hover:text-[#FF991C] transition-colors">
            Contact Us
          </a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="#programs">
            <button className="bg-[#FF991C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e07f10] transition shadow-md">
              Explore Courses
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg flex flex-col space-y-5 text-white">
          {/* Title */}

          <a
            href="#profile"
            className="block text-lg font-medium hover:text-[#FF991C]"
          >
            About
          </a>
          <a
            href="#Courses"
            className="block text-lg font-medium hover:text-[#FF991C]"
          >
            Courses
          </a>
          <a
            href="#contact"
            className="block text-lg font-medium hover:text-[#FF991C]"
          >
            Contact Us
          </a>

          {/* Big Button */}
          <a href="#programs">
            <button className="mt-4 w-full bg-[#FF991C] text-black text-lg px-6 py-3 rounded-lg font-semibold hover:bg-[#e07f10] transition shadow-md">
              Explore Courses
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
