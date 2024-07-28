import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between md:justify-around items-center">
        <div className="text-white text-2xl font-bold">
          My Portfolio
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
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
          <a href="#projects" className="block text-gray-300 hover:text-white px-2 py-1">Projects</a>
          <a href="#contact" className="block text-gray-300 hover:text-white px-2 py-1">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
