import { useState } from 'react';
import { FaHome, FaCogs, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Adding icons

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full p-6 bg-gray-700 text-white flex justify-between items-center relative z-30 rounded-sm ">
      <h1 className="text-xl font-bold">Manigandan</h1>

      {/* Hamburger Menu for mobile view */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="#about"
            className="hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden flex flex-col items-start backdrop-blur-md text-white absolute top-full left-0 w-full space-y-4 p-6 z-50`}
      >
        <div className="flex items-center space-x-3">
          <FaHome className="text-xl text-yellow-400" />
          <a
            href="#about"
            className="text-white text-lg hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
          >
            About
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaCogs className="text-xl" />
          <a
            href="#skills"
            className="text-white text-lg hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
          >
            Skills
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaProjectDiagram className="text-xl" />
          <a
            href="#projects"
            className="text-white text-lg hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
          >
            Projects
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-xl" />
          <a
            href="#contact"
            className="text-white text-lg hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
