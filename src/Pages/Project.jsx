import styles from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const project = [
  {
    image: "./Image/hb.png",
    alt: "heaven's basket",
    title: "Heaven's Basket",
    desc: "It is an shopping platform with E-commerece facility. Users can watch their favorite fruites and beverages.",
    tech: "NextJS | JWT | Java Script MongoDB | NodeJS | ChakraUI | HTML 5 | CSS 3",
    github: "https://github.com/JYOTIPM1999/Heaven-s-Basket",
    live: "https://annoyed-spark-4097-6yv7.vercel.app/",
    back: "https://img.freepik.com/free-vector/artificial-intelligence-robots-cyborg-with-infinity-symbol_107791-4668.jpg?w=1380&t=st=1670247326~exp=1670247926~hmac=aaa29b51bd019aebc1b87b1393926c2bf385d297d3337a203ce78c5327c6a35a",
  },
  {
    image: "./Image/chatapp.png",
    alt: "Chat_app",
    title: "Chat_App",
    desc: "It is an one to one and group chat app, you can make group with your friends and starts fun.",
    tech: "React | EmailJS | MongoDB | ExpressJS | Socket.IO | Java Script | HTML 5 | CSS 3 |",
    github: "https://github.com/JYOTIPM1999/Chat_App/tree/main/Chat_App",
    live: "https://chat-app-made-by-jyoti.vercel.app",
    back: "https://img.freepik.com/free-vector/space-game-background-neon-night-alien-landscape_107791-1624.jpg?w=1380&t=st=1670252720~exp=1670253320~hmac=bee5836f866de014e6a517a6da29c2321cf547a5992fdd000774a648ea2f3bf3",
  },
  {
    image: "./Image/tt.png",
    alt: "Tracking time",
    title: "Tracking Time",
    desc: "It is a Time Management website. Group projects efficiency and productivity can tracked here.",
    tech: "React | Node | MongoDB | ExpressJS | Redux | Java Script | HTML 5 | CSS 3 |",
    github: "https://github.com/JYOTIPM1999/expert-hand-9078",
    live: "https://snazzy-nougat-6ca032.netlify.app/",
    back: "https://img.freepik.com/premium-vector/isometric-high-technology-concept_126283-1931.jpg",
  },
  {
    image: "./Image/apple2.png",
    alt: "Apple TV",
    title: "Apple TV",
    desc: "It is an OTT platform with E-commerece facility. Users can watch their favorite series and movies here. Also they can purchase any Apple products from here.",
    tech: "HTML 5 | CSS 3 | API call | JSON Server |",
    github: "https://github.com/Amankumar654321/AppleTv_Clone",
    live: "https://dazzling-paprenjak-91b876.netlify.app/",
    back: "https://img.freepik.com/free-vector/fantasy-landscape-with-magic-glowing-mushrooms-plants-sunset_107791-6016.jpg?size=626&ext=jpg",
  },
  {
    image: "./Image/bb1.png",
    alt: "Beauty Bebo",
    title: "Beauty Bebo",
    desc: "It is an E-commerece website for womens and baby care. Users can purchase beauty products, baby products here.",
    tech: "Java Script | HTML 5 | CSS 3 | API call | JSON Server |",
    github: "https://github.com/HackerSushant76/BeautyBebo",
    live: "https://rainbow-frangipane-7695ac.netlify.app/",
    back: "https://img.freepik.com/free-vector/cute-astronaut-alien-planet-space-cosmonaut_107791-8747.jpg?size=626&ext=jpg",
  },
];

export const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);

  return (
    <>
      <h1 className={styles.head}>My Recent Works</h1>
      <div id="PROJECTS" className={styles.main}>
        <div>
          {project.map((el, i) => {
            return (
              <div
                key={i}
                className={styles.project}
                // style={{ backgroundImage: `url(${el.back})` }}
                // data-aos="zoom-in-up"
              >
                <div>
                  <img src={el.image} alt={el.alt} className={styles.image} />
                </div>
                <div>
                  <h2 className={styles.h2text}>{el.title}</h2>
                  <p className={styles.para}>
                    <span style={{ color: "#05386b", fontSize: "bold" }}>
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
        </div>
        {/* <div>
          <img src="./Image/project.gif" className={styles.projectIcon} />
        </div> */}
      </div>
    </>
  );
};
