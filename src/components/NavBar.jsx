import { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full p-5 bg-gray-700 text-white flex justify-between items-center ">
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
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-transparent text-white absolute top-14 left-0 w-full space-y-4 p-4">
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
      )}
    </nav>
  );
};

export default NavBar;
