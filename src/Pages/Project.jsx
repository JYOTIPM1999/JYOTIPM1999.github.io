import styles from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";

export const Projects = () => {
  return (
    <>
      <h1 className={styles.head}>My Recent Works</h1>
      <div id="PROJECTS" className={styles.main}>
        <div>
          <div className={styles.project}>
            <div>
              <img
                src="./Image/chatapp.png"
                alt="chatapp.png"
                className={styles.image}
              />
            </div>
            <div>
              <h2 className={styles.h2text}>Chat App</h2>
              <p className={styles.para}>
                <span style={{ color: "#fecd45", fontSize: "bold" }}>
                  Description:-{" "}
                </span>
                It is an one to one and group chat app, you can make group with
                your friends and starts fun.
              </p>
              <h4 className={styles.h2text}>
                Tech Stack used: React | EmailJS | MongoDB | ExpressJS |
                Socket.IO | Java Script | HTML 5 | CSS 3 |
              </h4>
              <div className={styles.buttonDiv}>
                <button className={styles.buttons}>
                  <a
                    href="https://github.com/JYOTIPM1999/Chat_App/tree/main/Chat_App"
                    target="_blank"
                  >
                    <AiFillGithub className={styles.icons} />
                  </a>
                </button>
                <button className={styles.buttons}>
                  <a
                    href="https://chat-app-made-by-jyoti.vercel.app"
                    target="_blank"
                  >
                    <MdLiveTv className={styles.icons} />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className={styles.project}>
            <div>
              <img src="./Image/tt.png" alt="tt.png" className={styles.image} />
            </div>
            <div>
              <h2 className={styles.h2text}>Tracking Time Clone</h2>
              <p className={styles.para}>
                <span style={{ color: "#fecd45", fontSize: "bold" }}>
                  Description:-{" "}
                </span>
                It is a Time Management website. Group projects efficiency and
                productivity can tracked here.
              </p>
              <h4 className={styles.h2text}>
                Tech Stack used: React | Node | MongoDB | ExpressJS | Redux |
                Java Script | HTML 5 | CSS 3 |
              </h4>
              <div className={styles.buttonDiv}>
                <button className={styles.buttons}>
                  <a
                    href="https://github.com/JYOTIPM1999/expert-hand-9078"
                    target="_blank"
                  >
                    <AiFillGithub className={styles.icons} />
                  </a>
                </button>
                <button className={styles.buttons}>
                  <a
                    href="https://snazzy-nougat-6ca032.netlify.app/"
                    target="_blank"
                  >
                    <MdLiveTv className={styles.icons} />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
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
                <span style={{ color: "#fecd45", fontSize: "bold" }}>
                  Description:-{" "}
                </span>
                It is an OTT platform with E-commerece facility. Users can watch
                their favorite series and movies here. Also they can purchase
                any Apple products from here.
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
                    <AiFillGithub className={styles.icons} />
                  </a>
                </button>
                <button className={styles.buttons}>
                  <a
                    href="https://dazzling-paprenjak-91b876.netlify.app/"
                    target="_blank"
                  >
                    <MdLiveTv className={styles.icons} />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div className={styles.project}>
            <div>
              <img
                src="./Image/bb1.png"
                alt="bb1.png"
                className={styles.image}
              />
            </div>
            <div>
              <h2 className={styles.h2text}>Beauty Bebo Clone</h2>
              <p className={styles.para}>
                <span style={{ color: "#fecd45", fontSize: "bold" }}>
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
                    <AiFillGithub className={styles.icons} />
                  </a>
                </button>
                <button className={styles.buttons}>
                  <a
                    href="https://rainbow-frangipane-7695ac.netlify.app/"
                    target="_blank"
                  >
                    <MdLiveTv className={styles.icons} />
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
    </>
  );
};
