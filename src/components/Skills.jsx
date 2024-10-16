import React, { useEffect, useState } from 'react';
import html from '../assets/techlogo/HTML5.svg';
import css from '../assets/techlogo/CSS.svg';
import js from '../assets/techlogo/js.svg';
import react from '../assets/techlogo/React.svg';
import node from '../assets/techlogo/Node.svg';
import mongoDb from '../assets/techlogo/MongoDb.svg';
import Tailwind from '../assets/techlogo/Tailwind.svg';

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  const skills = [
    { name: 'HTML', percentage: 100, imageUrl: html },
    { name: 'CSS', percentage: 85, imageUrl: css },
    { name: 'JavaScript', percentage: 90, imageUrl: js },
    { name: 'React.js', percentage: 90, imageUrl: react },
    { name: 'Node.js', percentage: 80, imageUrl: node },
    { name: 'MongoDB', percentage: 80, imageUrl: mongoDb },
    { name: 'Tailwind CSS', percentage: 90, imageUrl: Tailwind },
    { name: 'AWS-cloud', percentage: 70, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Git & GitHub', percentage: 80, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg' },
  
  ];

  // Set loading state to false after 2 seconds to simulate the loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <section id="skills" className="py-16 bg-slate-200 text-black">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 hover:transition-all">
              {/* Skill Image */}
              <div className="flex justify-center mb-4">
                <img src={skill.imageUrl} alt={skill.name} className="w-16 h-16 object-contain" />
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-semibold text-center mb-4">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-blue-500 transition-all duration-1000 ease-in-out"
                  style={{ width: isLoading ? '0%' : `${skill.percentage}%` }} // Set dynamic width using inline style
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
