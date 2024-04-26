import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Header({ setActiveSection }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

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
      <div className="clock">{time.toLocaleTimeString()}</div>
    </header>
  );
}

Header.propTypes = {
  setActiveSection: PropTypes.func.isRequired, // Добавление propTypes
};