const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MERN Stack', 'Python', 'Flutter'];

  return (
    <section id="skills" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 fade-in-up">Skills</h2>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg hover:scale-110 transform transition-transform duration-300">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
