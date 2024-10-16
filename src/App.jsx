import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Mani from "./assets/Mani_profile.jpeg";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="bg-fixed bg-cover h-screen"
      style={{ backgroundImage: `url(${Mani})` }}
    >
      <NavBar />
      <HeroSection />

      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
