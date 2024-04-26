import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export default function Header({ setActiveSection }) {
  const [time, setTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false); // State to toggle dark mode

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? '' : 'dark-mode'; // Toggle dark mode class on body
  };

  return (
      <header>
        <div className="logo">VenyaPy</div>
        <div className="sections">
          <ul>
            <li className="section" onClick={() => setActiveSection('about')}>Обо мне</li>
            <li className="section" onClick={() => setActiveSection('projects')}>Мои проекты</li>
            <li className="section" onClick={() => setActiveSection('contact')}>Связаться</li>
          </ul>
        </div>
        <div className="clock">{time.toLocaleTimeString()}
          <img src="https://i.ibb.co/TKH2bB6/free-icon-contrast-475980.png" alt="free-icon-contrast-475980"
               className="light" onClick={toggleDarkMode}/>
        </div>

      </header>
  );
}

Header.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};