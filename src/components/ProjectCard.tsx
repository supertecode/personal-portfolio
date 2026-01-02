import type { Project } from "../types/Project";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.techs}>
        {project.techs.map((tech) => (
          <span key={tech} className={styles.badge}>
            {tech}
          </span>
        ))}
      </div>

      <Link className={styles.link} to={`/projects/${project.id}`}>
        Ver detalhes
      </Link>
    </div>
  );
};

export default ProjectCard;
