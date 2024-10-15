import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Mani from './assets/Mani_profile.jpeg'
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ScrollParallax from "./components/ScrollParallax";


function App() {
  return (
    <div className="bg-fixed bg-cover h-screen"
    style={{ backgroundImage: `url(${Mani})` }}>
     {/* <Header /> */}
     <NavBar />
     <HeroSection />
     <ScrollParallax />
     {/* <About /> */}
     <Skills />
     <Project />
    </div>
  );
}

export default App;
