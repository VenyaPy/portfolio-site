import './styles/App.css'
import { useState } from 'react';
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Reviews from "./components/Reviews.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <>
      <div className="container">
        <Header setActiveSection={setActiveSection} />

        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'reviews' && <Reviews />}
      </div>
    </>
  )
}


