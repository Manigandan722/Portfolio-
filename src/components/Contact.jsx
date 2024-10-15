const Contact = () => {
    return (
      <section id="contact" className="p-8 bg-white">
        <h2 className="text-3xl font-bold mb-4 fade-in-up">Contact Me</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-4 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
            rows="5"
          ></textarea>
          <button className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transform hover:scale-105 transition-transform duration-300">
            Send Message
          </button>
        </form>
      </section>
    );
  };
  export default Contact;
  