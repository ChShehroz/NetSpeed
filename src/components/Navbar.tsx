import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">NetSpeed</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Features
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden"></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow">
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Features
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
