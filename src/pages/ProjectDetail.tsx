import { Link, useParams } from "react-router-dom";
import projects from "../data/projects.json";
import type { Project } from "../types/Project";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  const { id } = useParams();

  const project = (projects as Project[]).find((p) => p.id === id);

  if (!project) {
    return <h2>Projeto não encontrado</h2>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.techs}>
        {project.techs.map((tech) => (
          <span key={tech} className={styles.badge}>
            {tech}
          </span>
        ))}
      </div>

      {project.problem && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Problema</h2>
          <p className={styles.text}>{project.problem}</p>
        </div>
      )}

      {project.approach && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Abordagem</h2>
          <p className={styles.text}>{project.approach}</p>
        </div>
      )}

      {project.results && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Resultados</h2>
          <p className={styles.text}>{project.results}</p>
        </div>
      )}

      {project.metrics && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Métricas</h2>
          <div className={styles.techs}>
            {project.metrics.map((m) => (
              <li key={m.name}>
                {m.name}: {m.value}
              </li>
            ))}
          </div>
        </div>
      )}

      {project.images && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Visualizações</h2>

          <div className={styles.imagesContainer}>
            {project.images.map((img) => (
              <img
                key={img}
                src={img}
                alt="Visualização do projeto"
                className={styles.image}
              />
            ))}
          </div>
        </div>
      )}

      {project.github ? (
        <a
          className={styles.githubLink}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver repositório no GitHub
        </a>
      ) : (
        <span style={{ color: "black" }}>
          (Repositório não disponível em função de confidencialidade)
        </span>
      )}

      <div style={{ marginTop: "20px" }}>
        <Link style={{ fontSize: "13px", color: "#343534" }} to={`/projects`}>
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
