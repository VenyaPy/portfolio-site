import { useState } from 'react';
import aboutData from "../assets/aboutData.js";


export default function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const toggleImage = () => {
        const nextIndex = currentImageIndex === aboutData.images.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(nextIndex);
    };

    return (
        <div className="main">
            <div className="photo-container">
                <img src={aboutData.images[currentImageIndex]} alt="Photo" className="photo" onClick={toggleImage} />
            </div>
            <div className="content">
                <div className="greeting">
                    <h2>{aboutData.greeting}</h2>
                </div>
                <div className="about-me">
                    <h3>About Me</h3>
                    {aboutData.aboutMe.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className="tech-stack">
                    <h3>My Tech Stack</h3>
                    {Object.entries(aboutData.techStack).map(([key, value], index) => (
                        <p key={index}><strong>{key}:</strong> {value}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}