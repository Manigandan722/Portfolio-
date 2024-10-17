import React from 'react';

const projects = [
  {
    title: 'Gateway Software Solutions',
    description:
      'A comprehensive software platform providing solutions for enterprise resource planning and business management. Includes modules for accounting, HR, and customer relations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS Amplify'],
    liveDemo: 'https://gateway-software-sollution.vercel.app/', // Replace with actual link
    github: 'https://github.com/Manigandan722/gateway_software_sollution', // Replace with actual link
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing my work, skills, and experience. Built with React and Tailwind CSS, and deployed on Vercel for fast and reliable performance.',
    technologies: ['React', 'Tailwind CSS', 'Vercel'],
    liveDemo: 'https://www.manigandan.site/', // Replace with actual link
    github: 'https://github.com/Manigandan722/Portfolio-', // Replace with actual link
  },
  {
    title: 'Cloudinary Image Upload Backend and Frontend Server',
    description:
      'A full-stack image upload platform using Cloudinary for secure image storage and retrieval, with an intuitive frontend for uploading and managing images.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    liveDemo: '', // Replace with actual link
    github: 'https://github.com/Manigandan722/cloudinery_image_upload', // Replace with actual link
  },
  {
    title: 'Imagify - Cloudinary AI Image Editing SaaS Platform',
    description:
      'An AI-powered image editing platform built on Cloudinary. This SaaS platform allows users to edit and enhance images using AI tools and automated processes.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'AI'],
    liveDemo: 'https://imagefy-puce.vercel.app/', // Replace with actual link
    github: 'https://github.com/yourusername/imagify-saas', // Replace with actual link
  },
  {
    title: 'CRUD Operations using MERN',
    description:
      'A web application demonstrating basic CRUD (Create, Read, Update, Delete) operations using the MERN stack. Features include data management and dynamic form handling.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveDemo: '', // Replace with actual link
    github: 'https://github.com/Manigandan722/CRUD_MERN', // Replace with actual link
  },
  {
    title: 'Image Server',
    description:
      'A backend image server that allows users to upload, store, and retrieve images. Built using Node.js and Express, with MongoDB for database management.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    liveDemo: '', // Replace with actual link
    github: 'https://github.com/Manigandan722/Img_backend', // Replace with actual link
  },
  {
    title: 'Employee Management System',
    description:
      'A comprehensive employee management system built with the MERN stack. Includes features like employee onboarding, attendance tracking, and payroll management.',
    technologies: ['python', 'Django', 'sqlite3'],
    liveDemo: '', // Replace with actual link
    github: 'https://github.com/Manigandan722/Django_project', // Replace with actual link
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Here are some of the projects I’ve worked on, showcasing my skills in full-stack development and cloud services.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 hover:transition-all">
              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              {/* Project Description */}
              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Technologies Used */}
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-2">Technologies:</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex space-x-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
