import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-300 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">About Me</h2>
          <p className="text-lg lg:text-xl text-gray-600">
            Hi, I'm <span className="font-bold">Manigandan</span>, a passionate MERN stack developer. I specialize in building high-performance web applications and deploying them using modern cloud services like AWS Amplify, Vercel, and Netlify.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-black">My Expertise</h3>
          <p className="text-gray-300 mb-6 text-gray-600">
            I have a deep understanding of full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js), along with experience in cloud services for hosting and deployment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MERN Stack */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <h4 className="text-xl font-bold mb-4">MERN Stack</h4>
              <p className="text-gray-400 mb-4">
                Skilled in building full-stack applications using MongoDB, Express.js, React.js, and Node.js, ensuring dynamic and scalable web solutions.
              </p>
            </div>
            {/* AWS Amplify */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <h4 className="text-xl font-bold mb-4">AWS Amplify</h4>
              <p className="text-gray-400 mb-4">
                Experienced in deploying serverless applications using AWS Amplify, enabling real-time data synchronization, storage, and authentication.
              </p>
            </div>
            {/* Vercel */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <h4 className="text-xl font-bold mb-4">Vercel</h4>
              <p className="text-gray-400 mb-4">
                Deploying dynamic front-end applications using Vercel for fast, global delivery and serverless functionality.
              </p>
            </div>
            {/* Netlify */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <h4 className="text-xl font-bold mb-4">Netlify</h4>
              <p className="text-gray-400 mb-4">
                Skilled in deploying static websites and full-stack applications on Netlify, utilizing its global CDN and continuous deployment features.
              </p>
            </div>
          </div>
        </div>

        {/* Why Work With Me Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-black">Why Work With Me?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Full-Stack Expertise */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <h4 className="text-xl font-bold mb-4">Full-Stack Expertise</h4>
              <p className="text-gray-400">
                I have extensive experience in both frontend and backend development, ensuring seamless and optimized web applications.
              </p>
            </div>
            {/* Cloud Deployment */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <h4 className="text-xl font-bold mb-4">Cloud Deployment</h4>
              <p className="text-gray-400">
                I deploy applications using AWS Amplify, Vercel, and Netlify, ensuring your projects are scalable, performant, and secure.
              </p>
            </div>
            {/* Agile Development */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <h4 className="text-xl font-bold mb-4">Agile Development</h4>
              <p className="text-gray-400">
                My development process follows agile practices, ensuring that features are delivered quickly and adapt to your project’s evolving needs.
              </p>
            </div>
            {/* Scalable Solutions */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all">
              <h4 className="text-xl font-bold mb-4">Scalable Solutions</h4>
              <p className="text-gray-400">
                I build applications with scalability in mind, ensuring they can grow as your project or business expands.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Mission Statement */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6 text-black">My Mission</h3>
          <p className="text-gray-600 max-w-3xl mx-auto hover:scale-105 transition-all">
            As a developer, my mission is to create robust, intuitive, and user-friendly web applications that not only meet but exceed client expectations. I strive to deliver efficient and scalable solutions that help businesses and individuals succeed in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
