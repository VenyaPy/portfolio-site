import './styles/App.css'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Функция для определения текущего компонента на основе активного раздела
  const SectionComponent = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'reviews':
        return <Reviews />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container">
        <Header setActiveSection={setActiveSection} />
        <AnimatePresence mode="wait">
          <SectionComponent key={activeSection} />
        </AnimatePresence>
      </div>
    </>
  );
}


