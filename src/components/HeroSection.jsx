import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Directly use typed.js
import Mani from '../assets/Mani_profile.jpeg';

const HeroSection = () => {
  const typedElement = useRef(null);
  const UName = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        ' I am a passionate web developer.',
        ' I specialize in React.js, Node.js, and MERN stack.',
        ' I build responsive web applications.',
        ' I strive to deliver high-quality solutions.'
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up the typing effect when the component unmounts
    };
  }, []);
  
  useEffect(() => {
    const aUname = new Typed(UName.current, {
      strings: [
        '"Hi ,i am Manigandan"',
      
      ],
      typeSpeed: 100,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      aUname.destroy(); // Clean up the typing effect when the component unmounts
    };
  }, []);

  return (
    <section className="relative h-screen bg-cover bg-top" style={{ backgroundImage: `url(${Mani})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full top-10">
        {/* Profile Image and Text */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <h2 ref={
            UName
          } className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
            Manigandan E
          </h2>

          {/* Typing Animation */}
          <span ref={typedElement} className="text-lg md:text-xl mb-6 leading-relaxed text-gray-300 drop-shadow-md"></span>

          <div className="mt-6">
            <a
              href="#projects"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-600 hover:scale-105"
            >
              View My Projects
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-110 transition-transform duration-500">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
