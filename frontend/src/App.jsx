import './styles/App.css'
import { useState } from 'react';
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";

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


