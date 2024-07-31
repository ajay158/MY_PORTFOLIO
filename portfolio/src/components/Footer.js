import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/ajay158" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ajay-kumar-shahu-462059209/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ichbinajay/reels/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
            <FaInstagram />
          </a>
        </div>

        {/* Footer bottom */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 Ajay's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
