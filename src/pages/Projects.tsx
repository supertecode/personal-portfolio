import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../types/Project";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <h1 className={styles.title}>Projetos de Ciência de Dados</h1> */}
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
