import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg px-4 py-3 md:px-6 md:py-4 max-w-full md:max-w-7xl mx-auto overflow-x-hidden">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-white font-semibold text-lg">
          <Link to="/">
            <img
              src="/vfxlogo.jpg"
              alt="VFX Coach Logo"
              className="h-12 md:h-14 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {/* <a
            href="#"
            className="hover:text-lime-400 transition-colors duration-300"
          >
            For Business
          </a> */}
          <a
            href="#profile"
            className="hover:text-[#FF991C] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#Courses"
            className="hover:text-[#FF991C] transition-colors duration-300"
          >
            Courses
          </a>
          <a
            href="#contact"
            className="hover:text-[#FF991C] transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="#programs">
            <button className="bg-[#FF991C] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#FF991C] transition cursor-pointer shadow-md">
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
        <div className="md:hidden mt-3 w-full max-w-full space-y-3 text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg overflow-x-hidden">
          {/* <a href="#" className="block hover:text-lime-400">
            For Business
          </a> */}
          <a href="#profile" className="block hover:text-[#FF991C]">
            About
          </a>
          <a href="#Courses" className="block hover:text-[#FF991C]">
            Courses
          </a>
          <a href="#contact" className="block hover:text-[#FF991C]">
            Contact Us
          </a>
          <a href="#programs">
            <button className="mt-3 w-full bg-[#FF991C] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#FF991C] transition shadow-md">
              Explore Courses
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
