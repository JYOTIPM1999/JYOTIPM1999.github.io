import styles from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
const project = [
  {
    image: "./Image/hb.png",
    alt: "heaven's basket",
    title: "Heaven's Basket",
    desc: "It is an shopping platform with E-commerece facility. Users can watch their favorite fruites and beverages.",
    tech: "NextJS | JWT | Java Script MongoDB | NodeJS | ChakraUI | HTML 5 | CSS 3",
    github: "https://github.com/JYOTIPM1999/Heaven-s-Basket",
    live: "https://annoyed-spark-4097-6yv7.vercel.app/",
  },
  {
    image: "./Image/chatapp.png",
    alt: "Chat_app",
    title: "Chat_App",
    desc: "It is an one to one and group chat app, you can make group with your friends and starts fun.",
    tech: "React | EmailJS | MongoDB | ExpressJS | Socket.IO | Java Script | HTML 5 | CSS 3 |",
    github: "https://github.com/JYOTIPM1999/Chat_App/tree/main/Chat_App",
    live: "https://chat-app-made-by-jyoti.vercel.app",
  },
  {
    image: "./Image/tt.png",
    alt: "Tracking time",
    title: "Tracking Time",
    desc: "It is a Time Management website. Group projects efficiency and productivity can tracked here.",
    tech: "React | Node | MongoDB | ExpressJS | Redux | Java Script | HTML 5 | CSS 3 |",
    github: "https://github.com/JYOTIPM1999/expert-hand-9078",
    live: "https://snazzy-nougat-6ca032.netlify.app/",
  },
  {
    image: "./Image/apple2.png",
    alt: "Apple TV",
    title: "Apple TV",
    desc: "It is an OTT platform with E-commerece facility. Users can watch their favorite series and movies here. Also they can purchase any Apple products from here.",
    tech: "HTML 5 | CSS 3 | API call | JSON Server |",
    github: "https://github.com/Amankumar654321/AppleTv_Clone",
    live: "https://dazzling-paprenjak-91b876.netlify.app/",
  },
  {
    image: "./Image/bb1.png",
    alt: "Beauty Bebo",
    title: "Beauty Bebo",
    desc: "It is an E-commerece website for womens and baby care. Users can purchase beauty products, baby products here.",
    tech: "Java Script | HTML 5 | CSS 3 | API call | JSON Server |",
    github: "https://github.com/HackerSushant76/BeautyBebo",
    live: "https://rainbow-frangipane-7695ac.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <>
      <h1 className={styles.head}>My Recent Works</h1>
      <div id="PROJECTS" className={styles.main}>
        <div>
          {project.map((el, i) => {
            return (
              <div key={i} className={styles.project}>
                <div>
                  <img src={el.image} alt={el.alt} className={styles.image} />
                </div>
                <div>
                  <h2 className={styles.h2text}>{el.title}</h2>
                  <p className={styles.para}>
                    <span style={{ color: "#fecd45", fontSize: "bold" }}>
                      Description:-{" "}
                    </span>
                    {el.desc}
                  </p>
                  <h4 className={styles.h2text}>Tech Stack used: {el.tech}</h4>
                  <div className={styles.buttonDiv}>
                    <button className={styles.buttons}>
                      <a href={el.github} target="_blank">
                        <AiFillGithub className={styles.icons} />
                      </a>
                    </button>
                    <button className={styles.buttons}>
                      <a href={el.live} target="_blank">
                        <MdLiveTv className={styles.icons} />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className={styles.project}>
            <div>
              <img src="./Image/hb.png" alt="hb.png" className={styles.image} />
            </div>
            <div>
              <h2 className={styles.h2text}>Heaven's Basket</h2>
              <p className={styles.para}>
                <span style={{ color: "#fecd45", fontSize: "bold" }}>
                  Description:-{" "}
                </span>
                It is an shopping platform with E-commerece facility. Users can
                watch their favorite fruites and beverages.
              </p>
              <h4 className={styles.h2text}>
                Tech Stack used: NextJS | JWT | Java Script MongoDB | NodeJS |
                ChakraUI | HTML 5 | CSS 3
              </h4>
              <div className={styles.buttonDiv}>
                <button className={styles.buttons}>
                  <a
                    href="https://github.com/JYOTIPM1999/Heaven-s-Basket"
                    target="_blank"
                  >
                    <AiFillGithub className={styles.icons} />
                  </a>
                </button>
                <button className={styles.buttons}>
                  <a
                    href="https://annoyed-spark-4097-6yv7.vercel.app/"
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
          </div> */}
        </div>
        <div>
          <img src="./Image/project.webp" className={styles.projectIcon} />
        </div>
      </div>
    </>
  );
};
