import React, { useState } from 'react';
import logo from '../components/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-around items-center">
      <div className="flex items-center cursor-pointer">
        <a href=""> <img src={logo} alt="My Portfolio Logo" className="h-12 w-auto"/></a>
      </div>

        <div className="hidden md:flex space-x-4">
          <a href="" className="text-lg text-gray-300 hover:text-white hover:font-medium">Home</a>
          <a href="#about" className="text-lg text-gray-300 hover:text-white hover:font-medium">About</a>
          <a href="#project" className="text-lg text-gray-300 hover:text-white hover:font-medium">Project</a>
          <a href="#contact" className="text-lg text-gray-300 hover:text-white hover:font-medium">Contact</a>
        </div>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#home" className="block text-gray-300 hover:text-white px-2 py-1">Home</a>
          <a href="#about" className="block text-gray-300 hover:text-white px-2 py-1">About</a>
          <a href="#projects" className="block text-gray-300 hover:text-white px-2 py-1">Project</a>
          <a href="#contact" className="block text-gray-300 hover:text-white px-2 py-1">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
