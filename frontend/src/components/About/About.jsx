import { useState } from 'react';
import aboutData from "../../assets/Data/aboutData.js";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './About.css'
import {AnimatePresence, motion} from 'framer-motion';


export default function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [language, setLanguage] = useState('ru');

    const toggleImage = () => {
        const nextIndex = currentImageIndex === aboutData.images.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(nextIndex);
    };

    const data = aboutData[language];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="main"
        >
            <div className="photo-container">
                <img src={aboutData.images[currentImageIndex]} alt="Photo" className="photo" onClick={toggleImage}/>
            </div>
            <div className="content">
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={language}
                        timeout={900}
                        classNames="fade"
                    >
                        <div>
                            <div className="greeting">
                                <h2>{data.greeting}</h2>
                            </div>
                            <div className="about-me">
                                <h3>{data.aboutMeTitle}</h3>
                                {data.aboutMe.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="tech-stack">
                                <h3>{data.techStackTitle}</h3>
                                {Object.entries(data.techStack).map(([key, value], index) => (
                                    <p key={index}><strong>{key}:</strong> {value}</p>
                                ))}
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <div className="language-buttons">
                    <button onClick={() => setLanguage('en')}>EN</button>
                    <button onClick={() => setLanguage('ru')}>RU</button>
                </div>
            </div>
        </motion.div>
    );
}