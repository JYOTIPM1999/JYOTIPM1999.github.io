import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { Resume } from "./Resume";
const menu = [
  { id: 1, title: "SKILLS", offset: -150 },
  { id: 2, title: "EXPERIENCE", offset: -150 },
  { id: 3, title: "PROJECTS", offset: -150 },
  { id: 4, title: "CONTACT", offset: -150 },
];

export const Navbar = () => {
  return (
    <div className={styles.mainDiv}>
      <Link to={"Homepage"} smooth={true} offset={-105} duration={1500}>
        <img src="./Image/logo.gif" alt="logo.gif" className={styles.image} />
      </Link>
      <ul className={styles.ull}>
        {menu.map((el) => (
          <li key={el.id} className={styles.lii}>
            <Link
              to={el.title}
              smooth={true}
              offset={el.offset}
              duration={1500}
            >
              {el.title}
            </Link>
          </li>
        ))}
        <li className={styles.lii}>
          <Resume />
        </li>
      </ul>
    </div>
  );
};
