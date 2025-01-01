import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { experienceData, educationData } from "./data/timelineData";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <About />
      <Skills />
      <div id="experience" className="bg-white">
        <Timeline
          items={[...experienceData, ...educationData]}
          title="Experience & Education"
        />
      </div>

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
