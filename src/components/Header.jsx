import { useState } from 'react';

const Header = () => {
  // State for toggling the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-sm sticky top-0 text-white flex justify-between items-center p-5 md:p-9 z-10">
      <h1 className="text-xl font-bold">Manigandan</h1>

      {/* Desktop and Mobile Menu Toggle */}
      <nav >
        {/* Hamburger for mobile view */}
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

        {/* Desktop menu */}
        <ul className={`md:flex space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block md:space-x-6`}>
          <li><a href="#about" className="hover:underline py-2">About</a></li>
          <li><a href="#projects" className="hover:underline py-2">Projects</a></li>
          <li><a href="#skills" className="hover:underline py-2">Skills</a></li>
          <li><a href="#contact" className="hover:underline py-2">Contact</a></li>
        </ul>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col items-center bg-black text-white absolute top-16 left-0 w-full space-y-4 p-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
