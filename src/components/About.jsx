import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Directly use typed.js
import Mani from '../assets/Mani_profile.jpeg';

const About = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'I am a passionate web developer.',
        'I specialize in React.js, Node.js, and MERN stack.',
        'I build responsive web applications.',
        'I strive to deliver high-quality solutions.'
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up the typing effect when the component unmounts
    };
  }, []);

  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto py-16 px-8 md:px-16">
        
        {/* Sliding Profile Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 mb-8 md:mb-0 flex justify-center items-center overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full transform translate-x-full md:translate-x-0 transition-transform duration-1000 ease-in-out">
            <img src={Mani} alt="E. Manigandan" className="object-cover w-full h-full rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        {/* Text and Typing Animation */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-md">
            Manigandan E
          </h2>

          {/* Typing Animation */}
          <span ref={typedElement} className="text-lg mb-6 leading-relaxed text-gray-300 drop-shadow-md"></span>

          <div className="mt-6">
            <a
              href="#projects"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-600 hover:scale-105"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
