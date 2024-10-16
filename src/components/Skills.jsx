import React, { useEffect, useState } from 'react';
import html from '../assets/techlogo/HTML5.svg'
import css from '../assets/techlogo/CSS.svg'
import js from '../assets/techlogo/js.svg'
import react from '../assets/techlogo/React.svg'
import node from '../assets/techlogo/Node.svg'
import mongoDb from '../assets/techlogo/MongoDb.svg'
import Tailwind from '../assets/techlogo/Tailwind.svg'







const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  const skills = [
    { name: 'HTML', percentage: 90, imageUrl: html },
    { name: 'CSS', percentage: 85, imageUrl: css },
    { name: 'JavaScript', percentage: 80, imageUrl: js },
    { name: 'React.js', percentage: 75, imageUrl: react },
    { name: 'Node.js', percentage: 70, imageUrl: node },
    { name: 'MongoDB', percentage: 65, imageUrl: mongoDb},
    { name: 'Tailwind CSS', percentage: 90, imageUrl: Tailwind },
  ];

  // Set loading state to false after 2 seconds to simulate the loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <section id="skills" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-400  p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Skill Image */}
              <div className="flex justify-center mb-4">
                <img src={skill.imageUrl} alt={skill.name} className="w-16 h-16 object-contain" />
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-semibold text-center mb-4">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full bg-blue-500 transition-all duration-1000 ease-in-out ${
                    isLoading ? 'w-0' : `w-[${skill.percentage}%]`
                  }`}
                ></div>
              </div>

              {/* Skill Percentage */}
              <div className="text-center text-lg font-semibold">{isLoading ? '0%' : `${skill.percentage}%`}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
