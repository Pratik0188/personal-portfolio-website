export default function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Live
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub
            </a>
          )}
        </div>
      </div>
    );
  }