import projectsData from "../../assets/Data/projectsData.js";
import './Projects.css'
import { motion } from 'framer-motion';


export default function Projects() {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="projects-container"
    >
      {projectsData.map(project => (
        <a href={project.url} key={project.id} className="project-link">
          <div className="project">
            <img src={project.imageUrl} alt={project.title} className="img-project" />
            <div className="description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </a>
      ))}
    </motion.div>
  );
}