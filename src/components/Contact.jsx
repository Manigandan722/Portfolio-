import React from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg lg:text-xl text-gray-400">
            Feel free to reach out to me via any of the platforms below. I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <FaEnvelope className="text-4xl mx-auto mb-4 text-blue-500" />
            <h3 className="text-2xl font-bold mb-2">Email</h3>
            <p className="text-gray-300">
              <a href="mailto:manivedi722@gmail.com" className="hover:underline">
                manivedi722@gmail.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <FaPhone className="text-4xl mx-auto mb-4 text-green-500" />
            <h3 className="text-2xl font-bold mb-2">Phone</h3>
            <p className="text-gray-300">
              <a href="tel:+91 9080053972" className="hover:underline">
                +91 9080053972
              </a>
            </p>
          </div>

          {/* GitHub */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <FaGithub className="text-4xl mx-auto mb-4 text-gray-400" />
            <h3 className="text-2xl font-bold mb-2">GitHub</h3>
            <p className="text-gray-300">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/yourusername
              </a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <FaLinkedin className="text-4xl mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
            <p className="text-gray-300">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/yourusername
              </a>
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
            <FaInstagram className="text-4xl mx-auto mb-4 text-pink-400" />
            <h3 className="text-2xl font-bold mb-2">Instagram</h3>
            <p className="text-gray-300">
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">
                instagram.com/yourusername
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
