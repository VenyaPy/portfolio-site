import projectsData from "../../assets/Data/projectsData.js";
import './Projects.css'

export default function Projects() {
  return (
    <div className="projects-container">
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
    </div>
  );
}