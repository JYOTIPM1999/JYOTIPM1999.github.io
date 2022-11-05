import styles from "./Project.module.css";
export const Projects = () => {
  return (
    <div id="PROJECTS" className={styles.main}>
      {/* <h1 className={styles.head}>My Recent Works</h1> */}

      <div>
        <div className={styles.project}>
          <div>
            <img
              src="./Image/apple2.png"
              alt="apple2.png"
              className={styles.image}
            />
          </div>
          <div>
            <h2 className={styles.h2text}>Apple TV Clone</h2>
            <p className={styles.para}>
              <span style={{ color: "red", fontSize: "bold" }}>
                Description:-{" "}
              </span>
              It is an OTT platform with E-commerece facility. Users can watch
              their favorite series and movies here. Also they can purchase any
              Apple products from here.
            </p>
            <h4 className={styles.h2text}>
              Tech Stack used: Java Script | HTML 5 | CSS 3 | API call | JSON
              Server
            </h4>
            <div className={styles.buttonDiv}>
              <button className={styles.buttons}>
                <a
                  href="https://github.com/Amankumar654321/AppleTv_Clone"
                  target="_blank"
                >
                  Source Code
                </a>
              </button>
              <button className={styles.buttons}>
                <a
                  href="https://dazzling-paprenjak-91b876.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className={styles.project}>
          <div>
            <img src="./Image/bb1.png" alt="bb1.png" className={styles.image} />
          </div>
          <div>
            <h2 className={styles.h2text}>Beauty Bebo Clone</h2>
            <p className={styles.para}>
              <span style={{ color: "red", fontSize: "bold" }}>
                Description:-{" "}
              </span>
              It is an E-commerece website for womens and baby care. Users can
              purchase beauty products, baby products here.
            </p>
            <h4 className={styles.h2text}>
              Tech Stack used: Java Script | HTML 5 | CSS 3 | API call | JSON
              Server
            </h4>
            <div className={styles.buttonDiv}>
              <button className={styles.buttons}>
                <a
                  href="https://github.com/HackerSushant76/BeautyBebo"
                  target="_blank"
                >
                  Source Code
                </a>
              </button>
              <button className={styles.buttons}>
                <a
                  href="https://rainbow-frangipane-7695ac.netlify.app/"
                  target="_blank"
                >
                  Live
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="./Image/project.webp" className={styles.projectIcon} />
      </div>
    </div>
  );
};
