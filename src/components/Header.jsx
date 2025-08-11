import React, { useState } from "react";
import boatLogo from "../assets/boat logo.png";
import { Menu, X } from "lucide-react"; // for hamburger icon

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-300 sticky top-0 z-50">
      <div className="flex justify-between items-center p-3 max-w-7xl mx-auto px-4">
        <a href="#home">
          <img src={boatLogo} alt="logo" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <section className="hidden md:flex gap-5 font-semibold text-[18px]">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            About
          </a>
          <a
            href="#footer"
            className="text-gray-700 hover:text-blue-500 cursor-pointer"
          >
            Contact
          </a>
        </section>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-200 px-4 pb-3 space-y-2 font-semibold text-[18px]">
          <a
            href="#home"
            className="block text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#features"
            className="block text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#footer"
            className="block text-gray-700 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Header;
