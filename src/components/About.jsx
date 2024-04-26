import { useState } from 'react';

export default function About() {
    const image1 = "https://i.ibb.co/9WWqfHg/123.jpg";
    const image2 = "https://i.ibb.co/2yLmFZ3/333.jpg";

    const [currentImage, setCurrentImage] = useState(image1);

    const toggleImage = () => {
        setCurrentImage(currentImage === image1 ? image2 : image1);
    };

    return (
        <div className="main">
            <div className="photo-container">
                <img src={currentImage} alt="Photo" className="photo" onClick={toggleImage} />
                <button className="next" onClick={toggleImage}>Сменить фото</button>
            </div>
            <div className="content">
                <div className="greeting">
                    <h2>Hi, I am Venya</h2>
                </div>
                <div className="about-me">
                    <h3>About Me</h3>
                    <p>I am a Fullstack Developer, specializing in Backend Development.</p>
                    <p>My journey began as a Content Manager, and I have since transitioned into a developer role.</p>
                </div>
                <div className="tech-stack">
                    <h3>My Tech Stack</h3>

                    <p>Languages: JavaScript, Python</p>
                    <p>Web Technologies: HTML, CSS, React JS</p>
                    <p>Backend Frameworks: FastAPI</p>
                    <p>Database Systems: PostgreSQL, SQLite</p>
                    <p>ORM: SQLAlchemy</p>
                    <p>Telegram Bot Framework: Aiogram</p>
                    <p>Caching: Redis</p>
                    <p>Task Queue: Celery</p>
                    <p>Containerization: Docker</p>

                </div>
            </div>
        </div>
    );
}