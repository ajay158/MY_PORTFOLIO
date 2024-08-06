import React, { useState } from 'react';
import logo from '../components/images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-lg w-full">
      <div className="flex justify-around items-center">
        {/* Logo */}
        <a href="#" className="flex items-center cursor-pointer">
          <img src={logo} alt="My Portfolio Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="home" smooth={true} offset={-70} duration={500} className="text-lg text-gray-300 hover:text-white hover:font-medium">Home</Link>
          <Link to="about" smooth={true} offset={-70} duration={500} className="text-lg text-gray-300 hover:text-white hover:font-medium">About</Link>
          <Link to="project" smooth={true} offset={-70} duration={500} className="text-lg text-gray-300 hover:text-white hover:font-medium">Project</Link>
          <Link to="contact" smooth={true} offset={-70} duration={500} className="text-lg text-gray-300 hover:text-white hover:font-medium">Contact</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mt-4 bg-gray-900 rounded-lg shadow-lg p-4 ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="home" smooth={true} offset={-70} duration={500} className="block text-gray-300 hover:text-white px-3 py-2 rounded">Home</Link>
        <Link to="about" smooth={true} offset={-70} duration={500} className="block text-gray-300 hover:text-white px-3 py-2 rounded">About</Link>
        <Link to="project" smooth={true} offset={-70} duration={500} className="block text-gray-300 hover:text-white px-3 py-2 rounded">Project</Link>
        <Link to="contact" smooth={true} offset={-70} duration={500} className="block text-gray-300 hover:text-white px-3 py-2 rounded">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
