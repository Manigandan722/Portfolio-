const Project = () => {
    const projectList = [
        { title: "Automatic Door Lock System", description: "An automated door lock system using advanced technologies." },
        { title: "Smart Waste Management System", description: "A system for efficient waste management in metropolitan areas." },
        { title: "V3 Event Website", description: "An event management website developed using the MERN stack." },
        { title: "Employees Management System", description: "CRUD operations using Django for managing employee data." },
        { title: "Freelancer Job Portal", description: "A job portal built with the MERN stack." }
      ];
    
      return (
        <section id="projects" className="p-8 bg-white">
          <h2 className="text-3xl font-bold mb-4 fade-in-up">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectList.map((project, index) => (
              <div 
                key={index} 
                className="p-6 border rounded-md shadow-md hover:shadow-xl hover:border-blue-500 transition-all transform hover:scale-105 fade-in-up delay-200"
              >
                <h3 className="font-bold text-xl">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
  };
  export default Project;
  