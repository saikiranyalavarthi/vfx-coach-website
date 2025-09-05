import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-6 rounded-1xl shadow-md">
    <nav className="bg-black bg-opacity-70 px-6 py-6 rounded-1xl shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white font-semibold text-lg">
          {/* <div className="grid grid-cols-3 gap-0.5">
            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
            <span className="w-2 h-2 rounded-full border border-white"></span>
            <span className="w-2 h-2 rounded-full border border-white"></span>
            <span className="w-2 h-2 rounded-full border border-white"></span>
            <span className="w-2 h-2 rounded-full border border-white"></span>
            <span className="w-2 h-2 rounded-full border border-white"></span>
            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
            <span className="w-2 h-2 rounded-full border border-white"></span>
          </div> */}
          <img
            src="/vfxlogo.jpg" // 👉 replace with your actual logo path
            alt="VFX Coach Logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#" className="hover:text-lime-400">
            For Business
          </a>
          <a
            href="#profile"
            className="block text-white hover:text-lime-400 transition-colors duration-300"
          >
            About
          </a>
          <a href="#" className="hover:text-lime-400">
            Newsletter
          </a>
          <a href="#contact" className="block hover:text-lime-400">
            Contact Us
          </a>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <a href="#programs">
            <button className="mt-6 w-full md:w-auto bg-lime-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-lime-300 transition cursor-pointer">
              Explore Courses
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3 text-white">
          <a href="#" className="block hover:text-lime-400">
            For Business
          </a>
          <a href="#profile" className="block hover:text-lime-400">
            About
          </a>
          <a href="#" className="block hover:text-lime-400">
            Newsletter
          </a>
          <a href="#contact" className="block hover:text-lime-400">
            Contact Us
          </a>
          <a href="#programs">
            <button className="mt-6 w-full md:w-auto bg-lime-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-lime-300 transition">
              Explore Courses
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
