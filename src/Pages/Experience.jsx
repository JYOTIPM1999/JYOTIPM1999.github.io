import styles from "./Experience.module.css";
import { FiExternalLink } from "react-icons/fi";
import { AiTwotoneBug } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
export const Experience = () => {
  useEffect(() => {
    AOS.init({ offset: 500, delay: 500 });
  }, []);
  return (
    <>
      <h1 className={styles.head}>Experience & Education</h1>
      <div id="EXPERIENCE" className={styles.mainDiv}>
        <div className={styles.box}>
          <h2 className={styles.h2text}>
            Full Stack Web Development{" "}
            <AiTwotoneBug style={{ color: "#05386b" }} />
          </h2>

          <h4 className={styles.h4text}>
            <a
              href="https://www.masaischool.com/"
              target="_blank"
              style={{ textDecoration: "none", color: "#05386b" }}
            >
              Masai School, Bangalore <FiExternalLink />, (02.2022 - 11.2022)
            </a>
          </h4>

          <h5 className={styles.h5}>
            Worked on
            <ul className={styles.ul}>
              <li>MERN Stack </li>
              <li>JavaScript </li>
              <li>Data Structure and Algorithms </li>
              <li>Soft Skills </li>
            </ul>
          </h5>
        </div>

        <div className={styles.box}>
          <h2 className={styles.h2text}>
            Chartered Accountacy
            <BsFillJournalBookmarkFill style={{ color: "#05386b" }} />
          </h2>
          <h4 className={styles.h4text}>
            <a
              href="https://www.icai.org/"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#05386b",
              }}
            >
              The Institute of Chartered Accountants of India <FiExternalLink />
            </a>
          </h4>

          <h5 className={styles.h5}>Worked at-:</h5>
          <p className={styles.ptext}>
            SPP Associates, Bhubaneswar, (10.2019 - 02.2022)
          </p>
          <h5 className={styles.h5}>
            Worked on
            <ul className={styles.ul}>
              <li>Company Audit </li>
              <li>Tax Audit</li>
              <li>Internal Audit </li>
              <li>Income Tax, GSTR Filling </li>
            </ul>
          </h5>
        </div>

        <div className={styles.box}>
          <h2 className={styles.h2text}>
            B.Com <BsFillJournalBookmarkFill style={{ color: "#05386b" }} />
          </h2>
          <h4 className={styles.h4text}>
            <a
              href="https://utkaluniversity.ac.in/"
              target="_blank"
              style={{ textDecoration: "none", color: "#05386b" }}
            >
              Utkal University, Bhubaneswar <FiExternalLink />, (08.2016 -
              03.2019)
            </a>
          </h4>
        </div>
      </div>
    </>
  );
};
