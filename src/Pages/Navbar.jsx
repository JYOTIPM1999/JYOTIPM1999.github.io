import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { Resume } from "./Resume";
const menu = [
  { id: 1, title: "SKILLS", offset: -150 },
  { id: 2, title: "EXPERIENCE", offset: -150 },
  { id: 3, title: "PROJECTS", offset: -150 },
  { id: 4, title: "STATS", offset: -150 },
  { id: 5, title: "CONTACT", offset: -150 },
  // { id: 6, title: "RESUME", offset: -150 },
];

export const Navbar = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.linkTag}>
        <Link to={"Homepage"} smooth={true} offset={-105} duration={1500}>
          <img
            src="./Image/logos.gif"
            alt="logos.gif"
            className={styles.image}
          />
        </Link>
      </div>
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
        <li>
          <Resume />
        </li>
      </ul>
    </div>
  );
};
