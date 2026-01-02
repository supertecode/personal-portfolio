import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <span className={styles.logo}>
          Portfólio Profissional | Murilo Emanoel S. Rodrigues
        </span>

        <div className={styles.links}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            Apresentação
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? styles.linkActive : styles.link
            }
          >
            Projetos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
