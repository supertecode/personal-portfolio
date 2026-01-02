import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Olá! Me chamo Murilo!</h1>
      <h1 className={styles.title}>Seja bem-vindo(a) ao meu portfólio👋</h1>

      <p className={styles.subtitle}>
        Aqui você encontrará projetos de Machine Learning, Análise de Dados e
        Inteligência Artificial
      </p>

      <div className={styles.section}>
        <h2>Sobre mim</h2>
        <div className={styles.flex}>
          <div className={styles.avatar}>
            <img src="src/assets/myself.jpg"></img>
          </div>
          <p className={styles.textojustificado}>
            Bacharel em Ciência da Computação pela Universidade Tecnológica
            Federal do Paraná. Entusiasta de tecnologia e inovação, com foco em
            Data Science, Machine Learning, Inteligência Artificial e
            Desenvolvimento. Atua como Desenvolvedor Full Stack em nível de
            estagiário na Caminho Mínimo Desenvolvimento de Sistemas, e foca
            também na área de dados. Junto de professores da UTFPR atuou em
            empresas como DAF Caminhões e LojasMM, em soluções baseadas em
            desenvolvimento de software e ciência de dados.
          </p>
        </div>
        <h2 style={{ marginBottom: "40px" }}>Minhas redes</h2>
        <div className={styles.flex}>
          <div className={styles.redesocial}>
            <a
              href="https://www.linkedin.com/in/murilo-emanoel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src/assets/linkedin.png"></img>
            </a>
          </div>
          <div className={styles.redesocial}>
            <a
              href="https://github.com/supertecode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src/assets/github.png"></img>
            </a>
          </div>
        </div>
        <Link to="/projects" className={styles.btn}>
          Ir para projetos →
        </Link>
      </div>
    </div>
  );
};

export default Home;
