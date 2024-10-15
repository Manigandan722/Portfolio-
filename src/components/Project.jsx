const Project = () => {
    const projectList = [
      { title: "Project 1", description: "Description of project 1" },
      { title: "Project 2", description: "Description of project 2" },
    ];
  
    return (
      <section id="projects" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectList.map((project, index) => (
            <div key={index} className="p-4 border rounded-md shadow-md">
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Project;
  