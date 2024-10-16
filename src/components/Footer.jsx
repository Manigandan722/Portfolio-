import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Footer Text */}
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">© 2024 Manigandan. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/Manigandan722"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/manigandan-e-360979249/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Mani38042090?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/_.manigandan_/profilecard/?igsh=dzQ3bHZlOGYzZW1u"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
